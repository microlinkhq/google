const request = require('request')
let options = {
  method: 'GET',
  url: 'https://google.serper.dev/maps?q=apple+inc&apiKey=0789121d6e5a5e54fcebfe1b9011167142894d7a',
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
        "type": "maps",
        "num": 10,
        "page": 1,
        "engine": "google"
    },
    "ll": "@40.795079,-73.8996086,11z",
    "places": [
        {
            "position": 1,
            "title": "Apple Fifth Avenue",
            "address": "767 5th Ave, New York, NY 10153",
            "latitude": 40.7638478,
            "longitude": -73.9729785,
            "rating": 4.4,
            "ratingCount": 22005,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/fifthavenue?cid=aos-us-seo-maps",
            "phoneNumber": "(212) 336-1440",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "Open 24 hours",
                "Monday": "Open 24 hours",
                "Tuesday": "Open 24 hours",
                "Wednesday": "Open 24 hours",
                "Thursday": "Open 24 hours",
                "Friday": "Open 24 hours",
                "Saturday": "Open 24 hours"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoYAO0bfPna32YkiPXz89W-sIDU988ejm2dVfeRsghe5BujwW2ieDePzqGL62pHMQt0CWeXE_9Ifq4BzWdDeoP8VJNapQtzo1LanPGo8Iq-Ho1_15dCUooPpmgrhpTeLvejkfTB",
            "cid": "5751726597071950148",
            "fid": "0x89c258f0741ceda7:0x4fd23cddb7a3d144",
            "placeId": "ChIJp-0cdPBYwokRRNGjt9080k8"
        },
        {
            "position": 2,
            "title": "Apple Downtown Brooklyn",
            "address": "123 Flatbush Ave, Brooklyn, NY 11217",
            "latitude": 40.685770999999995,
            "longitude": -73.978279,
            "rating": 3.9,
            "ratingCount": 3805,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/downtownbrooklyn?cid=aos-us-seo-maps",
            "phoneNumber": "(718) 637-6200",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "10 AM–8 PM",
                "Monday": "10 AM–9 PM",
                "Tuesday": "10 AM–9 PM",
                "Wednesday": "10 AM–9 PM",
                "Thursday": "10 AM–9 PM",
                "Friday": "10 AM–9 PM",
                "Saturday": "10 AM–9 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqm6VG6yfuB8GpRYmIaFm_N7Gep_XV_oPfXYAZB09XSOgoLezlOTQuvIa7O7pI1qL9dTc35vYcOjWkKlyIVBBtaE2PULgqjLqaqeNQ0vNezZLMzurZtHFT0mV4LXIsOgpOUIKla",
            "cid": "1941946823234009505",
            "fid": "0x89c25badf08e1a79:0x1af32e58cb8fb9a1",
            "placeId": "ChIJeRqO8K1bwokRobmPy1gu8xo"
        },
        {
            "position": 3,
            "title": "Apple company",
            "address": "1301 Sterling Blvd, Englewood, NJ 07631",
            "latitude": 40.8819389,
            "longitude": -73.988621,
            "rating": 4.4,
            "ratingCount": 5,
            "type": "Handyman/Handywoman/Handyperson",
            "types": [
                "Handyman/Handywoman/Handyperson",
                "Security system supplier"
            ],
            "openingHours": {
                "Sunday": "Open 24 hours",
                "Monday": "Open 24 hours",
                "Tuesday": "Open 24 hours",
                "Wednesday": "Open 24 hours",
                "Thursday": "Open 24 hours",
                "Friday": "Open 24 hours",
                "Saturday": "Open 24 hours"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep9njuFCY0l88J77NnX2ldGyrJnEVhvR88Z257wGZ5rRYVo_KMvgX0jb11H82BZ08PCnotuiV3WZ6pUfzDXApexE15YzzYq1SDyKpofZWzsTRMlHwMPUr62E1PbOgxLsc8jmDWp",
            "cid": "4594660493335944335",
            "fid": "0x89c2f6e9cb4b30d7:0x3fc3836008cf5c8f",
            "placeId": "ChIJ1zBLy-n2wokRj1zPCGCDwz8"
        },
        {
            "position": 4,
            "title": "Apple Industries Inc.",
            "address": "200 Forest Dr #8, Greenvale, NY 11548",
            "latitude": 40.804198299999996,
            "longitude": -73.639123,
            "rating": 3.5,
            "ratingCount": 27,
            "type": "Manufacturer",
            "types": [
                "Manufacturer"
            ],
            "website": "https://appleindustries.com/",
            "phoneNumber": "(516) 619-8000",
            "openingHours": {
                "Sunday": "Closed",
                "Monday": "9 AM–5 PM",
                "Tuesday": "9 AM–5 PM",
                "Wednesday": "9 AM–5 PM",
                "Thursday": "9 AM–5 PM",
                "Friday": "9 AM–5 PM",
                "Saturday": "Closed"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoW3vtKvqj-wxDPSheTMx-zruNaJyF-8Scuh2SmyPjCAPgAYDXAQJbSGh8ykjAsCALONlAeICDtmCf9wzyi6q7PyEclJkrpid18SiRf5VbxAAz2jCd5ZlPhognCCYbL_ivy4HUbWg",
            "cid": "4365827875579200058",
            "fid": "0x89c2863d84f7d989:0x3c9689525a65823a",
            "placeId": "ChIJidn3hD2GwokROoJlWlKJljw"
        },
        {
            "position": 5,
            "title": "Applemedic Inc",
            "address": "481 8th Ave 11th Floor, New York, NY 10001",
            "latitude": 40.752683999999995,
            "longitude": -73.9935793,
            "rating": 4,
            "ratingCount": 9,
            "type": "Computer support and services",
            "types": [
                "Computer support and services",
                "Computer repair service",
                "Data recovery service",
                "Phone repair service"
            ],
            "website": "http://www.applemedic.com/",
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwernQr8aCvCGc_NjBAHqNhRXkK1onSISG4KnMAUxfhYNxy3Muf35gMmbZzF_x1bcGmqCBLaMbRr02MqS2bA3aBY1HdtZD6HaWJ3uug3OhAAc0_21TCSva58u749mhVhOmZ5bOkQAKQ",
            "cid": "7961809938649573937",
            "fid": "0x89c259b9532d8b9b:0x6e7e07f4aa61ea31",
            "placeId": "ChIJm4stU7lZwokRMephqvQHfm4"
        },
        {
            "position": 6,
            "title": "Apple Department Store II INC",
            "address": "108-116 Canal St, Staten Island, NY 10304",
            "latitude": 40.6264519,
            "longitude": -74.077113,
            "rating": 4.6,
            "ratingCount": 37,
            "type": "Home goods store",
            "types": [
                "Home goods store"
            ],
            "phoneNumber": "(917) 415-2233",
            "openingHours": {
                "Sunday": "9 AM–7 PM",
                "Monday": "9 AM–7 PM",
                "Tuesday": "9 AM–7 PM",
                "Wednesday": "9 AM–7 PM",
                "Thursday": "9 AM–7 PM",
                "Friday": "9 AM–7 PM",
                "Saturday": "9 AM–7 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo-N52ex5-B7ulV51Vbz6q_1VZ-SwnfbpZJfEVsMPs82bQdps0nmtjI-valFbUBMe_34aw2wBRHK6KDicYIP4GUVyIRGTA6XqkPcaV9xnI7XXjxzssD1JVH3YWCXK4QWAKr9AplLw",
            "cid": "15160406533385817951",
            "fid": "0x89c24e4b38e35bf1:0xd264956b38f90f5f",
            "placeId": "ChIJ8VvjOEtOwokRXw_5OGuVZNI"
        },
        {
            "position": 7,
            "title": "Apple Fashion Inc",
            "address": "203 W 38th St # 3R, New York, NY 10018",
            "latitude": 40.753760899999996,
            "longitude": -73.9889486,
            "rating": 5,
            "ratingCount": 1,
            "type": "Clothing store",
            "types": [
                "Clothing store"
            ],
            "phoneNumber": "(212) 278-0608",
            "openingHours": {
                "Sunday": "11 AM–6 PM",
                "Monday": "10 AM–7 PM",
                "Tuesday": "10 AM–7 PM",
                "Wednesday": "10 AM–7 PM",
                "Thursday": "10 AM–7 PM",
                "Friday": "10 AM–7 PM",
                "Saturday": "11 AM–6 PM"
            },
            "thumbnailUrl": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=KvJuaHPTZdgL1pet15HzHg&cb_client=search.gws-prod.gps&w=80&h=92&yaw=42.097305&pitch=0&thumbfov=100",
            "cid": "17205147004330233691",
            "fid": "0x89c259ac81bf34ab:0xeec4f60b2d7acf5b",
            "placeId": "ChIJqzS_gaxZwokRW896LQv2xO4"
        },
        {
            "position": 8,
            "title": "Apple Agency",
            "address": "31-11 21st St, Long Island City, NY 11106",
            "latitude": 40.7669086,
            "longitude": -73.9299636,
            "rating": 3.7,
            "ratingCount": 46,
            "type": "Store",
            "types": [
                "Store"
            ],
            "openingHours": {
                "Sunday": "11 AM–5 PM",
                "Monday": "10 AM–8 PM",
                "Tuesday": "10 AM–8 PM",
                "Wednesday": "11 AM–8 PM",
                "Thursday": "11 AM–8 PM",
                "Friday": "10 AM–8 PM",
                "Saturday": "11 AM–5 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerjMYgXfaDCxjY8dxHnbttfYpMfwlGPw0fP-mqDvDj6-JlG6phiQmBGNescwW1yVGPhscI6Zuo4uZhP_OZEz9vTeb9npggjUlCAdHtRH4dnrGukLvQad8643Xhe-qNZbxsJvaWxiA",
            "cid": "4953781780458378727",
            "fid": "0x89c25f3607141fd3:0x44bf5e48770615e7",
            "placeId": "ChIJ0x8UBzZfwokR5xUGd0hev0Q"
        },
        {
            "position": 9,
            "title": "Apple SoHo",
            "address": "103 Prince St, New York, NY 10012",
            "latitude": 40.725058,
            "longitude": -73.999029,
            "rating": 4.2,
            "ratingCount": 4083,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/soho?cid=aos-us-seo-maps",
            "phoneNumber": "(212) 226-3126",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "10 AM–8 PM",
                "Monday": "9 AM–9 PM",
                "Tuesday": "9 AM–9 PM",
                "Wednesday": "9 AM–9 PM",
                "Thursday": "9 AM–9 PM",
                "Friday": "9 AM–9 PM",
                "Saturday": "9 AM–9 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep1WXsL6m63gLFpumyARpSWbD1sgfdBq2gbTm_G_Do96QLJGQfW-0UUq4BOaNAfMznaVffK04Yya8zsi70ylBG_MVJ_G2ZKOITW-1ZgaN1g4f8WZvDwNDf484XnJdLiwEEtoMiz",
            "cid": "9414061520193552165",
            "fid": "0x89c2598ef4ac7557:0x82a5771324cf7f25",
            "placeId": "ChIJV3Ws9I5ZwokRJX_PJBN3pYI"
        },
        {
            "position": 10,
            "title": "ASA Apple Inc",
            "address": "561 Bay Ave, Elizabeth, NJ 07201",
            "latitude": 40.678801899999996,
            "longitude": -74.1600943,
            "rating": 2.8,
            "ratingCount": 28,
            "type": "Warehouse",
            "types": [
                "Warehouse"
            ],
            "phoneNumber": "(908) 659-9566",
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerW7KxhQqsnwOOGSlq3IltkTb2MxQG2W3mCKcKwavyj9q8M9T5tEI_Gt-VmbyT9S-DLDAEHGmC2oXULYRhkP2MnQEKLYs4Kiq-D8BHdFioPQSQxm69425Lze7I10hYBZ-7Nr-kj",
            "cid": "15600205838301263409",
            "fid": "0x89c25266265d4337:0xd87f108e76ebf631",
            "placeId": "ChIJN0NdJmZSwokRMfbrdo4Qf9g"
        },
        {
            "position": 11,
            "title": "Apple World Trade Center",
            "address": "185 Greenwich St, New York, NY 10007",
            "latitude": 40.711757999999996,
            "longitude": -74.0115477,
            "rating": 4.3,
            "ratingCount": 4596,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/worldtradecenter?cid=aos-us-seo-maps",
            "phoneNumber": "(646) 802-3800",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "10 AM–7 PM",
                "Monday": "9 AM–8 PM",
                "Tuesday": "9 AM–8 PM",
                "Wednesday": "9 AM–8 PM",
                "Thursday": "9 AM–8 PM",
                "Friday": "9 AM–8 PM",
                "Saturday": "10 AM–8 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweocrAL_xqAPv9eP5c4z8WPNlu3I-LVrI9RdlUmA3mERmNA-Xz3ol5LdQgsx1qUzgJ1i9sV8XedL3uBJXUL99_Y84HtzIzTSfHAYVOFS0_VVRNHGDgXXI__wSCKxeAox3zp6Cl2OKhGBmQAp",
            "cid": "13762533125378751874",
            "fid": "0x89c25a1967dedc8d:0xbefe56f5e3bf3d82",
            "placeId": "ChIJjdzeZxlawokRgj2_4_VW_r4"
        },
        {
            "position": 12,
            "title": "Apple West 14th Street",
            "address": "401 W 14th St, New York, NY 10014",
            "latitude": 40.74127,
            "longitude": -74.005389,
            "rating": 4.1,
            "ratingCount": 2893,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/west14thstreet?cid=aos-us-seo-maps",
            "phoneNumber": "(212) 444-3400",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "10 AM–7 PM",
                "Monday": "9 AM–9 PM",
                "Tuesday": "9 AM–9 PM",
                "Wednesday": "9 AM–9 PM",
                "Thursday": "9 AM–9 PM",
                "Friday": "9 AM–9 PM",
                "Saturday": "9 AM–9 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepRlEoldV7KuuQ71risipqryykIfKHZP817OwEiexgJRCFQ2eRf4-ilk111hRQV2kZfVUZAFiDCoxsUfkz8lgg_zh_8WTDdEeUmk_mmNvgOOpfLAsO7bb8JeGKCK9LiaFuE-U2P",
            "cid": "11536897459932049216",
            "fid": "0x89c259bf76eac183:0xa01b4b1d5d5b2f40",
            "placeId": "ChIJg8Hqdr9ZwokRQC9bXR1LG6A"
        },
        {
            "position": 13,
            "title": "Apple Cellular Inc and Golden Perfume.",
            "address": "30-04 Steinway St, Astoria, NY 11103",
            "latitude": 40.7638229,
            "longitude": -73.9152601,
            "rating": 3.9,
            "ratingCount": 16,
            "type": "Cell phone store",
            "types": [
                "Cell phone store",
                "Cell phone accessory store",
                "Electronics store",
                "Phone repair service"
            ],
            "phoneNumber": "(347) 355-6018",
            "openingHours": {
                "Sunday": "9 AM–9 PM",
                "Monday": "9 AM–9 PM",
                "Tuesday": "9 AM–9 PM",
                "Wednesday": "9 AM–9 PM",
                "Thursday": "9 AM–9 PM",
                "Friday": "9 AM–9 PM",
                "Saturday": "9 AM–9 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNsw5p4reh16G4C-bZymELl85W-BfbTtYIdYbSbvkH5bF_BiXL-AYWsrZCa-yjXB2oNSLuOjl0qphgAOD5wyiC21wZRw8q1DtFMKkIDwFXLiave3ao6-orQidAi3pboIJWkOf5",
            "cid": "15016668763265696174",
            "fid": "0x89c25f005b75c821:0xd065ecadb02801ae",
            "placeId": "ChIJIch1WwBfwokRrgEosK3sZdA"
        },
        {
            "position": 14,
            "title": "Apple American Dream",
            "address": "1 American Dream Wy Space D228, East Rutherford, NJ 07073",
            "latitude": 40.8094502,
            "longitude": -74.06692679999999,
            "rating": 3.4,
            "ratingCount": 269,
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/americandream?cid=aos-us-seo-maps",
            "phoneNumber": "(201) 728-0255",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "Closed",
                "Monday": "11 AM–9 PM",
                "Tuesday": "11 AM–9 PM",
                "Wednesday": "11 AM–9 PM",
                "Thursday": "11 AM–9 PM",
                "Friday": "11 AM–10 PM",
                "Saturday": "11 AM–10 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepW_286NyhHsYUfuiIxidCaOq6HMgmCzTMdhSWb61Qfeep3CAs9XkWqVxbvWYSZZOfbQ48Wm_LUMgGRYcg7KSmKUQT-xwY3zSjJyGlJhWkwlJZ70kQUZ5Ln-pbQ2giE9M0xnSWmu7RsQkIa",
            "cid": "631009763798944273",
            "fid": "0x89c2f9d8b4cd80f3:0x8c1cc09750a0a11",
            "placeId": "ChIJ84DNtNj5wokREQoKdQnMwQg"
        },
        {
            "position": 15,
            "title": "Apple Net Wireless Inc",
            "address": "102-15 Roosevelt Ave, Corona, NY 11368",
            "latitude": 40.7499257,
            "longitude": -73.8634738,
            "rating": 4.6,
            "ratingCount": 64,
            "type": "Cell phone store",
            "types": [
                "Cell phone store"
            ],
            "website": "https://www.facebook.com/apple.net.12979",
            "phoneNumber": "(347) 647-0540",
            "openingHours": {
                "Sunday": "9 AM–8:30 PM",
                "Monday": "9 AM–8:30 PM",
                "Tuesday": "9 AM–8:30 PM",
                "Wednesday": "9 AM–8:30 PM",
                "Thursday": "9 AM–8:30 PM",
                "Friday": "9 AM–8:30 PM",
                "Saturday": "9 AM–8:30 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwergEByRpzhz9SEWnS7LGgVpUh_1M3b3Ty8M4L5ULgyX7LX721oU2vhh_N8iCfKbd_YE2U8dAOWc0AIufPXt7CGrbRG9SCkCj0c0KHphjd8bzW_Bfz2weZ1L4gQcQwcu5niufuzdeVFbdEZ8",
            "cid": "14069957381946955120",
            "fid": "0x89c25fb47f4aad13:0xc34287b16bd55570",
            "placeId": "ChIJE61Kf7RfwokRcFXVa7GHQsM"
        },
        {
            "position": 16,
            "title": "Apple Williamsburg",
            "address": "247 Bedford Ave, Brooklyn, NY 11211",
            "latitude": 40.7155589,
            "longitude": -73.9598644,
            "rating": 4,
            "ratingCount": 2224,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/williamsburg?cid=aos-us-seo-maps",
            "phoneNumber": "(929) 397-2740",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "11 AM–7 PM",
                "Monday": "10 AM–9 PM",
                "Tuesday": "10 AM–9 PM",
                "Wednesday": "10 AM–9 PM",
                "Thursday": "10 AM–9 PM",
                "Friday": "10 AM–9 PM",
                "Saturday": "10 AM–8 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo6rGCHXug0vsIevPcfwt4klTIkfMe966OIRL7HC363MaYe5_mVfE0M1YJrYHFDGf9yiyusOktnv6_ntgCcycHcXxodw2tIpKaZlqwWKxfOK57BHP2QA5PPwpM9oFd2QcpnwJSeeg",
            "cid": "7617071955756226371",
            "fid": "0x89c259609b940c95:0x69b5469637709743",
            "placeId": "ChIJlQyUm2BZwokRQ5dwN5ZGtWk"
        },
        {
            "position": 17,
            "title": "Apple Core Electronics",
            "address": "991 Flushing Ave, Brooklyn, NY 11206",
            "latitude": 40.703188,
            "longitude": -73.932981,
            "rating": 4.7,
            "ratingCount": 7,
            "type": "Electronics manufacturer",
            "types": [
                "Electronics manufacturer"
            ],
            "website": "http://www.applecoreelectronics.com/",
            "phoneNumber": "(718) 628-4068",
            "openingHours": {
                "Sunday": "Closed",
                "Monday": "8 AM–4 PM",
                "Tuesday": "8 AM–4 PM",
                "Wednesday": "8 AM–4 PM",
                "Thursday": "8 AM–4 PM",
                "Friday": "8 AM–3 PM",
                "Saturday": "Closed"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqxvcifkz9QpbZ140bqRNEKBqBd0cl84D5smGH83XhW2_xe05o_9hafMyGuQGTOvuL7uayb04MRerfk5OKtVGuNCvWZknYODWRQgP4eBRLHsubxpntAd5zegZclKLiAwnNEBype",
            "cid": "1660545095757478040",
            "fid": "0x89c25e96ea7bc4b3:0x170b70f776243898",
            "placeId": "ChIJs8R76pZewokRmDgkdvdwCxc"
        },
        {
            "position": 18,
            "title": "Apple Grand Central",
            "address": "45 Grand Central Terminal, New York, NY 10017",
            "latitude": 40.752735,
            "longitude": -73.977002,
            "rating": 4.3,
            "ratingCount": 5047,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/grandcentral?cid=aos-us-seo-maps",
            "phoneNumber": "(212) 284-1800",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "11 AM–7 PM",
                "Monday": "9 AM–8 PM",
                "Tuesday": "9 AM–8 PM",
                "Wednesday": "9 AM–8 PM",
                "Thursday": "9 AM–8 PM",
                "Friday": "9 AM–8 PM",
                "Saturday": "10 AM–7 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepG11n8n20v32THgcX32TsMcpCLDDV77Ebk9O6tzDpahBFo4MOs5JhDK_0Ku7XG-6cvXr6FfhRThqByxt4bfDRfoJSUa1KQ8GncZkbDgyq6O-3AR-6p9dCLRmpZd8T2pXsuPo1A",
            "cid": "1614527670624395635",
            "fid": "0x89c259018a375afb:0x1667f45cbf9b2173",
            "placeId": "ChIJ-1o3igFZwokRcyGbv1z0ZxY"
        },
        {
            "position": 19,
            "title": "Apple Tel Inc",
            "address": "21 W 46th St, New York, NY 10036",
            "latitude": 40.7565515,
            "longitude": -73.980058,
            "rating": 4.2,
            "ratingCount": 5,
            "type": "Cell phone store",
            "types": [
                "Cell phone store"
            ],
            "phoneNumber": "(212) 302-6935",
            "openingHours": {
                "Sunday": "12–5 PM",
                "Monday": "10 AM–7:30 PM",
                "Tuesday": "10 AM–7:30 PM",
                "Wednesday": "10 AM–7:30 PM",
                "Thursday": "10 AM–7:30 PM",
                "Friday": "10 AM–7:30 PM",
                "Saturday": "10 AM–7:30 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqD5xa_pg_VxuY0131ysD-PKagReUvONMQlMqAaEgNE26YndJt00Ty8QDvZYVZ_BRhretV661bvYmoIgo5x_1rTI7y7BzsIlcfsWaOouLgedv-1wk-vgR_ab4LOi3MubhOZxtLo19ZpbEM",
            "cid": "10901362565029401983",
            "fid": "0x89c258fe532e13b3:0x97496b7eb851957f",
            "placeId": "ChIJsxMuU_5YwokRf5VRuH5rSZc"
        },
        {
            "position": 20,
            "title": "Apple Ridge Hill",
            "address": "143 Market Street, Yonkers, NY 10710",
            "latitude": 40.963705999999995,
            "longitude": -73.856657,
            "rating": 3.9,
            "ratingCount": 1510,
            "priceLevel": "$$$",
            "type": "Electronics store",
            "types": [
                "Electronics store",
                "Computer repair service",
                "Mobile phone repair shop"
            ],
            "website": "https://www.apple.com/retail/ridgehill?cid=aos-us-seo-maps",
            "phoneNumber": "(914) 620-0965",
            "description": "Apple retail store selling iPhones, iPads & more in sleekly designed spaces.",
            "openingHours": {
                "Sunday": "10 AM–7 PM",
                "Monday": "10 AM–9 PM",
                "Tuesday": "10 AM–9 PM",
                "Wednesday": "10 AM–9 PM",
                "Thursday": "10 AM–9 PM",
                "Friday": "10 AM–9 PM",
                "Saturday": "10 AM–9 PM"
            },
            "thumbnailUrl": "https://lh3.googleusercontent.com/gps-cs-s/AHVAweowaY5xlqH9APqKvKXe7O1jR1XeFJIgeAE3EsVW6AnrgMC8Oct4pg-C8RGrRxoUU3gZl8A1CHV7CLrlYm4XC8FSCx-dmxk5ERXF_sx8I2udqeJRrO8sjndIHzYfIiwvl_yiWtRw",
            "cid": "285365483834399375",
            "fid": "0x89c2ed252073fb7f:0x3f5d265471b5a8f",
            "placeId": "ChIJf_tzICXtwokRj1obR2XS9QM"
        }
    ],
    "credits": 3
}
