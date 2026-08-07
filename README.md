# tianndev/free-proxy

![License](https://img.shields.io/github/license/tianndev/free-proxy?style=flat-square)
![Updated](https://img.shields.io/badge/Updated-Every_10_Minutes-brightgreen?style=flat-square)
![Node](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-blue?style=flat-square)

A continuously updated free proxy list maintained by [tianndev](https://github.com/tianndev). This repository aggregates, categorizes, and deduplicates proxies from multiple providers across the globe, automatically refreshed every **10 minutes** via GitHub Actions.

---

## Proxy Lists

All lists are formatted as `IP:PORT`, one entry per line. Suitable for direct integration with curl, proxychains, Python requests, and any proxy-aware tooling.

| Protocol | Raw URL |
|:---|:---|
| HTTP | [`proxy/http.txt`](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/http.txt) |
| HTTPS | [`proxy/https.txt`](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/https.txt) |
| SOCKS4 | [`proxy/socks4.txt`](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/socks4.txt) |
| SOCKS5 | [`proxy/socks5.txt`](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/socks5.txt) |
| All (Mixed) | [`proxy/all.txt`](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/all.txt) |

---

## How It Works

1. GitHub Actions triggers `npm start` on a 10-minute cron schedule.
2. `main.js` dispatches concurrent fetch requests to multiple upstream proxy providers.
3. Each response is parsed, deduplicated, and written to the corresponding protocol file.
4. A commit is pushed automatically with the total count per protocol.

---

## Local Usage

No external dependencies required. Requires Node.js 18 or higher.

```bash
git clone https://github.com/tianndev/free-proxy.git
cd free-proxy
npm start
```

Output will be written to the `/proxy` directory.

---

## License

[MIT](LICENSE)
