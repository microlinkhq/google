<div align="center">
  <img src="/static/banner.jpg" class="hero-banner">
  <br>
  <br>
  <p>Turn Google results into structured, code-ready data. Powered by <a href="https://microlink.io" target="_blank" rel='noopener noreferrer'>microlink.io</a></p>
  <br>
</div>

![Last version](https://img.shields.io/github/tag/microlinkhq/google.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/microlinkhq/google.svg?style=flat-square)](https://coveralls.io/github/microlinkhq/google)
[![NPM Status](https://img.shields.io/npm/dm/@microlink/google.svg?style=flat-square)](https://www.npmjs.org/package/@microlink/google)

## Highlights

- **10 Google verticals in one API**<br>
  <img src="https://www.google.com/s2/favicons?domain=google.com&sz=32" height="14"> [Google Search](#google-search)<br>
  <img src="https://www.google.com/s2/favicons?domain=news.google.com&sz=32" height="14"> [Google News](#google-news)<br>
  <img src="https://www.google.com/s2/favicons?domain=google.com&sz=32" height="14"> [Google Images](#google-images)<br>
  <img src="https://www.google.com/s2/favicons?domain=youtube.com&sz=32" height="14"> [Google Videos](#google-videos)<br>
  <img src="https://www.google.com/s2/favicons?domain=maps.google.com&sz=32" height="14"> [Google Places](#google-places)<br>
  <img src="https://www.google.com/s2/favicons?domain=maps.google.com&sz=32" height="14"> [Google Maps](#google-maps)<br>
  <img src="https://www.google.com/s2/favicons?domain=shopping.google.com&sz=32" height="14"> [Google Shopping](#google-shopping)<br>
  <img src="https://www.google.com/s2/favicons?domain=scholar.google.com&sz=32" height="14"> [Google Scholar](#google-scholar)<br>
  <img src="https://www.google.com/s2/favicons?domain=google.com&sz=32" height="14"> [Google Patents](#google-patents)<br>
  <img src="https://www.google.com/s2/favicons?domain=google.com&sz=32" height="14"> [Google Autocomplete](#google-autocomplete)<br>

- **Normalized data**<br>
  Prices `{ symbol, amount }`<br>
  Ratings `{ score, total, reviews }`<br>
  Coordinates  `{ latitude, longitude }`<br>
  Images  `{ url, width, height }`<br>

- **Built for developers and LLMs**<br>
  Any result with a `url` exposes `.html()` to fetch the page HTML on demand.<br>
  Just call `.next()` to fetch the next page.<br>
  Parallelized requests (~1s latency).<br>
  Type-specific inference included.<br>

## Install

```bash
npm install @microlink/google
```

## Quick start

### Your first query

The only prerequisite to initialize `@microlink/google` is to have [Microlink API key](https://microlink.io/#pricing):

```js
const google = require('@microlink/google')({
  apiKey: process.env.MICROLINK_API_KEY
})
```

Make your first query:

```js
const page = await google('Lotus Elise S2')

console.log(page.results)
// [
//   {
//     title: 'Lotus Elise - Wikipedia',
//     url: 'https://en.wikipedia.org/wiki/Lotus_Elise',
//     description: 'The Lotus Elise is a two-seat, rear-wheel-drive...'
//   }
// ]
```

Use [Google search operators](https://ahrefs.com/blog/google-advanced-search-operators/) to refine queries:

```js
const page = await google('Lotus Elise S2 filetype:pdf')
```

Localize results using `location` or filter by time with `period`:

```js
await google('recetas de pasta', {
  location: 'es',
  period: 'week'
})
```

### Get HTML markup

Any result containing a `url` exposes a lazy `.html()` method:

```js
const { results } = await google('node.js frameworks')

for (const result of results) {
  const html = await result.html()
  console.log(html)
}
```

### Pagination

Pages chain naturally:

```js
const page1 = await google('node.js frameworks')
const page2 = await page1.next()
const page3 = await page2.next()
```

You can also iterate:

```js
let page = await google('node.js frameworks')

while (page) {
  for (const result of page.results) {
    console.log(result.title)
  }

  page = await page.next()
}
```

# Google products

| Type           | Product             | Example                                                     |
| -------------- | ------------------- | ----------------------------------------------------------- |
| `search`       | Google Search       | `google('Lotus Elise S2')`                                  |
| `news`         | Google News         | `google('artificial intelligence', { type: 'news' })`       |
| `images`       | Google Images       | `google('northern lights', { type: 'images' })`             |
| `videos`       | Google Videos       | `google('cooking tutorial', { type: 'videos' })`            |
| `places`       | Google Places       | `google('coffee shops denver', { type: 'places' })`         |
| `maps`         | Google Maps         | `google('apple store new york', { type: 'maps' })`          |
| `shopping`     | Google Shopping     | `google('macbook pro', { type: 'shopping' })`               |
| `scholar`      | Google Scholar      | `google('transformer architecture', { type: 'scholar' })`   |
| `patents`      | Google Patents      | `google('touchscreen gestures apple', { type: 'patents' })` |
| `autocomplete` | Google Autocomplete | `google('how to', { type: 'autocomplete' })`                |

## Google Search

Web results with knowledge graph, related questions, and related searches.

```js
const page = await google('Lotus Elise S2')

page.results[0]

page.knowledgeGraph
page.peopleAlsoAsk
page.relatedSearches
```

## Google News

Recent articles with publisher, date, and thumbnail.

```js
const page = await google('artificial intelligence', { type: 'news' })
```

## Google Images

Full-resolution image URLs with dimensions.

```js
const page = await google('northern lights', { type: 'images' })
```

## Google Videos

Video metadata with duration in milliseconds.

```js
const page = await google('cooking tutorial', { type: 'videos' })
```

## Google Places

Local business listings with coordinates and contact info.

```js
const page = await google('coffee shops denver', { type: 'places' })
```

## Google Maps

Detailed place data with ratings, hours, and pricing.

```js
const page = await google('apple store new york', { type: 'maps' })
```

## Google Shopping

Product listings with parsed prices and structured ratings.

```js
const page = await google('macbook pro', { type: 'shopping' })
```

## Google Scholar

Academic papers with citation counts and PDF links.

```js
const page = await google('transformer architecture', { type: 'scholar' })
```

## Google Patents

Patent filings with ISO 8601 dates and metadata.

```js
const page = await google('touchscreen gestures apple', { type: 'patents' })
```

## Google Autocomplete

Search suggestions as you type.

```js
const page = await google('how to', { type: 'autocomplete' })
```

# API

## google(query, options?)

### query

**Required**
Type: `string`

The search query. Supports [Google search operators](https://support.google.com/websearch/answer/2466433).

```js
await google('annual report filetype:pdf')
await google('security updates site:github.com')
await google('"machine learning" site:arxiv.org')
```

### options

#### type

Type: `string`<br>
Default: `'search'`<br>
Values: `'search'` | `'news'` | `'images'` | `'videos'` | `'places'` | `'maps'` | `'shopping'` | `'scholar'` | `'patents'` | `'autocomplete'`

Selects which Google product to query.

```js
await google('artificial intelligence', { type: 'news' })
```

#### location

Type: `string`<br>
Default: `'us'`<br>
Values: [Location](https://github.com/microlinkhq/google/blob/master/src/index.d.ts#L28)

Controls result geolocation using a country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). This influences ranking, language, and local intent.

```js
await google('recetas de pasta', { location: 'es' })
```

#### period

Type: `string`<br>
Default: `undefined`<br>
Values: `'hour'` | `'day'` | `'week'` | `'month'` | `'year'`

Limits results to a recent time window. Useful for news monitoring and freshness-sensitive queries.

```js
await google('tech news', { period: 'week' })
```

## License

**@microlink/google** © [Microlink](https://microlink.io), released under the [MIT](https://github.com/microlinkhq/google/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/microlinkhq/google/contributors).

> [microlink.io](https://microlink.io) · GitHub [microlinkhq](https://github.com/microlinkhq) · X [@microlinkhq](https://x.com/microlinkhq)
