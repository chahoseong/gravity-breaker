export class Header {
    render() {
        return `
            <header>
                <nav class="container">
                    <a href="/" data-link>Gravity Breaker</a>
                    <ul>
                        <li><a href="/" data-link>Home</a></li>
                        <li><a href="/about" data-link>About</a></li>
                        <li><a href="/team" data-link>Team</a></li>
                        <li><a href="/contact" data-link>Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
