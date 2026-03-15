// code

const request = require('request')
let options = {
  method: 'GET',
  url: 'https://google.serper.dev/videos?q=apple+inc&apiKey=0789121d6e5a5e54fcebfe1b9011167142894d7a',
  headers: {}
}
request(options, (error, response) => {
  if (error) throw new Error(error)
  console.log(response.body)
})

// result

{
    "searchParameters": {
        "q": "apple inc",
        "type": "videos",
        "num": 10,
        "page": 1,
        "engine": "google"
    },
    "videos": [
        {
            "title": "Apple",
            "link": "https://www.youtube.com/apple",
            "snippet": "Watch new Apple Originals on the Apple TV app with an Apple TV subscription: apple.co/_Apple-TV-Plus · 2:18. Margo's Got Money Troubles — Official Trailer | ...",
            "position": 1
        },
        {
            "title": "Apple's Co-Founder Left to Make THIS?? - CORE Master ...",
            "link": "https://www.youtube.com/watch?v=VxoB4vM1pUM",
            "snippet": "16:00 Credits. Apple's Co-Founder Left to Make THIS?? - CORE Master Universal Remote. 1M views · 3 days ago ...more. Linus Tech Tips. 16.8M.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1Zhg7LA73zrE_8p-KaU4r7Sk4U_VkG6ZV-Q29VGHPejpAOI7-VKIgw&s",
            "duration": "16:08",
            "source": "YouTube",
            "channel": "Linus Tech Tips",
            "date": "3 days ago",
            "position": 2
        },
        {
            "title": "CHM Live | Apple at 50: Five Decades of Thinking Different",
            "link": "https://www.youtube.com/watch?v=eCSNJgI2LFI",
            "snippet": "[Recorded March 11, 2026] On April 1, 1976, Apple Computer was founded with a radical idea: that powerful computing should be personal.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07NXNu1oB4glBJNR79yeLgwr9tfHHLEpspkK28NHrs1NucLNnlec_kw&s",
            "videoUrl": "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQCkklJLkESq8rtoWC6agJM3LfsIdB_ArWgGA",
            "duration": "1:38:13",
            "source": "YouTube",
            "channel": "Computer History Museum",
            "date": "2 days ago",
            "position": 3
        },
        {
            "title": "Apple's Major Shake-Up! A Good Thing? Or Is Apple In Trouble?",
            "link": "https://www.youtube.com/watch?v=PtiyJdHUmBo",
            "snippet": "... Apple is experiencing its biggest shake-up for talent and leadership since Steve Jobs passed away. What direction will the company go? Is ...",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCDoNMZCiLhNcH9LK7krYcuq2dcNYrKMCa9OI6LGpuvEQYgP-yfOl5g&s",
            "duration": "16:29",
            "source": "YouTube",
            "channel": "Brian Tong",
            "date": "Dec 6, 2025",
            "position": 4
        },
        {
            "title": "Apple Is Falling Apart (On Purpose)",
            "link": "https://www.youtube.com/watch?v=e1E-yfcKdUw",
            "snippet": "... Apple's Silicon chief remains crucial to the company's future under a likely John Ternus CEO succession. Comparing Apple's strategy to GE's ...",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6BV8nJ5f2unRDSDRld7KtvwHAw571V3FNkt2AKTXhprbbP-VYjLY4A&s",
            "videoUrl": "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcS14Yq210_SxbHAx_XnGXX7cbaUehn1mh0_bA",
            "duration": "16:58",
            "source": "YouTube",
            "channel": "Snazzy Labs",
            "date": "Dec 19, 2025",
            "position": 5
        },
        {
            "title": "Apple Increases iPhone Production in India by 53%",
            "link": "https://www.youtube.com/watch?v=L1Ao3mAuwSc",
            "snippet": "... Apple's shift to India for iPhone production. Apple Inc. increased iPhone production in India by about 53% last year and now makes a quarter ...",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgmG1o01FqmOb9ERuabBDReBHhgcAB99lcPD8GCJGOpxKNA4Oe_cw4Q&s",
            "videoUrl": "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRy7MowdEHwd7d6NvT8WIJO8d4xr8-GgIgo8g",
            "duration": "5:17",
            "source": "YouTube",
            "channel": "Bloomberg Television",
            "date": "4 days ago",
            "position": 6
        },
        {
            "title": "Apple",
            "link": "https://www.youtube.com/channel/UCE_M8A5yxnLfW0KghEeajjw",
            "snippet": "Watch new Apple Originals on the Apple TV app with an Apple TV subscription: apple.co/_Apple-TV-Plus · 2:18. Margo's Got Money Troubles — Official Trailer | ...",
            "position": 7
        },
        {
            "title": "Apple",
            "link": "https://www.youtube.com/user/Apple",
            "snippet": "Watch new Apple Originals on the Apple TV app with an Apple TV subscription: apple.co/_Apple-TV-Plus · 2:18. Margo's Got Money Troubles — Official Trailer | ...",
            "position": 8
        },
        {
            "title": "Pressure Points: Apple's 50th Anniversary",
            "link": "https://www.youtube.com/watch?v=fZBU7-UE7JU",
            "snippet": "As someone who follow apple since my college days, my roommate had a SE and from that point on I was hooked. I turned a Dos using company into ...",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvNS4HeHayVnfHvFavyL-eLx4GtNrMqtGHcPIF0jC8j7jbQmOy24jvA&s",
            "duration": "12:56",
            "source": "YouTube",
            "channel": "Deepwater Asset Management",
            "date": "2 days ago",
            "position": 9
        }
    ],
    "credits": 1
}
