# 🪄 TIMEAGO

> ## Tiniest Timeago Toolbox. Supports {ago | in}. Batteries Included.

- **Localization** — English, Chinese, German, Spanish, French, Italian, Dutch, Japanese, Polish and Russian.
- **Prefix** — Add a prefix string.
- **Relative** — Use a relative date instead of the current time.
- **Deadline** — Specify a `Date | string | number` deadline after which a `Date.toLocaleString()` is displayed instead of the `timeago` format.
- **Seconds** — Set `isSeconds` to `true` if you pass a seconds timestamp. Defaults to `false`.
- **Close Dates** - Set closeDates to `true` if you want to display `Today`/`Tomorrow`/`Yesterday` instead of the `ago` version. Works only for time differences between 6 hours and 1 day, other times are displayed as usual. Defaults to `false`.
- **Browser** supported.
- **Node** supported.

This package is inspired by [Muffinman's blogpost](https://muffinman.io/blog/javascript-time-ago-function). If you got some spare time, I highly recommed to check it out! 

## ✨ INSTALLING
Using NPM:

`npm i @fetched/timeago`

Using PNPM:

`pnpm install @fetched/timeago`

Using YARN:

`yarn add @fetched/timeago`

Using CDN

```html
<script src="https://www.unpkg.com/@fetched/timeago/dist/index.umd.js"></script>
```

## 🚀 USAGE
```
import { format } from '@fetched/timeago'

format(now)
// just now
format('2016-06-12')
// 7 years ago
format('2016-06-12', 'zh_CN')
// 7年前
```

## 🌋 ROADMAP

- Languages++
- Realtime

## 💻 DEVELOPING
Run all tests:

`npm run test`

Build package with `microbundle` for production:

`npm run build`

## 🎨 CONTRIBUTING

Contributions for new languages are always welcome! 

[See examples](https://github.com/FFGlobal/timeago/tree/master/src/locale) for implementing a new language.

## 🥂 LICENSE

[MIT License](https://github.com/FFGlobal/timeago/tree/master/src/locale)