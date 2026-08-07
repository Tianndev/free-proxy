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

    await fs.writeFile(path.join(__dirname, 'stats.json'), JSON.stringify(stats));

    const wibTime = new Date().toLocaleString('en-GB', {
        timeZone: 'Asia/Jakarta',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const readmePath = path.join(__dirname, 'README.md');
    const readme = await fs.readFile(readmePath, 'utf8');
    const updated = readme.replace(
        /<!-- LAST_UPDATED -->.*?<!-- \/LAST_UPDATED -->/,
        `<!-- LAST_UPDATED -->${wibTime}<!-- /LAST_UPDATED -->`
    );
    await fs.writeFile(readmePath, updated);
};

main();