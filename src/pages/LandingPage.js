import { resolvePath } from '../utils/paths.js';
import { engineSpecs, recentNews } from '../data/landingData.js';

/* 1. Hero Section Component */
class HeroSection {
    render() {
        return `
            <section class="hero-section">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <img src="${resolvePath('/assets/img/logo.png')}" alt="Gravity Breaker Logo" class="hero-logo">
                    <h1 class="hero-title text-h1">Gravity Breaker</h1>
                    <p class="hero-subtitle">돌아갈 곳은 없다. 오직 별들을 향한 전진뿐.</p>
                    <div class="cta-group">
                        <button class="btn btn-primary" onclick="window.location.href='${resolvePath('/about')}'">미션 브리핑</button>
                    </div>
                </div>
            </section>
        `;
    }
}

/* 2. Tech Specs Section Component */
class TechSpecsSection {
    render() {
        const engineCards = engineSpecs.map(spec => `
            <div class="card engine-card">
                <div class="engine-image" style="background-image: url('${spec.imageUrl}');"></div>
                <div class="engine-details">
                    <h3 class="text-h2" style="font-size: 1.5rem; margin-bottom: 1rem;">${spec.modelName}</h3>
                    <p style="margin-bottom: 1rem; color: var(--color-text-secondary);">${spec.description}</p>
                    <div class="specs-list">
                        <div class="spec-row">
                            <span class="spec-label">Max Thrust</span>
                            <span class="spec-value">${spec.maxThrust} kN</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Specific Impulse</span>
                            <span class="spec-value">${spec.specificImpulse} s</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">Reusability</span>
                            <span class="spec-value" style="color: ${spec.isReusable ? 'var(--color-success)' : 'var(--color-danger)'}">
                                ${spec.isReusable ? 'Certified' : 'Expendable'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <section class="tech-specs-section">
                <div class="container">
                    <h2 class="text-h2 text-center">Engine Fleet</h2>
                    <div class="specs-grid">
                        ${engineCards}
                    </div>
                </div>
            </section>
        `;
    }
}

/* 3. News Section Component */
class NewsSection {
    render() {
        const newsItems = recentNews.map(news => `
            <div class="card news-card">
                <div class="card-header">
                    <span class="news-date text-mono">${news.date}</span>
                    <h3 class="news-title">${news.title}</h3>
                </div>
                <div class="card-content">
                    <p style="font-size: 0.9rem; color: var(--color-text-secondary);">${news.summary}</p>
                </div>
                <!-- Decorators -->
                <div class="card-decor-bl"></div>
            </div>
        `).join('');

        return `
            <section class="news-section container">
                <h2 class="text-h2">Mission Updates</h2>
                <div class="news-grid" style="margin-top: 2rem;">
                    ${newsItems}
                </div>
            </section>
        `;
    }
}

/* 4. CTA Section Component */
class CTASection {
    render() {
        return `
            <section class="cta-section">
                <div class="container">
                    <h2 class="text-h2" style="margin-bottom: 1rem;">Ready to Launch?</h2>
                    <p style="max-width: 600px; margin: 0 auto 2rem; color: var(--color-text-secondary);">
                        Join us in building the infrastructure for the next century of space exploration.
                    </p>
                    <button class="btn btn-primary" onclick="window.location.href='${resolvePath('/contact')}'">Contact Operations</button>
                </div>
            </section>
        `;
    }
}

/* Main Landing Page Class */
export class LandingPage {
    constructor() {
        this.hero = new HeroSection();
        this.techSpecs = new TechSpecsSection();
        this.news = new NewsSection();
        this.cta = new CTASection();
    }

    render() {
        return `
            <div class="page landing-page">
                ${this.hero.render()}
                ${this.techSpecs.render()}
                ${this.news.render()}
                ${this.cta.render()}
            </div>
        `;
    }

    mount() {
        // Future: Initialize 3D backgrounds or heavy interactions here
        console.log('Landing Page Mounted');
    }
}
