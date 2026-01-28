
export class AboutPage {
    constructor() {
        this.currentLang = 'en'; // Default language

        this.text = {
            en: {
                label: "CLASSIFIED // GRAVITY BREAKER CORP",
                title: "Driving the Future of Propulsion",
                subtitle: "We don't just build engines. We engineer the inevitable expansion of humanity.",
                visionTitle: "VISION",
                visionStatement: "Interstellar Access for All.",
                visionDetail: "Transforming space travel from a rarity to a routine. Our goal is to reduce the cost of orbit by orders of magnitude through reusability and advanced cryogenic propulsion.",
                missionTitle: "MISSION OBJECTIVES",
                mission1Title: "Maximize ISP",
                mission1Desc: "Pushing specific impulse to the theoretical limits of chemical propulsion.",
                mission2Title: "Minimize Cost",
                mission2Desc: "Automated manufacturing and rapid reusability are key to our economic model.",
                mission3Title: "Ensure Reliability",
                mission3Desc: "Zero-fault tolerance. Safe return of flight hardware and personnel.",
                valuesTitle: "CORE VALUES",
                value1Title: "Precision",
                value1Desc: "We measure in microns and milliseconds. There is no margin for error in the void.",
                value2Title: "Velocity",
                value2Desc: "Speed in development and speed in flight. We iterate faster than the competition.",
                value3Title: "Reliance",
                value3Desc: "Trust in our data, trust in our hardware, and trust in each other."
            },
            ko: {
                label: "기밀 // 그라비티 브레이커 법인",
                title: "추진 시스템의 미래를 이끌다",
                subtitle: "우리는 단순히 엔진을 만들지 않습니다. 우리는 인류의 필연적인 확장을 설계합니다.",
                visionTitle: "비전",
                visionStatement: "모두를 위한 성간 접근성.",
                visionDetail: "우주 여행을 희귀한 경험에서 일상으로 변화시킵니다. 우리의 목표는 재사용성과 첨단 극저온 추진 기술을 통해 궤도 진입 비용을 획기적으로 낮추는 것입니다.",
                missionTitle: "임무 목표",
                mission1Title: "ISP 극대화",
                mission1Desc: "화학 추진의 비충격을 이론적 한계까지 끌어올립니다.",
                mission2Title: "비용 최소화",
                mission2Desc: "자동화된 제조와 신속한 재사용성은 우리의 경제 모델의 핵심입니다.",
                mission3Title: "신뢰성 보장",
                mission3Desc: "무결점 허용. 비행 하드웨어와 인력의 안전한 귀환을 보장합니다.",
                valuesTitle: "핵심 가치",
                value1Title: "정밀성",
                value1Desc: "우리는 마이크론과 밀리초 단위로 측정합니다. 공허 속에서 오차는 허용되지 않습니다.",
                value2Title: "속도",
                value2Desc: "개발의 속도와 비행의 속도. 우리는 경쟁자보다 더 빠르게 반복하고 진보합니다.",
                value3Title: "신뢰",
                value3Desc: "데이터에 대한 신뢰, 하드웨어에 대한 신뢰, 그리고 서로에 대한 신뢰."
            }
        };
    }

    render() {
        const t = this.text[this.currentLang];
        const nextLang = this.currentLang === 'en' ? 'ko' : 'en';
        const btnLabel = this.currentLang === 'en' ? 'KR' : 'EN';
        const btnText = this.currentLang === 'en' ? '한국어' : 'English';

        // Note: Using 'team-page' class to reuse existing styles from team.css
        return `
            <div class="page team-page about-page">
                <div class="container">
                    <div class="lang-switch-container">
                        <button id="lang-toggle" class="btn-tech-sm" data-lang="${nextLang}">
                            [ <span class="accent-text">${btnLabel}</span> // ${btnText} ]
                        </button>
                    </div>

                    <header class="team-header">
                        <span class="hud-label">${t.label}</span>
                        <h1>${t.title}</h1>
                        <p class="subtitle">${t.subtitle}</p>
                    </header>
                    
                    <section class="vision-section">
                        <div class="vision-content">
                            <h2 class="section-title">${t.visionTitle}</h2>
                            <p class="big-statement">${t.visionStatement}</p>
                            <p class="vision-detail">${t.visionDetail}</p>
                        </div>
                    </section>
                    
                    <section class="mission-section">
                        <h2 class="section-title">${t.missionTitle}</h2>
                        <div class="mission-grid">
                            <div class="mission-item">
                                <span class="mission-number">01</span>
                                <h3>${t.mission1Title}</h3>
                                <p>${t.mission1Desc}</p>
                            </div>
                            <div class="mission-item">
                                <span class="mission-number">02</span>
                                <h3>${t.mission2Title}</h3>
                                <p>${t.mission2Desc}</p>
                            </div>
                            <div class="mission-item">
                                <span class="mission-number">03</span>
                                <h3>${t.mission3Title}</h3>
                                <p>${t.mission3Desc}</p>
                            </div>
                        </div>
                    </section>

                    <section class="values-section">
                        <h2 class="section-title">${t.valuesTitle}</h2>
                        <div class="values-grid">
                            <div class="value-card">
                                <div class="icon-container">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="tech-icon">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </div>
                                <h3>${t.value1Title}</h3>
                                <p>${t.value1Desc}</p>
                            </div>
                            
                            <div class="value-card">
                                <div class="icon-container">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="tech-icon">
                                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </div>
                                <h3>${t.value2Title}</h3>
                                <p>${t.value2Desc}</p>
                            </div>

                            <div class="value-card">
                                <div class="icon-container">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="tech-icon">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </div>
                                <h3>${t.value3Title}</h3>
                                <p>${t.value3Desc}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        `;
    }

    mount() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.currentLang = this.currentLang === 'en' ? 'ko' : 'en';
                // Find the main content area and re-render current page
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.innerHTML = this.render();
                    this.mount(); // Re-bind event listener after re-render
                }
            });
        }
    }
}
