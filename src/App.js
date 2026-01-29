import { Router } from './router/Router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { LandingPage } from './pages/LandingPage.js';
import { AboutPage } from './pages/AboutPage.js';
import { TeamPage } from './pages/TeamPage.js';
import { ContactPage } from './pages/ContactPage.js';

export class App {
    constructor() {
        this.header = new Header();
        this.footer = new Footer();

        this.routes = {
            '/': LandingPage, // Original Default
            '/index.html': LandingPage, // Original Default
            '/about': AboutPage,
            '/team': TeamPage,
            '/contact': ContactPage
        };

        this.router = new Router(this.routes);
    }

    async init() {
        const appContainer = document.getElementById('app');

        // Render Shell
        appContainer.innerHTML = `
            ${this.header.render()}
            <main id="main-content"></main>
            ${this.footer.render()}
        `;

        // Initialize Router
        this.router.init();

        // Add Global Event Listener for Navigation
        document.addEventListener('click', (e) => {
            // Traverse up to find anchor tag if click is on child
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                this.router.navigate(link.getAttribute('href'));
            }
        });

        console.log('Gravity Breaker App Initialized');
    }
}
