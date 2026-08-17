<div align="center">

# Free Proxy List

[![License](https://img.shields.io/github/license/tianndev/free-proxy?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=blue)](LICENSE)
[![Stars](https://img.shields.io/github/stars/tianndev/free-proxy?style=for-the-badge&logo=github&logoColor=white&color=gold)](https://github.com/tianndev/free-proxy/stargazers)
[![Forks](https://img.shields.io/github/forks/tianndev/free-proxy?style=for-the-badge&logo=git&logoColor=white&color=orange)](https://github.com/tianndev/free-proxy/forks)
[![Auto Updated](https://img.shields.io/badge/Auto_Updated-Every_30_Mins-brightgreen?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/tianndev/free-proxy/actions)

*A continuously updated, deduplicated, and automated high-quality proxy aggregator.*

<br />
</div>

## About The Project

This repository serves as a reliable, automated proxy aggregator. It fetches proxies from multiple upstream providers, extracts them intelligently (supporting both plaintext and JSON API endpoints), deduplicates them, and commits the fresh lists directly to this repository every **30 minutes** via GitHub Actions.

> **Last Updated:** <!-- LAST_UPDATED -->18 August 2026 at 01:48:56<!-- /LAST_UPDATED --> WIB

### Core Features

- **Auto-Updating**: Fully automated workflow updating proxies every 30 minutes.
- **Categorized**: Neatly separated into HTTP, HTTPS, SOCKS4, and SOCKS5.
- **Aggregated**: Scrapes from curated unique upstream sources simultaneously.
- **Clean Format**: Standard `IP:PORT` format ready for drop-in use in any tooling (cURL, Proxychains, Python, etc.).

---

## Available Endpoints

You can directly fetch the raw `.txt` files from the links below to integrate into your applications seamlessly.

| Protocol | Path | Raw Link |
| :--- | :--- | :--- |
| **HTTP** | `proxy/http.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/http.txt) |
| **HTTPS** | `proxy/https.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/https.txt) |
| **SOCKS4** | `proxy/socks4.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/socks4.txt) |
| **SOCKS5** | `proxy/socks5.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/socks5.txt) |
| **MIXED (All)** | `proxy/all.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/all.txt) |

---

## Local Deployment

Want to run the fetcher locally? It is built on modern Javascript, requiring only Node.js with **zero external dependencies**.

### Prerequisites
- Node.js >= 24

### Installation
```bash
git clone https://github.com/tianndev/free-proxy.git
cd free-proxy
```

### Execution
Run the fetcher:
```bash
npm start
```
*The script will scrape all upstream sources, deduplicate the proxies, and write the output files into the `/proxy` directory.*

---

<div align="center">

**Built with dedication by [tianndev](https://github.com/tianndev) | License: [MIT](LICENSE)**
<br><br>
[![Telegram](https://img.shields.io/badge/Telegram-tianndev-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/tianndev)
[![Saweria](https://img.shields.io/badge/Saweria-tianndev-F2B325?style=flat-square)](https://saweria.co/tianndev)

</div>