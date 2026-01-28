import { missionData } from '../data/teamData.js';

export class ContactPage {
    constructor() {
        this.missionData = missionData;
    }

    mount() {
        // Initialize radar charts after DOM is ready
        setTimeout(() => {
            this.missionData.team_members.forEach((member, index) => {
                this.drawRadarChart(`radar-${index}`, member.radar_chart_data);
            });
        }, 100);
    }

    drawRadarChart(canvasId, data) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 80;
        const labels = ['Focus', 'Nav', 'Eng', 'Comm', 'Surv'];
        const values = [data.focus, data.navigation, data.engineering, data.communication, data.survival];
        const numPoints = 5;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background grid
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 0.1)';
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
        ctx.fillStyle = 'hsla(210, 100%, 50%, 0.2)';
        ctx.strokeStyle = 'hsl(210, 100%, 50%)';
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
        ctx.fillStyle = 'hsl(210, 100%, 50%)';
        for (let i = 0; i < numPoints; i++) {
            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
            const value = values[i] / 100;
            const r = radius * value;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw labels
        ctx.fillStyle = 'hsl(0, 0%, 96%)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        for (let i = 0; i < numPoints; i++) {
            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
            const x = centerX + (radius + 20) * Math.cos(angle);
            const y = centerY + (radius + 20) * Math.sin(angle);
            ctx.fillText(labels[i], x, y + 4);
        }
    }

    getStatusColor(availability) {
        switch (availability) {
            case 'In-Operation': return 'var(--color-success)';
            case 'Stand-by': return 'var(--color-primary)';
            case 'Off-duty': return 'var(--color-text-secondary)';
            default: return 'var(--color-danger)';
        }
    }

    renderMemberCard(member, index) {
        return `
            <div class="member-card">
                <!-- Corner Brackets -->
                <div class="corner-bracket top-left"></div>
                <div class="corner-bracket top-right"></div>
                <div class="corner-bracket bottom-left"></div>
                <div class="corner-bracket bottom-right"></div>

                <!-- Header -->
                <div class="member-header">
                    <div class="callsign">${member.callsign}</div>
                    <div class="status-indicator" style="background: ${this.getStatusColor(member.status.availability)}"></div>
                </div>

                <!-- Main Info -->
                <div class="member-info">
                    <h3 class="member-name">${member.real_name}</h3>
                    <div class="member-role">${member.mission_role}</div>
                    <div class="member-dept">${member.department}</div>
                </div>

                <!-- Radar Chart -->
                <div class="radar-container">
                    <canvas id="radar-${index}" width="200" height="200"></canvas>
                </div>

                <!-- Status Panel -->
                <div class="status-panel">
                    <div class="status-row">
                        <span class="label">LOCATION:</span>
                        <span class="value">${member.status.location}</span>
                    </div>
                    <div class="status-row">
                        <span class="label">STATUS:</span>
                        <span class="value" style="color: ${this.getStatusColor(member.status.availability)}">${member.status.availability}</span>
                    </div>
                    <div class="status-row">
                        <span class="label">VITAL:</span>
                        <span class="value">${member.status.vital_sign}</span>
                    </div>
                </div>

                <!-- Core Modules -->
                <div class="core-modules">
                    <div class="modules-label">CORE MODULES</div>
                    <div class="modules-list">
                        ${member.core_modules.map(module => `<span class="module-tag">${module}</span>`).join('')}
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="contact-info">
                    <div class="contact-row">
                        <span class="icon">📡</span>
                        <a href="mailto:${member.contact.comm_id}" class="contact-link">${member.contact.comm_id}</a>
                    </div>
                    <div class="contact-row">
                        <span class="icon">💻</span>
                        <a href="https://${member.contact.tech_logs}" target="_blank" class="contact-link">${member.contact.tech_logs}</a>
                    </div>
                    <div class="contact-row">
                        <span class="icon">🔐</span>
                        <span class="encryption-key">${member.contact.encryption_key}</span>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        return `
            <div class="page contact-page">
                <!-- Hero Section -->
                <div class="contact-hero">
                    <div class="mission-badge">MISSION ${this.missionData.mission_id}</div>
                    <h1 class="page-title">CREW MANIFEST</h1>
                    <p class="page-subtitle">Elite team pushing the boundaries of propulsion technology</p>
                    <div class="grid-overlay"></div>
                </div>

                <!-- Team Grid -->
                <div class="container">
                    <div class="team-grid">
                        ${this.missionData.team_members.map((member, index) => this.renderMemberCard(member, index)).join('')}
                    </div>
                </div>

                <!-- Footer CTA -->
                <div class="contact-cta">
                    <h2>JOIN THE MISSION</h2>
                    <p>We're always looking for exceptional talent to join our crew.</p>
                    <a href="mailto:recruit@mars.inc" class="btn-primary">SEND TRANSMISSION</a>
                </div>
            </div>
        `;
    }
}
