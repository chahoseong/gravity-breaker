
export class ContactPage {
    constructor() {
        this.formEndpoint = ''; // Optional: Set URL for real submission
        // Requirement 5: Load from localStorage
        this.currentLang = localStorage.getItem('gravity_lang') || 'en';

        this.text = {
            en: {
                pageTitle: "COMMUNICATION_LINK",
                locationTitle: "Launch Site",
                locationDesc: "Starbase Alpha, Sector 7",
                emailTitle: "Frequency",
                emailResp: "24h response",
                phoneTitle: "Direct Line",
                phoneDesc: "+1 (800) LIFT-OFF",
                faqTitle: "FREQUENT_QUERIES",
                faq1Q: "What allows for high-g maneuvering?",
                faq1A: "Our proprietary inertial dampening field reduces G-force impact on the crew by 94%.",
                faq2Q: "Are the thrusters ion-based?",
                faq2A: "No, we use a hybrid fusion-plasma drive for maximum delta-v in atmosphere and vacuum.",
                faq3Q: "How do I book a test flight?",
                faq3A: "Fill out the inquiry form selecting 'Test Flight' and our flight director will contact you.",
                formTitle: "TRANSMIT_MESSAGE",
                formDesc: "Secure channel open. Encryption active.",
                labelName: "CODENAME / NAME",
                phName: "Enter ident",
                labelEmail: "RETURN FREQUENCY (EMAIL)",
                phEmail: "name@sector.com", // Example kept as requested
                labelType: "INQUIRY TYPE",
                optGeneral: "General Inquiry",
                optCollab: "Collaboration",
                optBug: "Bug Report",
                optInvestor: "Investor Relations",
                labelMsg: "DATA PACKET",
                phMsg: "Type your message...",
                btnSubmit: "INITIATE TRANSMISSION",
                sending: "SENDING...",
                successTitle: "TRANSMISSION COMPLETE",
                successMsg: "We have received your packet. Stand by for response.",
                btnReset: "Send another"
            },
            ko: {
                pageTitle: "연락 채널", // COMMUNICATION_LINK
                locationTitle: "발신 위치", // LAUNCH_SITE
                locationDesc: "스타베이스 알파, 섹터 7",
                emailTitle: "이메일", // FREQUENCY
                emailResp: "24시간 응답",
                phoneTitle: "전화", // DIRECT_LINE
                phoneDesc: "+1 (800) LIFT-OFF",
                faqTitle: "자주 묻는 질문", // FREQUENT_QUERIES
                faq1Q: "고중력 기동은 어떻게 가능한가요?",
                faq1A: "독자적인 관성 감쇠장은 승무원에게 가해지는 G-force 충격을 94% 감소시킵니다.",
                faq2Q: "추진기는 이온 기반인가요?",
                faq2A: "아니요, 대기권과 진공에서 최대 델타-V를 위해 하이브리드 핵융합-플라즈마 드라이브를 사용합니다.",
                faq3Q: "시험 비행은 어떻게 예약하나요?",
                faq3A: "문의 양식에서 '시험 비행'을 선택하여 작성해주시면 비행 디렉터가 연락드릴 것입니다.",
                formTitle: "메시지 전송", // TRANSMIT_MESSAGE
                formDesc: "보안 채널 연결됨. 암호화 활성화.", // Secure channel...
                labelName: "코드네임 / 이름", // CODENAME / NAME
                phName: "식별명 입력", // Enter ident
                labelEmail: "회신 이메일", // RETURN FREQUENCY (EMAIL)
                phEmail: "example@email.com", // name@sector.com -> example
                labelType: "문의 유형", // INQUIRY TYPE
                optGeneral: "일반 문의",
                optCollab: "협업 제안", // Collaboration
                optBug: "버그 제보", // Bug Report
                optInvestor: "투자자 정보",
                labelMsg: "문의 내용", // DATA PACKET
                phMsg: "메시지를 입력하세요...", // Type your message...
                btnSubmit: "전송 시작",
                sending: "전송 중...",
                successTitle: "전송 완료",
                successMsg: "패킷을 수신했습니다. 응답을 대기하십시오.",
                btnReset: "추가 전송"
            }
        };
    }

