import createGoogleClient from '@microlink/google'

const google = createGoogleClient({
  endpoint: 'http://localhost:3000/'
  // apiKey: process.env.MICROLINK_API_KEY
})

const run = async () => {
  const page = await google('lotus elise filetype:pdf', {
    type: 'search'
  })

  page.results.forEach(result => {
    console.log(result.url)
  }

  console.log(page)
  console.log(JSON.stringify(page, null, 2))
}
run().catch(err => {
  console.error(err)
  process.exit(1)
})
