'use strict'

const test = require('ava')
const proxyquire = require('proxyquire').noCallThru()

const createModule = mqlFn => proxyquire('../src', { '@microlink/mql': mqlFn })

const mqlStub =
  (capturedCalls = []) =>
    async (url, opts) => {
      capturedCalls.push({ url, opts })
      return {
        data: {
          results: [
            { url: 'https://example.com/1', title: 'Result 1' },
            { url: 'https://example.com/2', title: 'Result 2' }
          ],
          html: '<html>page</html>'
        }
      }
    }

test('starts pagination offset at 0', async t => {
  const calls = []
  const google = createModule(mqlStub(calls))({})

  await google('test')

  const url = new URL(calls[0].url)
  t.is(url.searchParams.get('start'), '0')
})

test('merges context opts with per-call opts', async t => {
  const calls = []
  const google = createModule(mqlStub(calls))({
    endpoint: 'https://custom.api'
  })

  await google('test', { timeout: 5000 })

  t.like(calls[0].opts, { endpoint: 'https://custom.api', timeout: 5000 })
})

test('per-call opts override context opts', async t => {
  const calls = []
  const google = createModule(mqlStub(calls))({ timeout: 1000 })

  await google('test', { timeout: 5000 })

  t.is(calls[0].opts.timeout, 5000)
})

test('returns mapped results with original properties', async t => {
  const google = createModule(mqlStub())({})

  const page = await google('test')

  t.is(page.results.length, 2)
  t.is(page.results[0].url, 'https://example.com/1')
  t.is(page.results[0].title, 'Result 1')
  t.is(page.results[1].url, 'https://example.com/2')
})

test('page html() returns the page HTML', async t => {
  const google = createModule(mqlStub())({})

  const page = await google('test')
  const html = await page.html()

  t.is(html, '<html>page</html>')
})

test('result html() fetches content from result URL', async t => {
  const calls = []
  const mqlFn = async (url, opts) => {
    calls.push({ url, opts })
    if (opts && opts.data) {
      return { data: { content: '<div>article</div>' } }
    }
    return {
      data: {
        results: [{ url: 'https://example.com/article', title: 'Article' }],
        html: '<html></html>'
      }
    }
  }
  const google = createModule(mqlFn)({})

  const page = await google('test')
  const html = await page.results[0].html()

  t.is(html, '<div>article</div>')
  t.is(calls[1].url, 'https://example.com/article')
  t.deepEqual(calls[1].opts.data, { content: { attr: 'html' } })
})

test('next() returns second page with correct offset', async t => {
  const calls = []
  const google = createModule(mqlStub(calls))({})

  const page1 = await google('test')
  await page1.next()

  const url = new URL(calls[1].url)
  t.is(url.searchParams.get('start'), '2')
})

test('next() preserves all URL params', async t => {
  const calls = []
  const google = createModule(mqlStub(calls))({})

  const page1 = await google('test', { device: 'mobile', lang: 'fr', limit: 5 })
  await page1.next()

  const url = new URL(calls[1].url)
  t.is(url.searchParams.get('device'), 'mobile')
  t.is(url.pathname, '/test/5/fr')
})

test('chained next() accumulates offset', async t => {
  const calls = []
  const google = createModule(mqlStub(calls))({})

  const page1 = await google('test')
  const page2 = await page1.next()
  await page2.next()

  const url = new URL(calls[2].url)
  t.is(url.searchParams.get('start'), '4')
})
