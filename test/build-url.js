'use strict'

const test = require('ava')

const { buildUrl, DOMAIN } = require('../src')

test('returns URL with correct domain', t => {
  const url = buildUrl('test')
  t.is(url.hostname, DOMAIN)
  t.is(url.protocol, 'https:')
})

test('sets pathname from buildPath', t => {
  const url = buildUrl('hello world', { limit: 10, lang: 'en' })
  t.is(url.pathname, '/hello+world/10/en')
})

test('sets device param', t => {
  const url = buildUrl('q', { device: 'desktop' })
  t.is(url.searchParams.get('device'), 'desktop')
})

test('sets period param', t => {
  const url = buildUrl('q', { period: 'last_year' })
  t.is(url.searchParams.get('period'), 'last_year')
})

test('sets domain param', t => {
  const url = buildUrl('q', { domain: 'example.com' })
  t.is(url.searchParams.get('domain'), 'example.com')
})

test('omits falsy params', t => {
  const url = buildUrl('q')
  t.is(url.searchParams.get('device'), null)
  t.is(url.searchParams.get('period'), null)
  t.is(url.searchParams.get('domain'), null)
})

test('combines all options', t => {
  const url = buildUrl('q', {
    limit: 5,
    lang: 'fr',
    device: 'mobile',
    period: 'last_month',
    domain: 'site.io'
  })
  t.is(url.pathname, '/q/5/fr')
  t.is(url.searchParams.get('device'), 'mobile')
  t.is(url.searchParams.get('period'), 'last_month')
  t.is(url.searchParams.get('domain'), 'site.io')
})
