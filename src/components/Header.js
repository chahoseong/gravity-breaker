import { resolvePath } from '../utils/paths.js';

export class Header {
    render() {
        return `
            <header>
                <nav class="container">
<<<<<<< HEAD
                    <a href="/" data-link class="logo-link">
                        <img src="assets/img/logo.png" alt="Gravity Breaker Logo" class="nav-logo">
                        <span>Gravity Breaker</span>
                    </a>
                    <ul>
                        <li><a href="/" data-link>Home</a></li>
                        <li><a href="about" data-link>About</a></li>
                        <li><a href="team" data-link>Team</a></li>
                        <li><a href="contact" data-link>Contact</a></li>
=======
                    <a href="${resolvePath('/')}" data-link class="logo-link">
                        <img src="${resolvePath('/assets/img/logo.png')}" alt="Gravity Breaker Logo" class="nav-logo">
                        <span>Gravity Breaker</span>
                    </a>
                    <ul>
                        <li><a href="${resolvePath('/')}" data-link>Home</a></li>
                        <li><a href="${resolvePath('/about')}" data-link>About</a></li>
                        <li><a href="${resolvePath('/team')}" data-link>Team</a></li>
                        <li><a href="${resolvePath('/contact')}" data-link>Contact</a></li>
>>>>>>> contact
                    </ul>
                </nav>
            </header>
        `;
    }
}
