export class ContactPage {
    constructor() {
        this.teamData = null;
    }

    async loadData() {
        try {
            const response = await fetch('/src/data/team-data.json');
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
        const radius = 35;
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
                    <div class="trajectory-start">
                        <div class="planet-icon earth">🌍</div>
                        <span>${trajectory.from}</span>
                    </div>
                    <div class="trajectory-progress">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: ${trajectory.progress}%"></div>
                            <div class="rocket-icon" style="left: ${trajectory.progress}%">🚀</div>
                        </div>
                        <span class="trajectory-label">MARS TRAJECTORY</span>
                    </div>
                    <div class="trajectory-end">
                        <span>${trajectory.to}</span>
                        <div class="planet-icon mars">🔴</div>
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
                
                <div class="crew-photo-container">
                    <img src="./src/assets/images/team/${member.photo}" alt="${member.realName}" class="crew-photo">
                    <div class="photo-glow"></div>
                    <div class="radar-section">
                        <canvas id="radar-${index}" width="100" height="100"></canvas>
                    </div>
                </div>
                
                <div class="crew-header">
                    <div class="callsign-label">호출 부호:</div>
                    <div class="callsign">${member.callsign}</div>
                </div>
                
                <div class="crew-info">
                    <div class="role-label">역할:</div>
                    <div class="role">${member.role}</div>
                </div>
                
                <div class="tech-stack">
                    ${member.techStack.map(tech => `
                        <div class="tech-icon" title="${tech.name}">
                            <span class="icon">${tech.icon}</span>
                            <span class="tech-name">${tech.name}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="crew-status">
                    <span class="status-label">상태:</span>
                    <span class="status-value ${member.status.availability.toLowerCase().replace(' ', '-')}">${member.status.availability}</span>
                    <span class="status-location">(${member.status.location})</span>
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
                <div class="page contact-page">
                    <div class="loading">크루 명단 로딩 중...</div>
                </div>
            `;
        }

        return `
            <div class="page contact-page">
                ${this.renderMissionHeader()}
                
                <div class="crew-grid">
                    ${this.teamData.crew.map((member, index) => this.renderCrewCard(member, index)).join('')}
                </div>
                
                ${this.renderCommsTable()}
            </div>
        `;
    }
}
