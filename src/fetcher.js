export const fetchProxyList = async (url) => {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);
        if (!response.ok) return '';
        return await response.text();
    } catch {
        return '';
    }
};

export const fetchAllProxies = async (urls) => {
    const results = await Promise.allSettled(urls.map(fetchProxyList));
    return results
        .filter(r => r.status === 'fulfilled')
        .map(r => r.value)
        .join('\n');
};