    render() {
        const t = this.text[this.currentLang];

        // Toggle Logic Variables
        const nextLang = this.currentLang === 'en' ? 'ko' : 'en';
        const btnLabel = this.currentLang === 'en' ? 'KR' : 'EN';
        const btnText = this.currentLang === 'en' ? '한국어' : 'English';
        const ariaLabel = this.currentLang === 'en' ? 'Switch to Korean' : '영어로 전환';

        return `
            <div class="page-container contact-page">
                <div class="container" style="position: relative; max-width: 1200px; margin: 0 auto; padding-top: 2rem;">
                    
                    <!-- Language Toggle (Requirement 1, 6) -->
                    <div class="lang-switch-container" style="position: absolute; top: 0; right: 1rem; z-index: 100;">
                        <button 
                            id="lang-toggle" 
                            class="btn-tech-sm" 
                            data-lang="${nextLang}" 
                            aria-label="${ariaLabel}"
                            tabindex="0"
                        >
                            [ <span class="accent-text">${btnLabel}</span> // ${btnText} ]
                        </button>
                    </div>

                    <div class="contact-grid" style="margin-top: 3rem;">
                        <!-- Left Column: Info Cards -->
                        <div class="contact-info-column" aria-live="polite">
                            <h1 class="page-title">${t.pageTitle}</h1>
                            
                            <div class="info-card">
                                <div class="info-icon">📍</div>
                                <div class="info-detail">
                                    <h3>${t.locationTitle}</h3>
                                    <p>${t.locationDesc}</p>
                                </div>
                            </div>

                            <div class="info-card">
                                <div class="info-icon">📧</div>
                                <div class="info-detail">
                                    <h3>${t.emailTitle}</h3>
                                    <p>contact@gravitybreaker.com</p>
                                    <span class="badge-24h">${t.emailResp}</span>
                                </div>
                            </div>

                            <div class="info-card">
                                <div class="info-icon">📞</div>
                                <div class="info-detail">
                                    <h3>${t.phoneTitle}</h3>
                                    <p>${t.phoneDesc}</p>
                                </div>
                            </div>

                            <!-- FAQ Section -->
                            <div class="faq-section">
                                <h2 class="faq-title">${t.faqTitle}</h2>
                                <div class="accordion">
                                    <div class="accordion-item">
                                        <button class="accordion-trigger" aria-expanded="false">
                                            <span>${t.faq1Q}</span>
                                            <span class="icon">+</span>
                                        </button>
                                        <div class="accordion-content">
                                            <p>${t.faq1A}</p>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <button class="accordion-trigger" aria-expanded="false">
                                            <span>${t.faq2Q}</span>
                                            <span class="icon">+</span>
                                        </button>
                                        <div class="accordion-content">
                                            <p>${t.faq2A}</p>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <button class="accordion-trigger" aria-expanded="false">
                                            <span>${t.faq3Q}</span>
                                            <span class="icon">+</span>
                                        </button>
                                        <div class="accordion-content">
                                            <p>${t.faq3A}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column: Form -->
                        <div class="contact-form-column" aria-live="polite">
                            <div class="glass-form-container">
                                <h2>${t.formTitle}</h2>
                                <p class="form-desc">${t.formDesc}</p>
                                
                                <form id="contactForm" class="contact-form">
                                    <!-- Honeypot -->
                                    <input type="text" name="_gotcha" style="display:none !important" tabindex="-1" autocomplete="off">

                                    <div class="form-group">
                                        <label for="name">${t.labelName}</label>
                                        <input type="text" id="name" name="name" required placeholder="${t.phName}">
                                    </div>

                                    <div class="form-group">
                                        <label for="email">${t.labelEmail}</label>
                                        <input type="email" id="email" name="email" required placeholder="${t.phEmail}">
                                    </div>

                                    <div class="form-group">
                                        <label for="type">${t.labelType}</label>
                                        <select id="type" name="type">
                                            <option value="general">${t.optGeneral}</option>
                                            <option value="collab">${t.optCollab}</option>
                                            <option value="bug">${t.optBug}</option>
                                            <option value="investor">${t.optInvestor}</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="message">${t.labelMsg}</label>
                                        <textarea id="message" name="message" rows="5" required placeholder="${t.phMsg}"></textarea>
                                    </div>

                                    <button type="submit" class="btn btn-submit">
                                        ${t.btnSubmit}
                                    </button>
                                </form>

                                <div id="successMessage" class="success-message hidden">
                                    <div class="success-icon">✓</div>
                                    <h3>${t.successTitle}</h3>
                                    <p>${t.successMsg}</p>
                                    <button id="resetBtn" class="btn-text">${t.btnReset}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    mount() {
        console.log("ContactPage mounted. Current Lang:", this.currentLang);

        // Toggle Logic
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                // Requirement 2: Immediate switch
                this.currentLang = this.currentLang === 'en' ? 'ko' : 'en';

                // Requirement 5: Save to localStorage
                localStorage.setItem('gravity_lang', this.currentLang);
                console.log("Language saved:", this.currentLang);

                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.innerHTML = this.render();
                    this.mount(); // Re-bind Events

                    // Accessibility: Return focus to toggle after re-render so keyboard user isn't lost
                    // We need to re-find it because duplicate render destroyed the old node
                    const newToggle = document.getElementById('lang-toggle');
                    if (newToggle) newToggle.focus();
                }
            });
        }

        this.bindEvents();
    }

    bindEvents() {
        // FAQ Accordion Logic
        const triggers = document.querySelectorAll('.accordion-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const item = trigger.parentElement;
                const wasActive = item.classList.contains('active');

                document.querySelectorAll('.accordion-item').forEach(i => {
                    i.classList.remove('active');
                    // Update Accessibility Attr
                    i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
                });

                if (!wasActive) {
                    item.classList.add('active');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Form Submission Logic
        const form = document.getElementById('contactForm');
        const successMsg = document.getElementById('successMessage');
        const resetBtn = document.getElementById('resetBtn');

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const honeypot = form.querySelector('[name="_gotcha"]');
                if (honeypot && honeypot.value) return;

                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                const t = this.text[this.currentLang];

                submitBtn.textContent = t.sending;
                submitBtn.disabled = true;

                await new Promise(resolve => setTimeout(resolve, 1500));

                if (this.formEndpoint) {
                    try {
                        const data = new FormData(form);
                        await fetch(this.formEndpoint, {
                            method: 'POST',
                            body: data,
                            headers: { 'Accept': 'application/json' }
                        });
                    } catch (error) {
                        console.error('Submission error', error);
                    }
                }

                form.classList.add('hidden');
                successMsg.classList.remove('hidden');

                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (form) {
                    form.reset();
                    form.classList.remove('hidden');
                }
                if (successMsg) {
                    successMsg.classList.add('hidden');
                }
            });
        }
    }
}
