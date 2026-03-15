const request = require('request')
let options = {
  method: 'GET',
  url: 'https://google.serper.dev/news?q=apple+inc&apiKey=0789121d6e5a5e54fcebfe1b9011167142894d7a',
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
        "type": "news",
        "num": 10,
        "page": 1,
        "allowSuggested": true,
        "engine": "google"
    },
    "news": [
        {
            "title": "1248 Management LLC Decreases Stake in Apple Inc. $AAPL",
            "link": "https://www.marketbeat.com/instant-alerts/filing-1248-management-llc-decreases-stake-in-apple-inc-aapl-2026-03-15/",
            "snippet": "1248 Management LLC lessened its holdings in shares of Apple Inc. (NASDAQ:AAPL - Free Report) by 63.4% during the third quarter,...",
            "date": "2 hours ago",
            "source": "MarketBeat",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhq42CsOy0LlqOtHUqlivJPB0dg_lq7hN0eI5t2ZYSaxo1RfNksk3lyA&usqp=CAI&s"
        },
        {
            "title": "Apple Inc. | History, Products, Headquarters, & Facts | Britannica Money",
            "link": "https://www.britannica.com/money/Apple-Inc",
            "snippet": "Founded by Steve Jobs and Steve Wozniak in 1976, Apple set new benchmarks in product innovation, user-centric functionality, aesthetics and...",
            "date": "6 days ago",
            "source": "Britannica",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0JIZiTmDTQYCKcd-khBR5qbJlTm2csfXenWmWCI9BZzI843AeDlOGPQ&usqp=CAI&s"
        },
        {
            "title": "Apple CarPlay® and Android Auto™ in Lucid Gravity",
            "link": "https://lucidmotors.com/stories/apple-carplay-android-auto-lucid-gravity",
            "snippet": "Now, you can enjoy instant access to all your favorite maps, media, and messaging apps while you're on-the-go.",
            "date": "13 hours ago",
            "source": "Lucid Motors",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vUVUj9nwnF950NoHDsArqtprVWT2PSSl1Jf_eDm72qkyKc-bM85RFnA&usqp=CAI&s"
        },
        {
            "title": "Apple (AAPL) Postpones Its Smart Home Display Release",
            "link": "https://www.insidermonkey.com/blog/apple-aapl-postpones-its-smart-home-display-release-1716540/",
            "snippet": "Apple Inc. (NASDAQ:AAPL) earns a place on our list of the 13 unrivaled stocks of the next 10 years, though recent developments suggest the...",
            "date": "2 hours ago",
            "source": "Insider Monkey",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1USL5EiQy8sQaEh9VZTlFCoFcGO96Ik2U2MbzNpt9U0GKkPpgy-wU_0&usqp=CAI&s"
        },
        {
            "title": "Apple to celebrate 50 years of thinking different",
            "link": "https://www.apple.com/newsroom/2026/03/apple-to-celebrate-50-years-of-thinking-different/",
            "snippet": "Apple today announced it will mark its 50th anniversary, celebrating five decades of thinking different and the innovations that helped...",
            "date": "2 days ago",
            "source": "Apple",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISGbO15aMjvP2HWQ--e8eZNN7Qb02dbXJGZPsna036qX58WNFGFp7o0Q&usqp=CAI&s"
        },
        {
            "title": "Apple Inc. (AAPL) Is a Trending Stock: Facts to Know Before Betting on It",
            "link": "https://finance.yahoo.com/news/apple-inc-aapl-trending-stock-130002643.html",
            "snippet": "Recently, Zacks.com users have been paying close attention to Apple (AAPL). This makes it worthwhile to examine what the stock has in store.",
            "date": "4 days ago",
            "source": "Yahoo Finance",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorN9xib7Y51K4ovUwtUq4FIKSwWAO--LHZIZmdlGd24R-N4ZfLsU7zsY&usqp=CAI&s"
        },
        {
            "title": "Apple’s iPhone 17e Is a Worthy Alternative to the Pricier iPhone 17",
            "link": "https://www.bloomberg.com/news/features/2026-03-14/apple-s-iphone-17e-is-a-worthy-alternative-to-the-pricier-iphone-17",
            "snippet": "Having recently updated the regular iPhone with a raft of meaningful upgrades, Apple Inc. set a high bar for its entry-level “e” series.",
            "date": "21 hours ago",
            "source": "Bloomberg.com",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dlIAXbZFscpn7TEV35fVlzDyKPp27ke_MzEvWlbzMLUUazDyOtI32Gg&usqp=CAI&s"
        },
        {
            "title": "Apple Inc. $AAPL Stake Reduced by BNP Paribas",
            "link": "https://www.marketbeat.com/instant-alerts/filing-apple-inc-aapl-stake-reduced-by-bnp-paribas-2026-03-15/",
            "snippet": "BNP Paribas reduced its position in shares of Apple Inc. (NASDAQ:AAPL - Free Report) by 4.4% in the third quarter, according to the company...",
            "date": "13 minutes ago",
            "source": "MarketBeat",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhq42CsOy0LlqOtHUqlivJPB0dg_lq7hN0eI5t2ZYSaxo1RfNksk3lyA&usqp=CAI&s"
        },
        {
            "title": "Apple Inc. $AAPL is Ausdal Financial Partners Inc.'s Largest Position",
            "link": "https://www.marketbeat.com/instant-alerts/filing-apple-inc-aapl-is-ausdal-financial-partners-incs-largest-position-2026-03-15/",
            "snippet": "Ausdal Financial Partners Inc. lifted its holdings in shares of Apple Inc. (NASDAQ:AAPL - Free Report) by 18.4% during the 3rd quarter,...",
            "date": "31 minutes ago",
            "source": "MarketBeat",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhq42CsOy0LlqOtHUqlivJPB0dg_lq7hN0eI5t2ZYSaxo1RfNksk3lyA&usqp=CAI&s"
        },
        {
            "title": "Berkshire Hathaway Inc Sells 41,787,236 Shares of Apple Inc. $AAPL",
            "link": "https://www.marketbeat.com/instant-alerts/filing-berkshire-hathaway-inc-sells-41787236-shares-of-apple-inc-aapl-2026-03-15/",
            "snippet": "Berkshire Hathaway Inc cut its position in shares of Apple Inc. (NASDAQ:AAPL - Free Report) by 14.9% in the 3rd quarter, according to its...",
            "date": "13 minutes ago",
            "source": "MarketBeat",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhq42CsOy0LlqOtHUqlivJPB0dg_lq7hN0eI5t2ZYSaxo1RfNksk3lyA&usqp=CAI&s"
        }
    ],
    "credits": 1
}
