# The World in One Day — 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Wanxt27/news-image-20261123-entry/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Wanxt27/news-image-20261123-entry/reward.svg)](https://make.fun/bounty/news-image-20261123)

A dense one-page newspaper front page that sums up the world's news on Monday 23 November 2026 in a single image. The masthead reads "THE WORLD IN ONE DAY", above a drawn Earth disc and the make.fun ghost mascot, and a 5-column by 20-row grid packs in 100 real stories from that day, each labelled with its category and source.

The six biggest stories of the day:

- COP31 collapse — climate talks break down
- Iran-US war and blockade
- AI market crash
- Indonesia factory fire
- India 720/9
- Miley Cyrus wedding

qzc860x6

## This repository

- `main.ts` — copies `entry.png` to `/output/entry.png` (byte-for-byte, verified).
- `entry.png` — the finished image, a 1024x1024 PNG, 270,708 bytes.

## Run locally

```sh
mkdir -p /tmp/out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
