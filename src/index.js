'use strict'

const mql = require('@microlink/mql')

const DOMAIN = 'microlink.google'

const buildPath = (query, limit, lang) =>
  [encodeURIComponent(query).replace(/%20/g, '+'), limit, lang]
    .filter(v => v !== undefined)
    .join('/')

const buildUrl = (query, { limit, lang, period, domain } = {}) => {
  const url = new URL(`https://${DOMAIN}/${buildPath(query, limit, lang)}`)
  if (period) url.searchParams.set('period', period)
  if (domain) url.searchParams.set('domain', domain)
  return url
}

const fetchPage = async (url, mqlOpts, offset, query) => {
  url.searchParams.set('start', String(offset))
  const { data } = await mql(url.toString(), mqlOpts)
  const { results } = data

  return {
    html: async () => {
      const { data } = await mql(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        {
          ...mqlOpts,
          data: { content: { attr: 'html' } }
        }
      )
      return data.content
    },
    results: results.map(result => ({
      ...result,
      html: async () => {
        const { data } = await mql(result.url, {
          ...mqlOpts,
          data: { content: { attr: 'html' } }
        })
        return data.content
      }
    })),
    next: () =>
      fetchPage(new URL(url.toString()), mqlOpts, offset + results.length, query)
  }
}

module.exports = ctxOpts => {
  return async (query, { limit, lang, period, domain, ...opts } = {}) => {
    const url = buildUrl(query, { limit, lang, period, domain })
    return fetchPage(url, { ...ctxOpts, ...opts }, 0, query)
  }
}

module.exports.buildPath = buildPath
module.exports.buildUrl = buildUrl
module.exports.DOMAIN = DOMAIN
