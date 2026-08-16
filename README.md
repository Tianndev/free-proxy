# free-proxy

[![License](https://img.shields.io/github/license/tianndev/free-proxy?style=flat-square&logo=opensourceinitiative&logoColor=white&color=black)](LICENSE)
[![Stars](https://img.shields.io/github/stars/tianndev/free-proxy?style=flat-square&logo=github&logoColor=white&color=black)](https://github.com/tianndev/free-proxy/stargazers)
[![Forks](https://img.shields.io/github/forks/tianndev/free-proxy?style=flat-square&logo=git&logoColor=white&color=black)](https://github.com/tianndev/free-proxy/forks)
[![Last Commit](https://img.shields.io/github/last-commit/tianndev/free-proxy?style=flat-square&logo=githubactions&logoColor=white&color=black)](https://github.com/tianndev/free-proxy/commits/main)
[![Auto Updated](https://img.shields.io/badge/auto--updated-every_30_min-black?style=flat-square&logo=clockify&logoColor=white)](https://github.com/tianndev/free-proxy/actions)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D24-black?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-black?style=flat-square&logo=javascript&logoColor=white)](#)
[![Telegram](https://img.shields.io/badge/Telegram-tianndev-black?style=flat-square&logo=telegram&logoColor=white)](https://t.me/tianndev)

> **Last updated:** <!-- LAST_UPDATED -->17 August 2026 at 00:24:42<!-- /LAST_UPDATED --> WIB

A continuously updated, protocol-categorized free proxy list maintained by [tianndev](https://github.com/tianndev). Proxies are aggregated from multiple upstream providers, deduplicated, and committed automatically every **30 minutes** via GitHub Actions.


---

## Proxy Lists

All entries follow `IP:PORT` format, one proxy per line. Suitable for direct use with `curl`, `proxychains`, Python `requests`, and similar tooling.

| Protocol | File | Raw URL |
|:---|:---|:---|
| HTTP | `proxy/http.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/http.txt) |
| HTTPS | `proxy/https.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/https.txt) |
| SOCKS4 | `proxy/socks4.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/socks4.txt) |
| SOCKS5 | `proxy/socks5.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/socks5.txt) |
| All (Mixed) | `proxy/all.txt` | [Download](https://raw.githubusercontent.com/tianndev/free-proxy/main/proxy/all.txt) |

---

## Update Cycle

| Property | Value |
|:---|:---|
| Trigger | GitHub Actions cron schedule |
| Interval | Every 30 minutes |
| Deduplication | Per-protocol, before commit |
| Commit format | `Update http.txt: N proxies` |

---

## Local Usage

Requires Node.js 24 or higher. No external dependencies.

```bash
git clone https://github.com/tianndev/free-proxy.git
cd free-proxy
npm start
```

Output is written to the `/proxy` directory.

---

## License

[MIT](LICENSE) &copy; [tianndev](https://github.com/tianndev)