export const extractProxies = (text) => {
    const proxyRegex = /(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?):\d{1,5}/g;
    const matches = text.match(proxyRegex) || [];
    return [...new Set(matches)];
};
