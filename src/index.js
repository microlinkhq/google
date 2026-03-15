'use strict'

const mql = require('@microlink/mql')

const DOMAIN = 'microlink.google'

const buildPath = (query, limit, location) =>
  [encodeURIComponent(query).replace(/%20/g, '+'), limit, location]
    .filter(v => v !== undefined)
    .join('/')

const buildUrl = (query, { limit, location, type, period } = {}) => {
  const url = new URL(`https://${DOMAIN}/${buildPath(query, limit, location)}`)
  if (type) url.searchParams.set('type', type)
  if (period) url.searchParams.set('period', period)
  return url
}

const resultUrl = result => result.url

const fetchPage = async (url, mqlOpts, offset, query) => {
  url.searchParams.set('start', String(offset))
  const { data } = await mql(url.toString(), mqlOpts)
  const { results, ...extra } = data

  return {
    ...extra,
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
    results: results.map(result => {
      const url = resultUrl(result)
      return {
        ...result,
        ...(url && {
          html: async () => {
            const { data } = await mql(url, {
              ...mqlOpts,
              data: { content: { attr: 'html' } }
            })
            return data.content
          }
        })
      }
    }),
    next: () =>
      fetchPage(
        new URL(url.toString()),
        mqlOpts,
        offset + results.length,
        query
      )
  }
}

const createGoogleClient = ctxOpts => {
  return async (query, { limit, location, type, period, ...opts } = {}) => {
    const url = buildUrl(query, { limit, location, type, period })
    return fetchPage(url, { ...ctxOpts, ...opts }, 0, query)
  }
}

module.exports = createGoogleClient
module.exports.buildPath = buildPath
module.exports.buildUrl = buildUrl
module.exports.DOMAIN = DOMAIN
