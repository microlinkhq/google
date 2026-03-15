// code
//
const request = require('request')
let options = {
  method: 'GET',
  url: 'https://google.serper.dev/places?q=apple+inc&apiKey=0789121d6e5a5e54fcebfe1b9011167142894d7a',
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
        "type": "places",
        "num": 10,
        "page": 1,
        "engine": "google"
    },
    "places": [
        {
            "position": 1,
            "title": "Apple Park Meadows",
            "address": "8405 Park Meadows Center Dr, Lone Tree, CO 80124",
            "latitude": 39.56147,
            "longitude": -104.87533,
            "phoneNumber": "(303) 256-1501",
            "website": "https://www.apple.com/retail/parkmeadows?cid=aos-us-seo-maps",
            "cid": "7356726063401944424"
        },
        {
            "position": 2,
            "title": "Apple Aspen Grove",
            "address": "7301 S Santa Fe Dr, Littleton, CO 80120",
            "latitude": 39.585197,
            "longitude": -105.02643,
            "phoneNumber": "(303) 256-2580",
            "website": "https://www.apple.com/retail/aspengrove?cid=aos-us-seo-maps",
            "cid": "3917254666566585239"
        },
        {
            "position": 3,
            "title": "Apple Cherry Creek",
            "address": "3000 E 1st Ave, Denver, CO 80206",
            "latitude": 39.717415,
            "longitude": -104.95481,
            "phoneNumber": "(303) 583-7310",
            "website": "https://www.apple.com/retail/cherrycreek?cid=aos-us-seo-maps",
            "cid": "18311750259920080431"
        },
        {
            "position": 4,
            "title": "Mac Outlet",
            "address": "111 W Floyd Ave, Englewood, CO 80110",
            "latitude": 39.656487,
            "longitude": -104.98936,
            "phoneNumber": "(303) 282-0069",
            "website": "http://www.macoutlet.com/",
            "cid": "11513118758162473655"
        },
        {
            "position": 5,
            "title": "Apple Aire Heating & Cooling",
            "address": "4020 Youngfield St, Wheat Ridge, CO 80033",
            "latitude": 39.76964,
            "longitude": -105.14187,
            "phoneNumber": "(303) 733-2813",
            "website": "https://www.appleaire.com/",
            "bookingLinks": [
                "https://book.servicetitan.com/b3z96y79e8xm6i4vmkjzmmwl?rwg_token=AFd1xnEaPyWmGQ4Nhq7edBrees3EaskKazKymwXTZBJSUmonFXR9w5magT0dZj29PtWM-vCDKoL71P5jlkmSwZqe51mZyh-QZQ%3D%3D&source=cat"
            ],
            "cid": "3362641806844931949"
        },
        {
            "position": 6,
            "title": "Apple Capital Group Inc",
            "address": "1600 Broadway # 400, Denver, CO 80202",
            "latitude": 39.74212,
            "longitude": -104.98702,
            "phoneNumber": "(720) 239-1142",
            "website": "https://www.applecapitalgroup.com/",
            "cid": "6513132064157739605"
        },
        {
            "position": 7,
            "title": "Macintosh Computer Itech Inc",
            "address": "7475 W 5th Ave #101a, Lakewood, CO 80226",
            "latitude": 39.724197,
            "longitude": -105.07972,
            "phoneNumber": "(303) 202-6013",
            "website": "https://www.denvermacrepair.net/",
            "cid": "1194192998913680437"
        },
        {
            "position": 8,
            "title": "Apple",
            "address": "5360 Sterling Dr, Boulder, CO 80301",
            "latitude": 40.02761,
            "longitude": -105.22854,
            "cid": "8789367663003964752"
        },
        {
            "position": 9,
            "title": "Apple Rescue Of Denver",
            "address": "6321 Washington St Unit E, Denver, CO 80216",
            "latitude": 39.81166,
            "longitude": -104.979454,
            "phoneNumber": "(720) 900-1147",
            "website": "https://www.applerescueofdenver.com/",
            "cid": "13733601566209659361"
        },
        {
            "position": 10,
            "title": "Apple FlatIron Crossing",
            "address": "FlatIron Crossing, 1 W Flatiron Crossing Dr, Broomfield, CO 80021",
            "latitude": 39.93329,
            "longitude": -105.13319,
            "phoneNumber": "(720) 479-0465",
            "website": "https://www.apple.com/retail/flatironcrossing?cid=aos-us-seo-maps",
            "cid": "15410243209704931855"
        }
    ],
    "credits": 1
}
