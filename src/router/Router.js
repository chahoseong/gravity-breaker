import { getBasePath } from '../utils/paths.js';

export class Router {
    constructor(routes) {
        this.routes = routes;
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }

    init() {
        this.handlePopState();
    }

    handlePopState() {
        const basePath = getBasePath();
        let path = window.location.pathname;

        // Normalize /index.html (handling potential base path)
        const isIndexHtml = path === '/index.html' || (basePath && path === basePath + '/index.html');
        if (isIndexHtml) {
            const target = basePath || '/';
            window.history.replaceState({}, '', target);
            return this.handlePopState();
        }

        // Remove base path if present to match against routes
        if (basePath && path.startsWith(basePath)) {
            path = path.replace(basePath, '') || '/';
        }

        const pageClass = this.routes[path] || this.routes['/'];

        console.log(`Router: Matching path "${path}" ->`, pageClass ? pageClass.name : 'Defaulting to LandingPage');

        if (pageClass) {
            this.loadPage(new pageClass());
        } else {
            console.error(`No route found for ${path}`);
        }
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.handlePopState();
    }

    async loadPage(pageInstance) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = await pageInstance.render();
            if (pageInstance.mount) {
                pageInstance.mount();
            }
        }
    }
}
