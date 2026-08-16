export const fetchProxyList = async (url) => {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);
        if (!response.ok) return '';
        const text = await response.text();
        try {
            const data = JSON.parse(text);
            const proxies = [];
            const arr = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []);
            arr.forEach(item => {
                if (item && item.ip && item.port) {
                    proxies.push(`${item.ip}:${item.port}`);
                }
            });
            if (proxies.length > 0) return proxies.join('\n');
        } catch {}
        return text;
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