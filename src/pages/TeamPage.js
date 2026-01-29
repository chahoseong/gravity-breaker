
export class TeamPage {
    constructor() {
        this.teamData = null;
    }

    async loadData() {
        try {
            // Use absolute path from root + cache busting
            const timestamp = new Date().getTime();
            const response = await fetch(`/src/data/team-data.json?v=${timestamp}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.teamData = await response.json();
        } catch (error) {
            console.error('Failed to load team data:', error);
            this.teamData = { mission: {}, crew: [] };
        }
    }

    async mount() {
        await this.loadData();
        // Re-render with loaded data
        const mainContent = document.getElementById('main-content');
        if (mainContent && this.teamData) {
            mainContent.innerHTML = this.render();
            // Use requestAnimationFrame for better timing
            requestAnimationFrame(() => {
                this.teamData.crew.forEach((member, index) => {
                    this.drawRadarChart(`radar-${index}`, member.radarData);
                });
            });
        }
    }

    drawRadarChart(canvasId, data) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 50;
        const labels = ['집중', '항법', '공학', '통신', '생존'];
        const values = [data.focus, data.navigation, data.engineering, data.communication, data.survival];
        const numPoints = 5;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background grid (pentagon)
        ctx.strokeStyle = 'hsla(180, 100%, 50%, 0.15)';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            const r = (radius / 5) * i;
            for (let j = 0; j <= numPoints; j++) {
                const angle = (Math.PI * 2 * j) / numPoints - Math.PI / 2;
                const x = centerX + r * Math.cos(angle);
                const y = centerY + r * Math.sin(angle);
                if (j === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }

        // Draw axis lines
        for (let i = 0; i < numPoints; i++) {
            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
            ctx.stroke();
        }

        // Draw data polygon
        ctx.fillStyle = 'hsla(180, 100%, 50%, 0.2)';
        ctx.strokeStyle = 'hsl(180, 100%, 50%)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i <= numPoints; i++) {
            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
            const value = values[i % numPoints] / 100;
            const r = radius * value;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw points
        ctx.fillStyle = 'hsl(180, 100%, 50%)';
        for (let i = 0; i < numPoints; i++) {
            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
            const value = values[i] / 100;
            const r = radius * value;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    renderMissionHeader() {
        if (!this.teamData || !this.teamData.mission) return '';

        const { classification, id, title, trajectory } = this.teamData.mission;

        return `
            <div class="mission-header">
                <div class="mission-title">
                    <span class="classification">[${classification}]</span>
                    <span class="mission-id">MISSION ${id}:</span>
                    <span class="mission-name">${title}</span>
                </div>
                <div class="trajectory-bar">
                    <div class="trajectory-start planet-icon">
                        <span>🌍</span>
                        <span>${trajectory.from}</span>
                    </div>
                    <div class="trajectory-progress">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: ${trajectory.progress}%"></div>
                            <div class="rocket-icon" style="left: ${trajectory.progress}%">
                                <span>🚀</span>
                            </div>
                        </div>
                        <div class="trajectory-label">MARS TRAJECTORY</div>
                    </div>
                    <div class="trajectory-end planet-icon">
                        <span>🔴</span>
                        <span>${trajectory.to}</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderCrewCard(member, index) {
        return `
            <div class="crew-card">
                <div class="card-corner tl"></div>
                <div class="card-corner tr"></div>
                <div class="card-corner bl"></div>
                <div class="card-corner br"></div>
                
                <div class="crew-header-section">
                    <div class="crew-photo-container">
                        <img src="/assets/img/team/${member.photo}" alt="${member.realName}" class="crew-photo" onerror="this.src='/assets/img/default-face.png';">
                        <div class="photo-glow"></div>
                    </div>
                    
                    <div class="crew-identity">
                        <div class="callsign-section">
                            <div class="callsign-label">CALLSIGN:</div>
                            <div class="callsign">${member.callsign}</div>
                        </div>
                        <div class="role-section">
                            <div class="role-label">ROLE:</div>
                            <div class="role">${member.role}</div>
                        </div>
                        
                        <!-- Communication Protocol -->
                        <div class="comms-protocol-inline">
                            <div class="comms-item">
                                <div class="comms-label">SUBSPACE COMMS ID:</div>
                                <div class="comms-value">${member.contact.commsId}</div>
                            </div>
                            <div class="comms-item">
                                <div class="comms-label">TECH LOGS:</div>
                                <a href="https://${member.contact.techLog}" target="_blank" class="comms-link">
                                    ${member.contact.techLog}
                                </a>
                            </div>
                        </div>
                        
                        <div class="tech-stack">
                            ${member.techStack.map(tech => `
                                <div class="tech-badge" title="${tech.name}">
                                    <span class="tech-icon-small">${tech.icon}</span>
                                    <span class="tech-name-small">${tech.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="crew-stats-section">
                    <div class="stats-label">Stats</div>
                    <div class="radar-container">
                        <canvas id="radar-${index}" width="140" height="140"></canvas>
                    </div>
                    <div class="stats-values">
                        <div class="stat-item">
                            <span class="stat-label">Focus</span>
                            <span class="stat-value">${member.radarData.focus}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Nav</span>
                            <span class="stat-value">${member.radarData.navigation}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Eng</span>
                            <span class="stat-value">${member.radarData.engineering}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Comm</span>
                            <span class="stat-value">${member.radarData.communication}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Surv</span>
                            <span class="stat-value">${member.radarData.survival}</span>
                        </div>
                    </div>
                </div>
                
                <div class="crew-status-section">
                    <div class="status-header">STATUS:</div>
                    <div class="status-content">
                        <span class="status-indicator ${member.status.availability.toLowerCase().replace(' ', '-')}"></span>
                        <span class="status-text">${member.status.availability}</span>
                    </div>
                    <div class="status-location">(${member.status.location})</div>
                </div>
            </div>
        `;
    }

    renderCommsTable() {
        if (!this.teamData || !this.teamData.crew) return '';

        return `
            <div class="comms-protocol">
                <div class="comms-header">통신 프로토콜</div>
                <div class="comms-table">
                    <div class="table-header">
                        <div class="col-callsign">호출 부호</div>
                        <div class="col-role">역할</div>
                        <div class="col-comms">통신 ID</div>
                        <div class="col-tech">기술 로그</div>
                    </div>
                    ${this.teamData.crew.map(member => `
                        <div class="table-row">
                            <div class="col-callsign">${member.callsign}</div>
                            <div class="col-role">${member.role}</div>
                            <div class="col-comms">${member.contact.commsId}</div>
                            <div class="col-tech">
                                <a href="https://${member.contact.techLog}" target="_blank" class="tech-link">
                                    ${member.contact.techLog}
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    render() {
        if (!this.teamData) {
            return `
                <div class="page team-page">
                    <div class="loading">크루 명단 로딩 중...</div>
                </div>
            `;
        }

        return `
            <div class="page team-page">
                <div class="container">
                    ${this.renderMissionHeader()}
                    
                    <div class="crew-grid">
                        ${this.teamData.crew.map((member, index) => this.renderCrewCard(member, index)).join('')}
                    </div>
                    
                    ${this.renderCommsTable()}
                </div>
            </div>
        `;
    }
}
