'use strict'

const google = require('@microlink/google')({
  endpoint: 'http://localhost:3000/'
  // apiKey: process.env.MICROLINK_API_KEY
})

const run = async () => {
  const page = await google('Lotus Elise S2', {
    lang: 'en'
  })

  console.log('results', page)
}
run().catch(err => {
  console.error(err)
  process.exit(1)
})
