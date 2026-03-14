# @microlink/google

![Last version](https://img.shields.io/github/tag/microlinkhq/microlink-google.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/microlinkhq/microlink-google.svg?style=flat-square)](https://coveralls.io/github/microlinkhq/microlink-google)
[![NPM Status](https://img.shields.io/npm/dm/@microlink/google.svg?style=flat-square)](https://www.npmjs.org/package/@microlink/google)

> Google search results via [Microlink API](https://microlink.io).

## Install

```bash
npm install @microlink/google
```

## Usage

Create a client by passing your configuration, then call it with a search query:

```js
const google = require('@microlink/google')({
  apiKey: 'YOUR_API_KEY',
})

const page = await google('Lotus Elise S2')

for (const result of page.results) {
  console.log(result.title)       // "Lotus Elise - Wikipedia"
  console.log(result.url)         // "https://en.wikipedia.org/wiki/Lotus_Elise"
  console.log(result.description) // "The Lotus Elise is a two-seat, ..."
}
```

Each result has a lazy `.html()` method that fetches the full page HTML on demand:

```js
const html = await page.results[0].html()
```

The SERP page HTML is also available:

```js
const serpHtml = await page.html()
```

### Pagination

Results are paginated. Call `.next()` to get the next page:

```js
const firstPage = await google('node.js frameworks')
const secondPage = await firstPage.next()
const thirdPage = await secondPage.next()
```

The offset is calculated automatically from the number of results in each page.

## API

### google(query, [options])

#### query

*Required*<br>
Type: `string`

The search query. Spaces are supported naturally. You can use [Google search operators](https://support.google.com/websearch/answer/2466433) for advanced filtering:

```js
// Only PDF files
const page = await google('annual report filetype:pdf')

// Results from a specific site
const page = await google('security updates site:github.com')

// Exclude a site
const page = await google('node.js tutorials -site:w3schools.com')

// Exact phrase
const page = await google('"machine learning" site:arxiv.org')

// Combine operators
const page = await google('site:reddit.com intitle:best "mechanical keyboard"')
```

#### options

##### limit

Type: `number`

Maximum number of results to return per page.

##### lang

Type: `string`

Country code for localizing results ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), e.g. `'us'`, `'de'`, `'jp'`).

```js
const page = await google('recetas de pasta', { lang: 'es' })
```

##### period

Type: `string`<br>
Values: `'hour'`, `'day'`, `'week'`, `'month'`, `'year'`

Time-based filter for results.

```js
const page = await google('tech news', { period: 'week' })
```

##### domain

Type: `string`<br>
Default: `'google.com'`

Regional Google domain to query (e.g. `'google.de'`, `'google.co.uk'`, `'google.com.tr'`).

```js
const page = await google('restaurants', { domain: 'google.co.uk' })
```

### Page object

The return value from a search call is a page object with the following properties:

| Property | Type | Description |
|---|---|---|
| `results` | `Array<Result>` | Array of search results |
| `html()` | `() => Promise<string>` | Returns the raw SERP HTML |
| `next()` | `() => Promise<Page>` | Fetches the next page of results |

### Result object

Each result in the `results` array has:

| Property | Type | Description |
|---|---|---|
| `title` | `string` | Page title |
| `url` | `string` | Direct URL to the page |
| `description` | `string` | Result snippet text |
| `html()` | `() => Promise<string>` | Fetches the full HTML of this result's URL via Microlink |

## License

**@microlink/google** © [microlink.io](https://microlink.io), released under the [MIT](https://github.com/microlinkhq/microlink-google/blob/master/LICENSE.md) License.<br>
Authored and maintained by [microlink.io](https://microlink.io) with help from [contributors](https://github.com/microlinkhq/microlink-google/contributors).

> [microlink.io](https://microlink.io) · GitHub [microlink.io](https://github.com/microlinkhq) · Twitter [@microlinkhq](https://twitter.com/microlinkhq)
