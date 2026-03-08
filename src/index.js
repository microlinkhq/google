'use strict'

const mql = require('@microlink/mql')

const DOMAIN = 'microlink.google'

const buildPath = (query, limit, lang) =>
  [encodeURIComponent(query).replace(/%20/g, '+'), limit, lang]
    .filter(v => v !== undefined)
    .join('/')

const buildUrl = (query, { limit, lang, device, period, domain } = {}) => {
  const url = new URL(`https://${DOMAIN}/${buildPath(query, limit, lang)}`)
  if (device) url.searchParams.set('device', device)
  if (period) url.searchParams.set('period', period)
  if (domain) url.searchParams.set('domain', domain)
  return url
}

const fetchPage = async (url, mqlOpts, offset) => {
  url.searchParams.set('start', String(offset))
  const { data } = await mql(url.toString(), mqlOpts)
  const { results, html } = data

  return {
    html: () => Promise.resolve(html),
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
      fetchPage(new URL(url.toString()), mqlOpts, offset + results.length)
  }
}

module.exports = ctxOpts => {
  return async (
    query,
    { limit, lang, device, period, domain, ...opts } = {}
  ) => {
    const url = buildUrl(query, { limit, lang, device, period, domain })
    return fetchPage(url, { ...ctxOpts, ...opts }, 0)
  }
}

module.exports.buildPath = buildPath
module.exports.buildUrl = buildUrl
module.exports.DOMAIN = DOMAIN
