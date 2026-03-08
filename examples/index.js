'use strict'

const google = require('@microlink/google')({
  endpoint: 'http://localhost:3000'
})

const run = async () => {
  const page = await google('Lotus Elise S2', {
    lang: 'en'
  })

  console.log('results', page.results)

  // console.log('html', await page.results[0].html())
}
run().catch(err => {
  console.error(err)
  process.exit(1)
})
