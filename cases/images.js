// code

const request = require('request')
let options = {
  method: 'GET',
  url: 'https://google.serper.dev/images?q=apple+inc&apiKey=0789121d6e5a5e54fcebfe1b9011167142894d7a',
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
        "type": "images",
        "engine": "google",
        "num": 10
    },
    "images": [
        {
            "title": "Apple Inc. - Wikipedia",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            "imageWidth": 814,
            "imageHeight": 1000,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3mIf7riOXklE3zlfN3oCgFQJTZEBIel7Jw&s",
            "thumbnailWidth": 202,
            "thumbnailHeight": 249,
            "source": "Wikipedia",
            "domain": "en.wikipedia.org",
            "link": "https://en.wikipedia.org/wiki/Apple_Inc.",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffa%2FApple_logo_black.svg&tbnid=KQ8ko3fqAJ172M&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FApple_Inc.&docid=gk5eHYqeOTZu-M&w=814&h=1000",
            "position": 1
        },
        {
            "title": "Apple Inc. | History, Products, Headquarters, & Facts ...",
            "imageUrl": "https://cdn.britannica.com/46/253846-004-4D1ECECD/New-York-NY-USA-July-9-2022-Apple-logo-is-seen-at-the-Apple-flagship-store-on-the-5th-Avenue-in-NYC.jpg",
            "imageWidth": 550,
            "imageHeight": 367,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOPBdX4isGS4YuDxy2JoYpDDhzcjlHhowiw&s",
            "thumbnailWidth": 275,
            "thumbnailHeight": 183,
            "source": "Britannica",
            "domain": "www.britannica.com",
            "link": "https://www.britannica.com/money/Apple-Inc",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F46%2F253846-004-4D1ECECD%2FNew-York-NY-USA-July-9-2022-Apple-logo-is-seen-at-the-Apple-flagship-store-on-the-5th-Avenue-in-NYC.jpg&tbnid=sY4waTn5zZN0jM&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fmoney%2FApple-Inc&docid=LG9aByof-ROkZM&w=550&h=367",
            "position": 2
        },
        {
            "title": "Apple Inc. | Malls and Retail Wiki | Fandom",
            "imageUrl": "https://static.wikia.nocookie.net/malls/images/c/c0/Apple_Logo1.png/revision/latest?cb=20230508144916",
            "imageWidth": 3840,
            "imageHeight": 2160,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IGD8JwNwWMDc7vS6r86C2S0tvZBATKqBRw&s",
            "thumbnailWidth": 300,
            "thumbnailHeight": 168,
            "source": "Malls and Retail Wiki - Fandom",
            "domain": "malls.fandom.com",
            "link": "https://malls.fandom.com/wiki/Apple_Inc.",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fmalls%2Fimages%2Fc%2Fc0%2FApple_Logo1.png%2Frevision%2Flatest%3Fcb%3D20230508144916&tbnid=lqiqSMhKFxLiuM&imgrefurl=https%3A%2F%2Fmalls.fandom.com%2Fwiki%2FApple_Inc.&docid=-byHxsbaw1d69M&w=3840&h=2160",
            "position": 3
        },
        {
            "title": "Apple Inc. History. Apple Inc.'s ascent from a modest… | by ...",
            "imageUrl": "https://miro.medium.com/1*Z5JGr-Xv4lhVZG70GG5d5g.jpeg",
            "imageWidth": 740,
            "imageHeight": 415,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhWl7Vj3ZZdJDqwAkR_2YvvkxMjdt-dYKkA&s",
            "thumbnailWidth": 300,
            "thumbnailHeight": 168,
            "source": "Medium",
            "domain": "medium.com",
            "link": "https://medium.com/@The_naeth/apple-inc-history-e3f8717fcdde",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2F1*Z5JGr-Xv4lhVZG70GG5d5g.jpeg&tbnid=UHYLHFmIR1dEtM&imgrefurl=https%3A%2F%2Fmedium.com%2F%40The_naeth%2Fapple-inc-history-e3f8717fcdde&docid=KgjjrpzBedIttM&w=740&h=415",
            "position": 4
        },
        {
            "title": "Apple's New AI Revolution: Why 'Apple Intelligence' Could ...",
            "imageUrl": "https://bernardmarr.com/wp-content/uploads/2024/08/Apples-New-AI-Revolution-Why-Apple-Intelligence-Could-Change-Everything-scaled.jpeg",
            "imageWidth": 2560,
            "imageHeight": 1707,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HTByPYeUhP9A_pb1I9liTYEFa6HI4M2UJQ&s",
            "thumbnailWidth": 275,
            "thumbnailHeight": 183,
            "source": "Bernard Marr",
            "domain": "bernardmarr.com",
            "link": "https://bernardmarr.com/apples-new-ai-revolution-why-apple-intelligence-could-change-everything/",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fbernardmarr.com%2Fwp-content%2Fuploads%2F2024%2F08%2FApples-New-AI-Revolution-Why-Apple-Intelligence-Could-Change-Everything-scaled.jpeg&tbnid=Qx7uKlP1GsjlCM&imgrefurl=https%3A%2F%2Fbernardmarr.com%2Fapples-new-ai-revolution-why-apple-intelligence-could-change-everything%2F&docid=v8MTEagrs2O2mM&w=2560&h=1707",
            "position": 5
        },
        {
            "title": "Apple Inc. turns 41: Crazy facts about the iPhone maker ...",
            "imageUrl": "https://akm-img-a-in.tosshub.com/indiatoday/apple_647_040116105516.jpg?size=1200:675",
            "imageWidth": 1200,
            "imageHeight": 675,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgjL292162624e96Y0ccocJ_VGC3cx6rSRw&s",
            "thumbnailWidth": 300,
            "thumbnailHeight": 168,
            "source": "India Today",
            "domain": "www.indiatoday.in",
            "link": "https://www.indiatoday.in/education-today/gk-current-affairs/story/apple-inc-315785-2016-04-01",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fakm-img-a-in.tosshub.com%2Findiatoday%2Fapple_647_040116105516.jpg%3Fsize%3D1200%3A675&tbnid=1-9K42TWBGP8uM&imgrefurl=https%3A%2F%2Fwww.indiatoday.in%2Feducation-today%2Fgk-current-affairs%2Fstory%2Fapple-inc-315785-2016-04-01&docid=YLJcpl1H9oqW2M&w=1200&h=675",
            "position": 6
        },
        {
            "title": "Apple Inc. - Wikipedia",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Aerial_view_of_Apple_Park_dllu.jpg/330px-Aerial_view_of_Apple_Park_dllu.jpg",
            "imageWidth": 330,
            "imageHeight": 220,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2fGLw-8Q6WJOiBBoCGI2KdqZOUZK9yGmag&s",
            "thumbnailWidth": 275,
            "thumbnailHeight": 183,
            "source": "Wikipedia",
            "domain": "en.wikipedia.org",
            "link": "https://en.wikipedia.org/wiki/Apple_Inc.",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5a%2FAerial_view_of_Apple_Park_dllu.jpg%2F330px-Aerial_view_of_Apple_Park_dllu.jpg&tbnid=Dbr8ArYBPqd4HM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FApple_Inc.&docid=gk5eHYqeOTZu-M&w=330&h=220",
            "position": 7
        },
        {
            "title": "Everything You Need to Know About Apple - Capitalism",
            "imageUrl": "https://www.capitalism.com/wp-content/uploads/2020/11/Depositphotos_45177201_l-2015.jpg",
            "imageWidth": 1920,
            "imageHeight": 1440,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRGHoLPNuwKuCmDA2bkXgMdhSIC-mVSibMA&s",
            "thumbnailWidth": 259,
            "thumbnailHeight": 194,
            "source": "www.capitalism.com",
            "domain": "www.capitalism.com",
            "link": "https://www.capitalism.com/everything-you-need-to-know-about-apple/",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.capitalism.com%2Fwp-content%2Fuploads%2F2020%2F11%2FDepositphotos_45177201_l-2015.jpg&tbnid=TatA5z_yv_KMTM&imgrefurl=https%3A%2F%2Fwww.capitalism.com%2Feverything-you-need-to-know-about-apple%2F&docid=Vg_lQzOiOkG7rM&w=1920&h=1440",
            "position": 8
        },
        {
            "title": "Apple's Success Story | StreetFins®",
            "imageUrl": "https://streetfins.com/wp-content/uploads/2023/05/merlin_168487071_758ee693-dee1-4a5d-bb72-61d989164577-superJumbo.jpg",
            "imageWidth": 2048,
            "imageHeight": 1365,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS233Sx1jHgg-dYAC1tFKiNxDShI0imIoGtA&s",
            "thumbnailWidth": 275,
            "thumbnailHeight": 183,
            "source": "StreetFins",
            "domain": "streetfins.com",
            "link": "https://streetfins.com/apples-success-story/",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstreetfins.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fmerlin_168487071_758ee693-dee1-4a5d-bb72-61d989164577-superJumbo.jpg&tbnid=AnU8LvkF1mIQPM&imgrefurl=https%3A%2F%2Fstreetfins.com%2Fapples-success-story%2F&docid=1bViqH8T3FsVVM&w=2048&h=1365",
            "position": 9
        },
        {
            "title": "Apple's iPhone expected to drive sales, but App Store faces ...",
            "imageUrl": "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/JX32WMP7GZKYXDDATJY2WT52KY.jpg",
            "imageWidth": 3500,
            "imageHeight": 2329,
            "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO10XKyu6qikgC8cpgDSqFkzYQ67NxGvO-qQ&s",
            "thumbnailWidth": 275,
            "thumbnailHeight": 183,
            "source": "Reuters",
            "domain": "www.reuters.com",
            "link": "https://www.reuters.com/technology/apples-iphone-expected-drive-sales-app-store-faces-regulatory-risk-2021-07-27/",
            "googleUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2FJX32WMP7GZKYXDDATJY2WT52KY.jpg&tbnid=zCbwT8QHrEhVJM&imgrefurl=https%3A%2F%2Fwww.reuters.com%2Ftechnology%2Fapples-iphone-expected-drive-sales-app-store-faces-regulatory-risk-2021-07-27%2F&docid=aImMYRPUToq4tM&w=3500&h=2329",
            "creator": "Stephen Lam",
            "credit": "REUTERS",
            "position": 10
        }
    ],
    "credits": 1
}
