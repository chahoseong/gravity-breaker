
export class ContactPage {
    constructor() {
        this.formEndpoint = ''; // Optional: Set URL for real submission
    }

    render() {
        return `
            <div class="page-container contact-page">
                <div class="contact-grid">
                    <!-- Left Column: Info Cards -->
                    <div class="contact-info-column">
                        <h1 class="page-title">COMMUNICATION_LINK</h1>
                        
                        <div class="info-card">
                            <div class="info-icon">📍</div>
                            <div class="info-detail">
                                <h3>Launch Site</h3>
                                <p>Starbase Alpha, Sector 7</p>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">📧</div>
                            <div class="info-detail">
                                <h3>Frequency</h3>
                                <p>contact@gravitybreaker.com</p>
                                <span class="badge-24h">24h response</span>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">📞</div>
                            <div class="info-detail">
                                <h3>Direct Line</h3>
                                <p>+1 (800) LIFT-OFF</p>
                            </div>
                        </div>

                        <!-- FAQ Section (Desktop Placement) -->
                        <div class="faq-section">
                            <h2 class="faq-title">FREQUENT_QUERIES</h2>
                            <div class="accordion">
                                <div class="accordion-item">
                                    <button class="accordion-trigger">
                                        <span>What allows for high-g maneuvering?</span>
                                        <span class="icon">+</span>
                                    </button>
                                    <div class="accordion-content">
                                        <p>Our proprietary inertial dampening field reduces G-force impact on the crew by 94%.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button class="accordion-trigger">
                                        <span>Are the thrusters ion-based?</span>
                                        <span class="icon">+</span>
                                    </button>
                                    <div class="accordion-content">
                                        <p>No, we use a hybrid fusion-plasma drive for maximum delta-v in atmosphere and vacuum.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button class="accordion-trigger">
                                        <span>How do I book a test flight?</span>
                                        <span class="icon">+</span>
                                    </button>
                                    <div class="accordion-content">
                                        <p>Fill out the inquiry form selecting "Test Flight" and our flight director will contact you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Form -->
                    <div class="contact-form-column">
                        <div class="glass-form-container">
                            <h2>TRANSMIT_MESSAGE</h2>
                            <p class="form-desc">Secure channel open. Encryption active.</p>
                            
                            <form id="contactForm" class="contact-form">
                                <!-- Honeypot -->
                                <input type="text" name="_gotcha" style="display:none !important" tabindex="-1" autocomplete="off">

                                <div class="form-group">
                                    <label for="name">CODENAME / NAME</label>
                                    <input type="text" id="name" name="name" required placeholder="Enter ident">
                                </div>

                                <div class="form-group">
                                    <label for="email">RETURN FREQUENCY (EMAIL)</label>
                                    <input type="email" id="email" name="email" required placeholder="name@sector.com">
                                </div>

                                <div class="form-group">
                                    <label for="type">INQUIRY TYPE</label>
                                    <select id="type" name="type">
                                        <option value="general">General Inquiry</option>
                                        <option value="tech">Technical Support</option>
                                        <option value="flight">Test Flight Booking</option>
                                        <option value="investor">Investor Relations</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="message">DATA PACKET</label>
                                    <textarea id="message" name="message" rows="5" required placeholder="Type your message..."></textarea>
                                </div>

                                <button type="submit" class="btn btn-submit">
                                    INITIATE TRANSMISSION
                                </button>
                            </form>

                            <div id="successMessage" class="success-message hidden">
                                <div class="success-icon">✓</div>
                                <h3>TRANSMISSION COMPLETE</h3>
                                <p>We have received your packet. Stand by for response.</p>
                                <button id="resetBtn" class="btn-text">Send another</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    mount() {
        // FAQ Accordion Logic
        const triggers = document.querySelectorAll('.accordion-trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const item = trigger.parentElement;
                const wasActive = item.classList.contains('active');

                // Close others (optional, keeps it clean)
                document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

                // Toggle current
                if (!wasActive) {
                    item.classList.add('active');
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

                // Honeypot check
                const honeypot = form.querySelector('[name="_gotcha"]');
                if (honeypot && honeypot.value) {
                    console.warn('Spam detected');
                    return; // Silent fail
                }

                // Simulate API call
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'SENDING...';
                submitBtn.disabled = true;

                // Artificial delay for effect
                await new Promise(resolve => setTimeout(resolve, 1500));

                if (this.formEndpoint) {
                    // Real fetch if endpoint exists
                    try {
                        const data = new FormData(form);
                        await fetch(this.formEndpoint, {
                            method: 'POST',
                            body: data,
                            headers: {
                                'Accept': 'application/json'
                            }
                        });
                    } catch (error) {
                        console.error('Submission error', error);
                        // Optional: Show error UI
                    }
                }

                // Show Success UI
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');

                // Reset button logic
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                form.reset();
                successMsg.classList.add('hidden');
                form.classList.remove('hidden');
            });
        }
    }
}
