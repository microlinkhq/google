const request = require('request')
let options = {
  method: 'GET',
  url: 'https://google.serper.dev/autocomplete?q=apple+inc&apiKey=0789121d6e5a5e54fcebfe1b9011167142894d7a',
  headers: {}
}
request(options, (error, response) => {
  if (error) throw new Error(error)
  console.log(response.body)
})


// results

{
    "searchParameters": {
        "q": "apple inc",
        "type": "autocomplete",
        "engine": "google"
    },
    "suggestions": [
        {
            "value": "apple inc"
        },
        {
            "value": "apple inc stock"
        },
        {
            "value": "apple inc address"
        },
        {
            "value": "apple inc phone number"
        },
        {
            "value": "apple inc careers"
        },
        {
            "value": "apple income statement"
        },
        {
            "value": "apple income statement 2025"
        },
        {
            "value": "apple inc logo"
        },
        {
            "value": "apple inc ticker"
        },
        {
            "value": "apple inc headquarters"
        }
    ],
    "credits": 1
}
