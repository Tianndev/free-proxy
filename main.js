import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { URLS } from './src/providers.js';
import { fetchAllProxies } from './src/fetcher.js';
import { extractProxies } from './src/utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const main = async () => {
    const proxyDir = path.join(__dirname, 'proxy');
    
    try {
        await fs.access(proxyDir);
    } catch {
        await fs.mkdir(proxyDir);
    }

    const stats = {};
    const allProxies = new Set();

    await Promise.all(Object.entries(URLS).map(async ([proto, urls]) => {
        const rawData = await fetchAllProxies(urls);
        const proxies = extractProxies(rawData);
        
        if (proto !== 'all') {
            await fs.writeFile(path.join(proxyDir, `${proto}.txt`), proxies.join('\n'));
            stats[proto] = proxies.length;
        }
        
        proxies.forEach(p => allProxies.add(p));
    }));

    const allArray = [...allProxies];
    await fs.writeFile(path.join(proxyDir, 'all.txt'), allArray.join('\n'));
    stats.all = allArray.length;

    const commitMsg = `Update: HTTP(${stats.http || 0}) HTTPS(${stats.https || 0}) SOCKS4(${stats.socks4 || 0}) SOCKS5(${stats.socks5 || 0}) ALL(${stats.all || 0})`;
    await fs.writeFile(path.join(__dirname, 'commit_msg.txt'), commitMsg);
};

main();