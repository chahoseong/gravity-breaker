/**
 * Detects the base path for the application.
 * On GitHub Pages, window.location.pathname will start with /repository-name/.
 * On local dev server, it will likely be /.
 */
export const getBasePath = () => {
    const path = window.location.pathname;
    // Example: /gravity-breaker/team
    const segments = path.split('/').filter(Boolean);

    // Check if we are on GitHub Pages (usually chahoseong.github.io/gravity-breaker/)
    if (window.location.hostname.includes('github.io')) {
        // Assume first segment is repo name
        return segments.length > 0 ? `/${segments[0]}` : '';
    }

    return '';
};

export const resolvePath = (path) => {
    const base = getBasePath();
    if (!path.startsWith('/')) path = `/${path}`;

    // Don't double add the base path
    if (base && path.startsWith(base)) return path;

    return `${base}${path}`;
};
