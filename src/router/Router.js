
export class Router {
    constructor(routes) {
        this.routes = routes;
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }

    init() {
        this.handlePopState();
    }

    handlePopState() {
        const path = window.location.pathname;
        const pageClass = this.routes[path] || this.routes['/'];

        if (pageClass) {
            this.loadPage(new pageClass());
        } else {
            console.error(`No route found for ${path}`);
        }
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.handlePopState();
        window.scrollTo(0, 0);
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
