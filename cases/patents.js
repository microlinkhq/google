const request = require('request')
let options = {
  method: 'GET',
  url: 'https://google.serper.dev/patents?q=apple+inc&num=40&apiKey=0789121d6e5a5e54fcebfe1b9011167142894d7a',
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
        "type": "patents",
        "num": 40,
        "engine": "google"
    },
    "organic": [
        {
            "title": "Device, method, and graphical user interface for transitioning between touch …",
            "snippet": "G06F 3/0482 (2013.01) H04N 1/00 (2006.01) (21) Application No: 2016201303 (22) Date of Filing: 2016.02.29 (43) Publication Date: 2016.03.17 (43) Publication Journal Date: 2016.03.17 (44) Accepted Journal Date: 2018.03.22 (62) Divisional of: 2013368443 (71) Applicant(s) Apple Inc. (72) Inventor(s) …",
            "link": "https://patents.google.com/patent/AU2016201303B2/en",
            "priorityDate": "2012-12-29",
            "filingDate": "2016-02-29",
            "grantDate": "2018-03-22",
            "publicationDate": "2018-03-22",
            "inventor": "Kristi E.S. Bauerly",
            "assignee": "Apple Inc.",
            "publicationNumber": "AU2016201303B2",
            "language": "en",
            "pdfUrl": "https://patentimages.storage.googleapis.com/67/7a/d3/d395694707d478/AU2016201303B2.pdf",
            "figures": []
        },
        {
            "title": "Device, method, and graphical user interface for displaying user interface …",
            "snippet": ", an image management application (e.g., Aperture or iPhoto from Apple Inc. of Cupertino, Calif.), a digital content (e.g., videos and music) management application (e.g., iTunes from Apple Inc. of Cupertino, Calif.), a drawing application, a presentation application (e.g., Keynote from Apple Inc. …",
            "link": "https://patents.google.com/patent/US10775999B2/en",
            "priorityDate": "2012-05-09",
            "filingDate": "2018-10-29",
            "grantDate": "2020-09-15",
            "publicationDate": "2020-09-15",
            "inventor": "Nicholas Zambetti",
            "assignee": "Apple Inc.",
            "publicationNumber": "US10775999B2",
            "language": "en",
            "thumbnailUrl": "https://patentimages.storage.googleapis.com/c3/d2/6b/970b9c3459558e/US10775999-20200915-D00000.png",
            "pdfUrl": "https://patentimages.storage.googleapis.com/77/26/74/bbd02b00bb2413/US10775999.pdf",
            "figures": [
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d9/00/bd/5b542dc23a703c/US10775999-20200915-D00000.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2f/75/82/d39d96059112f5/US10775999-20200915-D00000.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/27/bb/60/fcc22b6cb469c0/US10775999-20200915-D00001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c7/6e/b3/f26c5438e5b246/US10775999-20200915-D00001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/dc/8a/43/9e8a393953a766/US10775999-20200915-D00002.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/aa/c9/be/7ddad6e89bd480/US10775999-20200915-D00002.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1d/23/0e/3160e566e58181/US10775999-20200915-D00003.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b2/b1/11/5086acabb25998/US10775999-20200915-D00003.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/76/99/07/033952a91db5cd/US10775999-20200915-D00004.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/76/57/bf/6709cf216ad235/US10775999-20200915-D00004.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/49/25/ac/a97a55ede2f68d/US10775999-20200915-D00005.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9f/2e/ab/bf1b064f7c506c/US10775999-20200915-D00005.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fd/74/c8/ed11f67b6fedb3/US10775999-20200915-D00006.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/56/81/26/3750a4c33a6075/US10775999-20200915-D00006.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/2e/4f/5c/007f9acb124789/US10775999-20200915-D00007.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3c/7b/47/33a3769cb41fd0/US10775999-20200915-D00007.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/78/bc/d3/19dbeb3d1a89d6/US10775999-20200915-D00008.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/df/a4/fb/ad689937d07898/US10775999-20200915-D00008.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/90/06/90/89053003f489ca/US10775999-20200915-D00009.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4d/37/9d/f64b755e24be71/US10775999-20200915-D00009.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a7/78/05/fee4219ebc4e16/US10775999-20200915-D00010.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b1/82/a4/0cd17fcea6b888/US10775999-20200915-D00010.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7e/90/35/50e01a95314b0f/US10775999-20200915-D00011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/6f/80/a2/ddc925596a5807/US10775999-20200915-D00011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9d/fc/7b/ed2faa76ea2405/US10775999-20200915-D00012.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2b/07/63/17ad132760cd69/US10775999-20200915-D00012.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/da/51/86/3a23cccc0f41c5/US10775999-20200915-D00013.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/83/e1/95/9250dc4b3fc3ba/US10775999-20200915-D00013.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f0/00/e4/6e89d9bba8f39b/US10775999-20200915-D00014.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/97/ad/50/84e95ff14f91b7/US10775999-20200915-D00014.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/02/da/00/02cc04082857fd/US10775999-20200915-D00015.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/31/2d/d0/81ca2d73e9cd35/US10775999-20200915-D00015.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/33/9a/36/ac9e6e34bd2c9e/US10775999-20200915-D00016.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/94/8d/c0/92df8a16d74d68/US10775999-20200915-D00016.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6f/8e/0e/5664c581f6fb90/US10775999-20200915-D00017.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5a/8f/a9/1be507012539bd/US10775999-20200915-D00017.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/76/c1/2b/ababdd64372e67/US10775999-20200915-D00018.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/db/f0/9f/07878b14308626/US10775999-20200915-D00018.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f8/89/0b/e785345c3162fc/US10775999-20200915-D00019.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/68/87/5b/b801acf36abe5d/US10775999-20200915-D00019.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d1/86/85/5cf264d75bb526/US10775999-20200915-D00020.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f6/ad/79/07546dd29f53d7/US10775999-20200915-D00020.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/cc/8a/9b/a3cddd29a52e07/US10775999-20200915-D00021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c0/e6/b8/4ba93fc7f34590/US10775999-20200915-D00021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/23/1d/3b/2cdbe569042cab/US10775999-20200915-D00022.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a6/65/e7/b026aaf087d979/US10775999-20200915-D00022.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/2d/fd/fa/9e63ad53a5e53d/US10775999-20200915-D00023.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c3/e3/0f/0b82f5de1e3ddc/US10775999-20200915-D00023.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c8/9f/d7/781e9f7d9a2236/US10775999-20200915-D00024.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/85/98/b5/04c8ad3b7e4165/US10775999-20200915-D00024.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d1/c5/41/624997084cc466/US10775999-20200915-D00025.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/47/63/10/45dda76cac04b7/US10775999-20200915-D00025.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/da/54/ab/9c4af79bfa7f0d/US10775999-20200915-D00026.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a0/96/1a/099c63601cbfe7/US10775999-20200915-D00026.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/82/95/ca/b05518e6bb93c2/US10775999-20200915-D00027.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ef/fe/5e/c2e38caa1d001f/US10775999-20200915-D00027.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ed/96/9d/414c263a482535/US10775999-20200915-D00028.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b9/60/be/116fef1baf26f1/US10775999-20200915-D00028.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a9/ec/7b/32824b45032808/US10775999-20200915-D00029.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/69/54/c8/c23daa772c88e5/US10775999-20200915-D00029.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/08/82/e9/bb75e9b4c8d692/US10775999-20200915-D00030.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f2/c2/8d/789c76ea3501ac/US10775999-20200915-D00030.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/0e/44/0a/592bb76daca6bd/US10775999-20200915-D00031.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/59/28/bd/880865d4f2dc60/US10775999-20200915-D00031.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/82/9d/cc/7e3fa139699195/US10775999-20200915-D00032.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/55/99/f3/24c4bf2322b5e8/US10775999-20200915-D00032.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/2c/5a/3f/b31d75be23fd69/US10775999-20200915-D00033.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2a/be/27/478c30a3448375/US10775999-20200915-D00033.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/59/30/0a/eea891ec337ef9/US10775999-20200915-D00034.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/1b/41/89/3d89304004d3ba/US10775999-20200915-D00034.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/84/aa/02/51cf73d476eeb1/US10775999-20200915-D00035.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b3/49/50/dbd2febe65e2e5/US10775999-20200915-D00035.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/34/8d/5e/a5e26895b4bc2c/US10775999-20200915-D00036.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c0/26/df/4ac1278d49fb57/US10775999-20200915-D00036.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/16/cc/10/5720098043e5f2/US10775999-20200915-D00037.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a6/c3/37/84d6396750f45c/US10775999-20200915-D00037.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3f/02/ef/b58cd5daf03fce/US10775999-20200915-D00038.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ca/e0/f6/e1e66a9bffe684/US10775999-20200915-D00038.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3a/69/14/0b2129f7458645/US10775999-20200915-D00039.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/59/81/0f/89ae3bb5484891/US10775999-20200915-D00039.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/94/99/a6/980e2bf96dfbc9/US10775999-20200915-D00040.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/7a/d4/f8/908abdcdc416ea/US10775999-20200915-D00040.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/de/3f/ca/9fefcd12940f1f/US10775999-20200915-D00041.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/42/1c/71/b12a3eab2aff65/US10775999-20200915-D00041.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e3/6b/f3/797e736bc463cb/US10775999-20200915-D00042.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c2/9c/04/4be88d86b1b9f7/US10775999-20200915-D00042.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/08/68/a6/a82e28d34d4f99/US10775999-20200915-D00043.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/53/f7/e6/5c8c5add61277e/US10775999-20200915-D00043.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/49/26/81/1f905b8e32b5a1/US10775999-20200915-D00044.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/46/b3/41/918a9e37b6b88d/US10775999-20200915-D00044.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1f/4c/94/96e396fe108035/US10775999-20200915-D00045.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4c/17/20/16640561422d73/US10775999-20200915-D00045.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/cf/bf/01/6d5ce3f2536652/US10775999-20200915-D00046.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/aa/1f/f2/d229f771b012f6/US10775999-20200915-D00046.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5f/bb/fc/805d2f28f7d1a0/US10775999-20200915-D00047.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ff/6a/83/c04a48c5828c2d/US10775999-20200915-D00047.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1d/9f/fe/18c4fa1a9060e6/US10775999-20200915-D00048.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/63/8b/f0/358430d9f3f000/US10775999-20200915-D00048.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/96/a1/4c/f8af4e9dda0180/US10775999-20200915-D00049.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ac/28/91/59f7f8211a3abe/US10775999-20200915-D00049.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/2b/47/f3/2d980af4aa89ab/US10775999-20200915-D00050.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5c/53/91/0e192437dcfac8/US10775999-20200915-D00050.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c7/f6/46/9172dea7a49067/US10775999-20200915-D00051.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b1/30/1c/8d671dfd0bd6db/US10775999-20200915-D00051.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5c/e4/08/2f5e9778e69e45/US10775999-20200915-D00052.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d5/48/25/e6ca3cac10904a/US10775999-20200915-D00052.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/10/f3/1c/cdd930238bc29d/US10775999-20200915-D00053.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/12/b6/cf/9e0e5b5ed159bf/US10775999-20200915-D00053.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/46/13/0c/6638e4ed112b3f/US10775999-20200915-D00054.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/1e/30/a6/318406f9e23619/US10775999-20200915-D00054.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/72/72/8f/e3a1522b037020/US10775999-20200915-D00055.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ac/92/91/c8da13d497c95d/US10775999-20200915-D00055.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/87/ec/e4/4c660a05090b45/US10775999-20200915-D00056.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e0/d5/8b/1ba559a7b140a3/US10775999-20200915-D00056.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/75/9c/09/2a93c16b9bec77/US10775999-20200915-D00057.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f0/04/a2/af051002d8a995/US10775999-20200915-D00057.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/60/b3/b8/fac0be92c97f00/US10775999-20200915-D00058.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/85/6f/d1/b0f5b3cfedc392/US10775999-20200915-D00058.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d7/f8/b1/e8e7699bb44759/US10775999-20200915-D00059.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f6/6b/01/80b4e227ab8aae/US10775999-20200915-D00059.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/98/72/3c/e833ec076ca7e3/US10775999-20200915-D00060.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/22/a1/fa/a73d0244aab090/US10775999-20200915-D00060.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/4b/2f/d6/cb4a9804a37a34/US10775999-20200915-D00061.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/1e/b1/1d/22408f4b3a1f8b/US10775999-20200915-D00061.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/db/af/9a/8e8f4e95ad3ba1/US10775999-20200915-D00062.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/97/3b/b3/9ef3d74c290ab1/US10775999-20200915-D00062.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e8/6f/7a/15cdf025189223/US10775999-20200915-D00063.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f4/62/06/4336096dbbb537/US10775999-20200915-D00063.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/23/b0/ff/9b5c7c7383762e/US10775999-20200915-D00064.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/7f/47/f9/c94ac62f93bbc3/US10775999-20200915-D00064.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/cf/22/e2/e800b4c0d3b256/US10775999-20200915-D00065.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9c/d0/77/d5e0c89c2ef67b/US10775999-20200915-D00065.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/91/59/9b/0c837241c67bbd/US10775999-20200915-D00066.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/79/06/66/300a1a576bf519/US10775999-20200915-D00066.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/0a/67/5b/191de7e2a6eb54/US10775999-20200915-D00067.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9e/87/65/5321ca55c78b65/US10775999-20200915-D00067.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/eb/06/2b/e0e11675257ae6/US10775999-20200915-D00068.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a5/ca/02/61e3ad5e46e715/US10775999-20200915-D00068.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/66/48/76/04b2b013dc45d6/US10775999-20200915-D00069.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a0/73/d7/0f38c6e284aa90/US10775999-20200915-D00069.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ab/50/07/21b980a69f8d8b/US10775999-20200915-D00070.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/1a/8e/3c/54cc55c38d86b6/US10775999-20200915-D00070.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/bf/1c/11/afd4f7f86fc649/US10775999-20200915-D00071.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/cb/cf/3e/728e8113f8d136/US10775999-20200915-D00071.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/95/9c/13/aa870bce90284f/US10775999-20200915-D00072.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/6d/09/49/b0cfdcf86cac94/US10775999-20200915-D00072.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f9/23/02/45ccc785ebf3c2/US10775999-20200915-D00073.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0d/e8/d7/aa9b5a86765e61/US10775999-20200915-D00073.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b2/9f/43/5d94115f760619/US10775999-20200915-D00074.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/88/1e/4f/85912bb3c4259d/US10775999-20200915-D00074.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5e/6f/45/4a9d7fa4e8a2a8/US10775999-20200915-D00075.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/74/d6/b0/107e89b5968d4c/US10775999-20200915-D00075.png"
                }
            ]
        },
        {
            "title": "Head-Mounted Display Apparatus for Retaining a Portable Electronic Device with …",
            "snippet": "…  present invention, portable electronic device 104 can be a device that has the combined functionalities of a portable media player and a cellular telephone, such as an Iphone™ sold by Apple Inc. of Cupertino, CA. In yet another embodiment of the present invention, the portable electronic device",
            "link": "https://patents.google.com/patent/US20240430353A1/en",
            "priorityDate": "2008-09-30",
            "filingDate": "2024-09-05",
            "grantDate": "",
            "publicationDate": "2024-12-26",
            "inventor": "Quin C. Hoellwarth",
            "assignee": "Apple Inc.",
            "publicationNumber": "US20240430353A1",
            "language": "en",
            "thumbnailUrl": "https://patentimages.storage.googleapis.com/02/23/b3/cc927afdd84b0e/US20240430353A1-20241226-D00000.png",
            "pdfUrl": "https://patentimages.storage.googleapis.com/49/7c/6d/747ed26aeba9a2/US20240430353A1.pdf",
            "figures": [
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/23/24/12/eaaae1e0d50c11/US20240430353A1-20241226-D00000.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e3/e0/1d/18e38941717f8f/US20240430353A1-20241226-D00000.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d2/79/a6/19f843a88d9707/US20240430353A1-20241226-D00001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3c/a2/65/150df0502d69c6/US20240430353A1-20241226-D00001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7f/2a/2c/e5dcf2d40ee76a/US20240430353A1-20241226-D00002.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/69/13/f1/5a75834f03495d/US20240430353A1-20241226-D00002.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b0/15/53/c599719e37feb9/US20240430353A1-20241226-D00003.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9f/92/c7/06798543496fdc/US20240430353A1-20241226-D00003.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8a/6d/e5/16186589d00650/US20240430353A1-20241226-D00004.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/50/cf/81/ec27335e7d93fe/US20240430353A1-20241226-D00004.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/be/c5/c8/96aeeec8fe1cee/US20240430353A1-20241226-D00005.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/48/d7/89/c5360961830b42/US20240430353A1-20241226-D00005.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1d/c5/75/eb49171b179d32/US20240430353A1-20241226-D00006.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b9/5b/52/6552014eb75b5a/US20240430353A1-20241226-D00006.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/da/50/cb/a9941b1b897e4f/US20240430353A1-20241226-D00007.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4f/6e/84/6151a82255bdf3/US20240430353A1-20241226-D00007.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/bc/b9/d4/10878a3543a7c8/US20240430353A1-20241226-D00008.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bf/d7/23/37f8c20f6b5dc4/US20240430353A1-20241226-D00008.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f3/fc/79/a851375701d989/US20240430353A1-20241226-D00009.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/75/a2/81/df10e098e33bda/US20240430353A1-20241226-D00009.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b3/58/ee/a8a005c1ddca53/US20240430353A1-20241226-D00010.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3d/0e/0d/c920af4b2baec4/US20240430353A1-20241226-D00010.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/55/21/a9/57f2dc6f804e3f/US20240430353A1-20241226-D00011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a3/9e/f6/1ce29e5bc27112/US20240430353A1-20241226-D00011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/23/09/94/4757657b2d67bf/US20240430353A1-20241226-D00012.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/49/62/3e/5f07adb9f4c6b5/US20240430353A1-20241226-D00012.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5d/6b/c3/800c1f660147eb/US20240430353A1-20241226-D00013.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/36/9a/06/386c5885b4044f/US20240430353A1-20241226-D00013.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/90/72/ba/7d66eb3d91f9e8/US20240430353A1-20241226-D00014.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/30/ab/ed/0e7b29576bab55/US20240430353A1-20241226-D00014.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f8/11/79/5778715d21a83c/US20240430353A1-20241226-D00015.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4f/03/fa/4d29168fccc521/US20240430353A1-20241226-D00015.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ce/4e/ba/cfcc07a71824c7/US20240430353A1-20241226-D00016.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9b/41/d4/b6c6e61b039ddc/US20240430353A1-20241226-D00016.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fa/1d/d7/2747ef57c1a88e/US20240430353A1-20241226-D00017.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e0/b4/1a/46adf415dfec82/US20240430353A1-20241226-D00017.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8d/95/52/c97e1d63d50f49/US20240430353A1-20241226-D00018.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/fc/e4/0e/849a910b295929/US20240430353A1-20241226-D00018.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ad/92/1b/7b4971d5289c88/US20240430353A1-20241226-D00019.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/dc/7b/3b/26b3353062a257/US20240430353A1-20241226-D00019.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/4f/01/0a/3374e16c4dd1aa/US20240430353A1-20241226-D00020.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d6/3c/de/64c8be3be4f130/US20240430353A1-20241226-D00020.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/81/d6/c9/fe71455a53568f/US20240430353A1-20241226-D00021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/cd/56/2e/18744d6e71898c/US20240430353A1-20241226-D00021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3b/08/66/bf2f9b6b3bfdc0/US20240430353A1-20241226-D00022.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/03/43/6a/cd999886280f82/US20240430353A1-20241226-D00022.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a7/39/6f/8633c733f039c2/US20240430353A1-20241226-D00023.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0c/bf/4d/8e17f7ce35d6b6/US20240430353A1-20241226-D00023.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e0/62/90/5e785b99a377f1/US20240430353A1-20241226-D00024.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e5/55/f1/a13d813918c2ea/US20240430353A1-20241226-D00024.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e9/76/7a/fc2ea8afcbd582/US20240430353A1-20241226-D00025.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c7/f9/a2/5e35c594eb5029/US20240430353A1-20241226-D00025.png"
                }
            ]
        },
        {
            "title": "Devices, methods, and graphical user interfaces for manipulating user interface …",
            "snippet": "[00041 A user will, in some circumstances, need to perform such manipulations on user interface objects in a file management program (e.g., Finder from Apple Inc. of Cupertino, California), a messaging application (e.g., Messages from Apple Inc. of Cupertino, Califomia), an image management …",
            "link": "https://patents.google.com/patent/AU2021200655B9/en",
            "priorityDate": "2015-03-08",
            "filingDate": "2021-02-02",
            "grantDate": "2022-12-22",
            "publicationDate": "2022-12-22",
            "inventor": "Marcos Alonso Ruiz",
            "assignee": "Apple Inc.",
            "publicationNumber": "AU2021200655B9",
            "language": "en",
            "pdfUrl": "https://patentimages.storage.googleapis.com/14/5b/7f/f01007da325b41/AU2021200655B9.pdf",
            "figures": []
        },
        {
            "title": "Virtual assistant for media playback",
            "snippet": ".) A portable multifunctional device can be, for example, a mobile telephone that also contains other functions, such as PDA and/or music player functions. Specific examples of portable multifunction devices can include the iPhone®, iPod Touch®, and iPad® devices from Apple Inc. of Cupertino, Calif.",
            "link": "https://patents.google.com/patent/US11947873B2/en",
            "priorityDate": "2015-06-29",
            "filingDate": "2021-04-09",
            "grantDate": "2024-04-02",
            "publicationDate": "2024-04-02",
            "inventor": "Ryan M. Orr",
            "assignee": "Apple Inc.",
            "publicationNumber": "US11947873B2",
            "language": "en",
            "thumbnailUrl": "https://patentimages.storage.googleapis.com/ee/b0/c9/120430efdea576/US11947873-20240402-D00000.png",
            "pdfUrl": "https://patentimages.storage.googleapis.com/ba/49/f4/9fb73a9220aa69/US11947873.pdf",
            "figures": [
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/bc/79/7a/39ce80c400a8ea/US11947873-20240402-D00000.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/59/b8/af/95a7e1d5e94d43/US11947873-20240402-D00000.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/21/d6/46/8504c7b3dea48d/US11947873-20240402-D00001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/64/c3/02/a4fb7f40fa0f9b/US11947873-20240402-D00001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/83/7f/6f/9bcdbc23bbe912/US11947873-20240402-D00002.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e0/70/fb/94a463f5ce25d6/US11947873-20240402-D00002.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6b/2a/1b/d80546cc9f2011/US11947873-20240402-D00003.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/63/26/1d/8b847012fd510b/US11947873-20240402-D00003.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8a/1c/4a/ef07149b6450bc/US11947873-20240402-D00004.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/fb/9d/0a/2b8fca25c9f84a/US11947873-20240402-D00004.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e1/e3/07/d35ce067c8da16/US11947873-20240402-D00005.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/98/9d/e6/48003ba537d235/US11947873-20240402-D00005.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/aa/c5/00/72d20296fac4e1/US11947873-20240402-D00006.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4a/10/c8/b2399c23a277b4/US11947873-20240402-D00006.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a3/2b/85/e294a4f483c9ec/US11947873-20240402-D00007.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/af/35/26/111990f86060a4/US11947873-20240402-D00007.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/78/5f/6d/b10ec3f481e01f/US11947873-20240402-D00008.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/97/de/9a/1d463aab329921/US11947873-20240402-D00008.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/34/f1/74/0be4fe4aaec5c4/US11947873-20240402-D00009.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/70/f9/5d/8f3a2b45adb3ec/US11947873-20240402-D00009.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b8/84/0f/a8d8a6c7dec2a8/US11947873-20240402-D00010.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f7/fc/ce/84429ec9849ec0/US11947873-20240402-D00010.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/0c/56/14/25b6b572c85820/US11947873-20240402-D00011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8a/a8/0d/b45d8e4924f9b8/US11947873-20240402-D00011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/46/4d/17/0caa1a85339295/US11947873-20240402-D00012.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c5/ed/79/3becfd3eb90870/US11947873-20240402-D00012.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/41/6e/6d/ad39c56cb56f25/US11947873-20240402-D00013.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8f/79/3e/24dc939488cf47/US11947873-20240402-D00013.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1d/6f/0f/8994a42d5351cf/US11947873-20240402-D00014.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5e/c1/23/a437298882c548/US11947873-20240402-D00014.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ea/7a/67/279bacbeded1e5/US11947873-20240402-D00015.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ac/b7/d5/1fcd81421ed482/US11947873-20240402-D00015.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/42/6f/c3/51bc0d37be1775/US11947873-20240402-D00016.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d3/fd/95/7393f6ccaa1af8/US11947873-20240402-D00016.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ad/75/27/52e3fdc5f93ea7/US11947873-20240402-D00017.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e5/d2/f8/aefab1e13f0540/US11947873-20240402-D00017.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/83/70/c0/863a94be5691d2/US11947873-20240402-D00018.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ce/4d/46/4d920e9e338265/US11947873-20240402-D00018.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/70/2a/1c/0bce1b159d4dad/US11947873-20240402-D00019.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8f/9c/12/524fffea848324/US11947873-20240402-D00019.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/38/62/42/21dd505ca4dc2a/US11947873-20240402-D00020.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a8/00/f2/dce5fb54d9af84/US11947873-20240402-D00020.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6d/b1/6b/58569d75a8980d/US11947873-20240402-D00021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8e/82/13/9535021ca97ac2/US11947873-20240402-D00021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/51/68/40/b3d5e88ad8a698/US11947873-20240402-D00022.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ec/e0/86/e8d4101e3effde/US11947873-20240402-D00022.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/10/b5/b2/1581f8bba6bdce/US11947873-20240402-D00023.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d3/b3/23/2be3c938e0176d/US11947873-20240402-D00023.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ae/7d/81/d3215d14827c39/US11947873-20240402-D00024.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8a/27/7b/77f08c5d57a0f4/US11947873-20240402-D00024.png"
                }
            ]
        },
        {
            "title": "Methods and interfaces for initiating communications",
            "snippet": "c/o Apple Inc., 17/898,342 29 August 2022 (29.08.2022) US One Apple Park Way, Cupertino, California 95014 (US). (71) Applicant: APPLE INC. [US/US]; One Apple Park Way, STACK, Caelan G.; c/o Apple Inc., One Apple Park Way, Cupertino, California 95014 (US). Cupertino, California 95014 (US). VAN OS, …",
            "link": "https://patents.google.com/patent/AU2022235630B2/en",
            "priorityDate": "2021-08-31",
            "filingDate": "2022-08-30",
            "grantDate": "2023-10-12",
            "publicationDate": "2023-10-12",
            "inventor": "Gregory M. Apodaca",
            "assignee": "Apple Inc.",
            "publicationNumber": "AU2022235630B2",
            "language": "en",
            "pdfUrl": "https://patentimages.storage.googleapis.com/07/40/f8/b95a0986acc4d4/AU2022235630B2.pdf",
            "figures": []
        },
        {
            "title": "Method, apparatus, medium, and device for deleting content",
            "snippet": "In some cases, the user will need to perform such manipulations on user interface objects in: a file management program (e.g., Finder from Apple Inc. (Cupertino, California)); messaging applications (e.g., Messages from Apple Inc. (Cupertino, California)); image management applications (e.g., …",
            "link": "https://patents.google.com/patent/CN108334227B/en",
            "priorityDate": "2015-08-10",
            "filingDate": "2016-08-09",
            "grantDate": "2020-03-03",
            "publicationDate": "2020-03-03",
            "inventor": "I·A·查德里",
            "assignee": "苹果公司",
            "publicationNumber": "CN108334227B",
            "language": "en",
            "thumbnailUrl": "https://patentimages.storage.googleapis.com/6e/c8/43/6babb16cdc79fa/HSA0000158230510000011.png",
            "pdfUrl": "https://patentimages.storage.googleapis.com/23/24/69/2664fb2940a918/CN108334227B.pdf",
            "figures": [
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7e/37/94/a799aeeb5d6009/HSA0000158230510000011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/59/51/af/16e86800cc8ea6/HSA0000158230510000011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e2/3d/67/869909d8886f1c/HSA0000158230510000021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3c/60/f4/8a1376a31b48e5/HSA0000158230510000021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5f/a2/48/1779b8932f474c/HSA0000158230510000031.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f6/58/ad/1a5c37c2126756/HSA0000158230510000031.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a2/77/db/e39eba8f9dd71e/HSA0000158230510000041.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b1/be/28/42bec9d3c555b5/HSA0000158230510000041.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/eb/e0/d9/627e51774d5933/HSA0000158230510000051.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/54/d3/5b/084480b00510c8/HSA0000158230510000051.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5b/6b/ea/0549e28fa5c9aa/HSA0000158230510000061.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/75/d6/da/043e368c893ae7/HSA0000158230510000061.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/49/3b/f5/fd3e4321e7d4a5/HSA0000158230510000071.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/7e/99/dc/17c75c6d87f167/HSA0000158230510000071.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6f/ce/75/1f50779ef42c14/HSA0000158230510000091.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/53/87/2d/29efdd1b2281bf/HSA0000158230510000091.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/0c/d0/a5/b4699bd5d53c44/HSA0000158230510000141.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/73/71/d4/e9b245bb08630b/HSA0000158230510000141.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f5/4b/4e/7bcd054d3dd441/HSA0000158230510000101.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0a/cf/fd/06713584cd6eb9/HSA0000158230510000101.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/82/08/f7/8cada0c27fbd55/HSA0000158230510000111.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2a/fc/dd/2c5ae91507b410/HSA0000158230510000111.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c4/e5/15/63028099bad505/HSA0000158230510000121.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/58/02/60/6509aa19706daa/HSA0000158230510000121.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9f/7f/0a/d76648b9f21a5e/HSA0000158230510000131.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/65/31/65/5315a09eb9a0c8/HSA0000158230510000131.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/79/7f/52/b3bd903d1cd9ae/HSA0000158230510000151.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/13/47/f4/fba460314b3d2c/HSA0000158230510000151.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b0/40/4e/1a225d300d74e6/HSA0000158230510000161.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b1/72/b0/edfdfab4937b94/HSA0000158230510000161.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/93/fc/64/6a07279f18f1e4/HSA0000158230510000171.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/14/d5/be/836d4b6042c54b/HSA0000158230510000171.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ca/1e/68/bc588ded4353f5/HSA0000158230510000181.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ee/8b/f3/1005145953af45/HSA0000158230510000181.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/2c/c4/ec/3045d5a3cb9c21/HSA0000158230510000191.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b2/08/a8/0a059b14d2df26/HSA0000158230510000191.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1e/18/8b/0b64cd21965896/HSA0000158230510000241.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bb/e7/05/aecf488726c8d2/HSA0000158230510000241.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/55/87/07/44c7c152b3140f/HSA0000158230510000201.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4b/a7/91/df3f391c137150/HSA0000158230510000201.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d1/d5/85/2048c4f9d3dd45/HSA0000158230510000211.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/09/22/02/c4882bb43ba36f/HSA0000158230510000211.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/06/7b/78/f524b50dfbfe67/HSA0000158230510000221.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/fa/39/82/87a53f8c798464/HSA0000158230510000221.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6d/43/56/1b369d49cf7804/HSA0000158230510000231.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/29/98/a2/4ecf9f44bed2e1/HSA0000158230510000231.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/27/d0/b0/58c35e326b28d6/HSA0000158230510000251.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f9/40/a0/e1cecae59b6559/HSA0000158230510000251.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/eb/df/cf/4dbaa675d02d79/HSA0000158230510000301.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ec/3d/8d/a09c9fda9c85dd/HSA0000158230510000301.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9b/f8/16/6355af5868b7dc/HSA0000158230510000261.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b8/98/fd/d58fdcbd580964/HSA0000158230510000261.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/77/06/c3/b3ca341dda298e/HSA0000158230510000271.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/56/34/93/4a2eacfe1561f5/HSA0000158230510000271.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/41/3d/6f/8133d37ef85330/HSA0000158230510000281.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/67/67/65/df35ec70595742/HSA0000158230510000281.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1b/79/41/8919254e14a459/HSA0000158230510000291.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/22/16/45/4bf6c78a6dc3d1/HSA0000158230510000291.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/33/d3/f8/a5efefafdadf5c/HSA0000158230510000311.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/65/3d/84/d79d517e908fda/HSA0000158230510000311.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5e/5e/d8/a1a11b3d04df2f/HSA0000158230510000321.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/25/75/2e/49d4f7edd9490a/HSA0000158230510000321.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/77/0c/ec/0bd4edc47a2d0f/HSA0000158230510000331.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2b/32/73/1e1b7ef98f28fe/HSA0000158230510000331.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5e/d1/91/023fa054cf17bf/HSA0000158230510000341.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/52/1e/49/1e766810386384/HSA0000158230510000341.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/07/cc/8a/f4bf15906c44e2/HSA0000158230510000351.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b2/be/33/0a83a6ff888d62/HSA0000158230510000351.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d7/d0/0c/431252a5c9f6d1/HSA0000158230510000361.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2a/6b/83/f78d1a2e99e8fa/HSA0000158230510000361.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/db/e9/56/6392615974b369/HSA0000158230510000371.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a6/b9/3e/27f92ebe7f9ebc/HSA0000158230510000371.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9b/10/48/cb386d3e68e7a5/HSA0000158230510000421.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/29/ff/20/dbfa5058c83d74/HSA0000158230510000421.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/bc/6c/90/9ca2f88fe2f881/HSA0000158230510000401.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5d/39/b3/6503c953ab0fda/HSA0000158230510000401.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/aa/17/0e/bb60208039c08c/HSA0000158230510000411.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b1/e6/5d/74e828bfeaddc9/HSA0000158230510000411.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/52/89/c9/0cc09ec2e212f5/HSA0000158230510000441.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/be/b6/d3/88e035b160bf7d/HSA0000158230510000441.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b2/e9/8d/6708984dfe0110/HSA0000158230510000451.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d8/ff/f0/7395fc4f99cd46/HSA0000158230510000451.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/93/8e/2e/7f02fc115a600b/HSA0000158230510000461.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/94/62/ab/01a8a12ca66014/HSA0000158230510000461.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9f/f2/6a/7b03fa4cf6b064/HSA0000158230510000481.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/58/c6/52/c412e781753dbe/HSA0000158230510000481.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/be/3a/bf/bb07c8502e515a/HSA0000158230510000491.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/36/61/84/e553344b3129f5/HSA0000158230510000491.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d8/ef/35/b49692815116e6/HSA0000158230510000541.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bd/bd/5a/6da7d20dc896e3/HSA0000158230510000541.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/93/ab/9b/5ffeca6c88fd9f/HSA0000158230510000501.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/15/91/6f/54792dc5232560/HSA0000158230510000501.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/76/d0/cc/5eaa1de034d2ea/HSA0000158230510000511.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9d/e7/04/b8272277b4f06f/HSA0000158230510000511.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6f/56/5a/94daa3a41d4dc0/HSA0000158230510000521.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/92/69/be/f5dc86a716a459/HSA0000158230510000521.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/14/d6/ff/9b3f432173dca2/HSA0000158230510000531.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/45/fe/90/3dca9127e63ebf/HSA0000158230510000531.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6e/c2/de/a2abffb02a2f2c/HSA0000158230510000561.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/76/e1/be/67a91abc466105/HSA0000158230510000561.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/33/a3/58/1d1ea2e6448191/HSA0000158230510000571.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a2/f2/54/45cfe48a6ac09f/HSA0000158230510000571.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c0/53/ff/94af9e78d183e8/HSA0000158230510000581.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d2/69/32/da51dce40d4665/HSA0000158230510000581.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ee/3d/60/9350f03b2b930d/HSA0000158230510000591.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/01/21/37/f679e79324c296/HSA0000158230510000591.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/0d/d5/6b/32ab013e233fa2/HSA0000158230510000601.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/59/31/d5/66cb4d9925fec6/HSA0000158230510000601.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/23/30/aa/8f1716ed4a963c/HSA0000158230510000651.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/08/47/f5/98d76e147f156d/HSA0000158230510000651.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/88/7d/38/878ab2c44304a0/HSA0000158230510000611.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2a/b5/af/656cd0f6458fd3/HSA0000158230510000611.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/38/ad/66/8497ef6154ce14/HSA0000158230510000701.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/89/ac/43/aedd22b85a59c8/HSA0000158230510000701.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ea/9b/e5/ecc13f86dc395b/HSA0000158230510000621.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4d/88/1a/e332e4eba218fe/HSA0000158230510000621.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1f/ef/27/ff7ea3147de8fb/HSA0000158230510000631.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/40/3d/11/da6edf643da015/HSA0000158230510000631.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/45/f7/f0/e3d3a04b4e1264/HSA0000158230510000661.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/79/28/cc/1109f3fe455468/HSA0000158230510000661.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/46/7f/0f/75a32be38812d8/HSA0000158230510000671.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/90/08/6c/dbf38cf7110752/HSA0000158230510000671.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7b/a1/51/b8d1c8a01692d5/HSA0000158230510000691.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8d/ea/cb/710b76dba7804b/HSA0000158230510000691.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/02/4d/60/bb0203d141d610/HSA0000158230510000711.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d7/10/4b/534b12289f1a55/HSA0000158230510000711.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e0/d4/bd/f159be1014e866/HSA0000158230510000801.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/12/7d/01/8575536b2002fc/HSA0000158230510000801.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f0/5d/21/12f6a101b69191/HSA0000158230510000731.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/63/f5/7f/c3380471d90c6e/HSA0000158230510000731.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/52/42/99/e1a287b274ad59/HSA0000158230510000741.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/fb/cd/2b/230eb7fd50c2a9/HSA0000158230510000741.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/09/f4/6a/ef36d8ae3a12e9/HSA0000158230510000761.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b6/f6/ef/658d4c08bece32/HSA0000158230510000761.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d8/ea/d8/2d6cf7d5738116/HSA0000158230510000771.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/08/44/23/ee77a99fc358d4/HSA0000158230510000771.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/36/aa/fc/c7e6f21117d61a/HSA0000158230510000781.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/26/d7/a7/9c6fa4216c6525/HSA0000158230510000781.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d6/02/3c/b869ed970a3c0d/HSA0000158230510000811.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/cb/99/47/d0b416525c218f/HSA0000158230510000811.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c5/3a/29/493999e68c8209/HSA0000158230510000821.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/44/16/61/13de5457fd4203/HSA0000158230510000821.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b9/34/ae/262768c8a8126b/HSA0000158230510000871.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e2/42/f9/8887e5065a7407/HSA0000158230510000871.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f8/9e/01/25b012c3ab28cb/HSA0000158230510000831.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2f/69/c0/5e50c5f46156d8/HSA0000158230510000831.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/29/3f/4f/e9133f684e4fe4/HSA0000158230510000841.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/08/65/46/b0a76260bd0093/HSA0000158230510000841.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/22/9d/35/272375bc6b36d8/HSA0000158230510000851.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bc/90/e3/878e5874ac7b8e/HSA0000158230510000851.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/95/70/fe/b4aaa98d5f3091/HSA0000158230510000861.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e2/c9/50/c2a976ef026778/HSA0000158230510000861.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/0d/13/cd/e11520b10979a1/HSA0000158230510000881.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/57/2e/43/06a17e67c07e26/HSA0000158230510000881.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ab/03/e3/84bdb98bd7b20e/HSA0000158230510000901.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/95/d0/3e/2f44389f4b098a/HSA0000158230510000901.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/aa/21/d2/03aa41f2342562/HSA0000158230510000911.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/82/34/82/299505b87b0fee/HSA0000158230510000911.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/48/52/31/42aa043d35697b/HSA0000158230510000921.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f9/ef/9e/8b7f3099687b55/HSA0000158230510000921.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/74/cb/fd/ae5d1765645481/HSA0000158230510000971.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4c/dd/ae/1cf10f37c8e253/HSA0000158230510000971.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f8/7d/42/5f8d6a6e07c722/HSA0000158230510001071.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3e/27/67/0e585c8f646236/HSA0000158230510001071.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7e/1a/b6/541149e2ad6395/HSA0000158230510001021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/db/51/57/374041071720ed/HSA0000158230510001021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6d/be/ef/095e543f5b577a/HSA0000158230510001031.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/dd/f5/da/53e7f4ecbba417/HSA0000158230510001031.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/22/be/f6/9d2d794f052e3a/HSA0000158230510001041.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2c/8a/64/c878d0f062b2b3/HSA0000158230510001041.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/73/9c/5b/39d4451fd71dc8/HSA0000158230510001051.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8a/c2/d1/6ef3cad59484e4/HSA0000158230510001051.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/dc/96/1a/a60f8e22ca46eb/HSA0000158230510001061.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a1/20/12/6e2e57e4cb48ca/HSA0000158230510001061.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/75/f6/40/f5276b2674c882/HSA0000158230510001081.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9d/62/70/85aa95cd04918d/HSA0000158230510001081.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/51/4e/e3/cd12031e1afe5d/HSA0000158230510000941.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b5/83/55/b6291d20bebad6/HSA0000158230510000941.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3e/ce/2c/cb5a49a0a65c4a/HSA0000158230510000951.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/25/0b/54/7d910b334704e9/HSA0000158230510000951.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/82/e6/65/b760f4237d2822/HSA0000158230510000961.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/fd/a1/79/4c5b256a65d71d/HSA0000158230510000961.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/db/c9/ab/7428520259b006/HSA0000158230510000981.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/af/2c/4a/3fbc41e763454e/HSA0000158230510000981.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/95/90/4f/627ad91361a2e9/HSA0000158230510001001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c7/1f/8f/18cda7c2525b49/HSA0000158230510001001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/55/82/80/9d64c934575c14/HSA0000158230510001011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/47/88/8e/289f9c0c07a2e3/HSA0000158230510001011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/19/81/7c/1f8402f3cfd536/HSA0000158230510001141.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/df/09/66/c211e95d15cb05/HSA0000158230510001141.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/01/4e/f0/8b129fca52b5f9/HSA0000158230510001101.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/79/ba/3e/61928bfa7b8123/HSA0000158230510001101.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/74/fb/96/bd1711ffd3f5c9/HSA0000158230510001111.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5b/25/2f/7401342a20d5db/HSA0000158230510001111.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/74/ab/63/9700afe711be07/HSA0000158230510001121.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/37/8d/ae/997b382c32aefc/HSA0000158230510001121.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/4d/49/12/4f51aa841a4995/HSA0000158230510001131.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/92/fa/a9/1d4a6eca9b5c42/HSA0000158230510001131.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3b/14/9d/d63d4bfbd0fc8b/HSA0000158230510001151.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4c/16/0a/2d8ccb876bd49e/HSA0000158230510001151.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/57/6a/80/17f875f6f6ed85/HSA0000158230510001161.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/df/f1/b3/e4db7bc8206ccb/HSA0000158230510001161.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9b/ac/27/81e8fd90df9772/HSA0000158230510001211.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/79/db/8e/27840606593300/HSA0000158230510001211.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ba/08/e9/2c81efd938a523/HSA0000158230510001171.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/82/63/1b/7c9853e56614b4/HSA0000158230510001171.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d4/08/c3/530e66b7fb3251/HSA0000158230510001181.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3c/59/ab/0c8f37d56cfd02/HSA0000158230510001181.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/4e/eb/f4/d1d335661b2525/HSA0000158230510001191.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2a/46/1e/1afc72d4674ad9/HSA0000158230510001191.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/93/c2/20/77e0c57a2d4a48/HSA0000158230510001201.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/23/85/c0/d5bd931f0fbcb5/HSA0000158230510001201.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8e/57/d4/ec0b8639d1fcbf/HSA0000158230510001261.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/31/2e/21/51a91d3a05eb69/HSA0000158230510001261.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d3/36/ad/f3c40f67c40fa6/HSA0000158230510001221.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8e/f3/a3/ce5cdfd79b65f8/HSA0000158230510001221.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fe/ec/5b/9c652bfb6a27ef/HSA0000158230510001361.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f7/70/16/286e28346b1c55/HSA0000158230510001361.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d5/15/a4/73b6201cfb0f86/HSA0000158230510001311.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d4/70/d7/3cbc0578e630f8/HSA0000158230510001311.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/50/52/eb/f1c6c04d26f7ad/HSA0000158230510001331.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/49/35/dc/9293bb1ebf8c51/HSA0000158230510001331.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3c/fb/1e/be3b57e3114e31/HSA0000158230510001351.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a4/96/3c/53360c8065f6c5/HSA0000158230510001351.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7e/f0/44/41aefc7cc29c5a/HSA0000158230510001231.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/54/65/cf/2e614189b9651c/HSA0000158230510001231.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/07/e1/c4/3d10e6a3a552a1/HSA0000158230510001241.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/37/c0/e2/60d0b9dd41c789/HSA0000158230510001241.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/73/5a/50/b159211f85ca53/HSA0000158230510001251.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/21/ef/5d/e1b5ad226ab961/HSA0000158230510001251.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c2/ca/3e/6a041fba64ec8a/HSA0000158230510001271.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ff/8f/e9/db87057c038a5a/HSA0000158230510001271.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e0/16/07/617c1e43800ee7/HSA0000158230510001281.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8d/02/d8/ca7babc8c48241/HSA0000158230510001281.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f2/50/3f/6505a1b7db49ae/HSA0000158230510001291.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/76/a8/68/782f59664faf3b/HSA0000158230510001291.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/78/a8/d8/d609c5acff06b3/HSA0000158230510001301.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0a/ae/fd/621952fa953ba8/HSA0000158230510001301.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/77/ce/1c/b731bac89add40/HSA0000158230510001411.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/55/6d/b0/9cba51cf57bd88/HSA0000158230510001411.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/cc/50/2a/0885a3515078e5/HSA0000158230510001371.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ad/31/47/67a5229f1e9248/HSA0000158230510001371.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8c/dc/ee/9581bb42e4725c/HSA0000158230510001381.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e1/01/4d/850b42cd6af5a5/HSA0000158230510001381.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ea/b9/bc/3423a6ae8ee143/HSA0000158230510001391.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/53/e0/28/44f1bc5a808ee9/HSA0000158230510001391.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a4/89/d2/c2ad00d3e8abc4/HSA0000158230510001401.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/67/47/de/70056d0a6dd89c/HSA0000158230510001401.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/cd/4a/9b/ce6e876adcd4c7/HSA0000158230510001421.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a3/b4/36/0167597fe86d18/HSA0000158230510001421.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/30/0b/75/3ef33aa70c345e/HSA0000158230510001431.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/29/73/e2/bf6fedffc70a37/HSA0000158230510001431.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/79/cf/82/6537d940407d1e/HSA0000158230510001481.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/92/ec/0e/c34d3d91509775/HSA0000158230510001481.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c9/1a/23/7b676e3106a8e4/HSA0000158230510001441.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/26/17/97/826ca63d6256b4/HSA0000158230510001441.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d5/98/70/0ecf0a28cc5797/HSA0000158230510001531.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/6c/e9/7f/a0cef7e291d2b5/HSA0000158230510001531.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1b/0d/9b/cbe3ba0abd827c/HSA0000158230510001541.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/81/93/25/d71f3e370c38c4/HSA0000158230510001541.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/46/91/cc/87b3514a6eecdc/HSA0000158230510001551.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a7/4e/e6/de99a36a0eb9cd/HSA0000158230510001551.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/88/a2/6e/c1cdd403a0328e/HSA0000158230510001561.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/07/8a/ee/a6656d8db6bd36/HSA0000158230510001561.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/50/9f/db/34db01246a4f02/HSA0000158230510001571.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9d/26/bb/321e7c8289b861/HSA0000158230510001571.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6e/97/a4/721a84eb0cf432/HSA0000158230510001451.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/98/76/f4/c483c74a98a3ce/HSA0000158230510001451.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1f/ca/c7/57ade071dea8db/HSA0000158230510001461.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5d/7e/db/99c36e1a5218f4/HSA0000158230510001461.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e0/28/8b/86f760465022ee/HSA0000158230510001471.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d7/90/aa/c20c03fefc2290/HSA0000158230510001471.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6f/e7/ab/3348389089f1d9/HSA0000158230510001491.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9f/fa/fc/0a3785cc8ec4c5/HSA0000158230510001491.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f0/83/af/883bb95e4eddd7/HSA0000158230510001501.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d1/af/67/277c376a182579/HSA0000158230510001501.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/61/7a/08/fe2f51aa6c9a67/HSA0000158230510001511.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b2/9b/8a/ab9c9028fc6142/HSA0000158230510001511.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/32/0e/d2/51bdfaa23b1f4d/HSA0000158230510001521.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a8/76/01/8b0777fd04fb03/HSA0000158230510001521.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c1/1c/92/679de62c87cc4b/HSA0000158230510001621.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/47/d9/63/78a14e9d987c25/HSA0000158230510001621.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/86/b9/b0/54b6702695c642/HSA0000158230510001581.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/12/3e/50/597a2b4a7e0475/HSA0000158230510001581.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b9/ad/d9/67192294d3b802/HSA0000158230510001611.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/85/3f/7e/82a06a436f2040/HSA0000158230510001611.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8e/5b/07/0fa38173aa8fa6/HSA0000158230510001631.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d7/ec/5b/29f593e4106308/HSA0000158230510001631.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8d/bf/06/20a4405d244f96/HSA0000158230510001641.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ba/25/e3/302b3bca1a600c/HSA0000158230510001641.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/38/03/22/0a0de20f46bfc6/HSA0000158230510001661.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/73/8e/6a/84a81142799568/HSA0000158230510001661.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/11/e0/33/b9129b36619e09/HSA0000158230510001671.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/78/2d/9f/171957a03afdf4/HSA0000158230510001671.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8f/ba/5e/e1915f463edd6d/HSA0000158230510001681.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/35/97/df/e760e11f08f7a9/HSA0000158230510001681.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/92/64/76/7243c0e3958f05/HSA0000158230510001691.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/45/ba/9b/be98356c45c389/HSA0000158230510001691.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c3/ed/e0/3d0a951e5db4b5/HSA0000158230510001701.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/01/9c/5c/2bc7aaf495aa4a/HSA0000158230510001701.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/73/5e/76/beaa48a15c5987/HSA0000158230510001711.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/85/48/92/d3c337aa0296f0/HSA0000158230510001711.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a3/e4/34/d31cafea9f095d/HSA0000158230510001751.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c2/1f/d4/7c7d943cdbd11f/HSA0000158230510001751.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d4/67/6e/2185c35e442449/HSA0000158230510001761.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f2/de/7c/5ef8d3e69fd858/HSA0000158230510001761.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ad/ba/d5/41d814fcf1448e/HSA0000158230510001771.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b6/0c/6b/587990fd8609dc/HSA0000158230510001771.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b4/19/5a/198c29da70f30f/HSA0000158230510001781.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8b/07/dc/b9c56ddba6eb7e/HSA0000158230510001781.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3c/d2/47/f010816c52e094/HSA0000158230510001791.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4f/a3/63/174a7c27f7945f/HSA0000158230510001791.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/44/a8/dd/e212546d39df84/HSA0000158230510001801.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a1/d3/f6/07940ba01f346c/HSA0000158230510001801.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/38/0c/46/a3bb4c3a058e73/HSA0000158230510001831.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/61/f4/bd/1ea3c09e18603e/HSA0000158230510001831.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ae/cc/31/7151b8e67c23e9/HSA0000158230510001841.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d3/ae/35/2ed4c7dee4012c/HSA0000158230510001841.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1d/b7/16/ecaf020d930331/HSA0000158230510001851.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/51/0d/71/83243ce5a4294c/HSA0000158230510001851.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fc/06/9a/83aa4090fc4bc3/HSA0000158230510001861.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9a/8b/7e/12e4f3e12532d7/HSA0000158230510001861.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/19/da/57/ecc3dbd142f52a/HSA0000158230510001871.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f4/ba/18/3e3d971f326e4f/HSA0000158230510001871.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3f/87/02/3e82a7a6afed5d/HSA0000158230510001881.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/73/ac/0a/9553cc261c0cfa/HSA0000158230510001881.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fa/cd/0d/7fa49debda72b9/HSA0000158230510001891.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e8/ed/e8/0508653edd0ab7/HSA0000158230510001891.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/04/21/47/0674a44e044e9d/HSA0000158230510001901.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/79/92/e4/b340c55d20cbd7/HSA0000158230510001901.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f2/95/23/87c0b18f61611d/HSA0000158230510001911.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/61/41/6b/49d09367481334/HSA0000158230510001911.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c7/b3/20/6a36f19634d3d5/HSA0000158230510001921.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/78/c6/94/566c7e9e137f16/HSA0000158230510001921.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/97/7e/18/d73084c0877e1c/HSA0000158230510001931.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/51/d3/60/e55558bba04c9c/HSA0000158230510001931.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b6/4e/05/258d58964a6193/HSA0000158230510001941.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c7/a4/26/8876221c4af6ae/HSA0000158230510001941.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/67/3f/11/bf0b861a1f51d6/HSA0000158230510001951.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/44/58/54/9733fe872cd05f/HSA0000158230510001951.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a2/71/e8/87e31c53c2c1a3/HSA0000158230510001961.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e2/8f/00/4fe0ae42898620/HSA0000158230510001961.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a9/4b/a3/90a7c9327ced54/HSA0000158230510001971.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ee/89/4c/846dac9a542b5a/HSA0000158230510001971.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1e/24/50/5fc9494745d685/HSA0000158230510001981.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/75/a6/be/a8d348e9d31366/HSA0000158230510001981.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ba/bd/ee/e63a6170328e7d/HSA0000158230510002001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/05/e9/9f/481586ceaefb99/HSA0000158230510002001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7c/62/f7/4d63129955da3a/HSA0000158230510002011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b9/a0/59/e14b7739a10d29/HSA0000158230510002011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/49/08/5f/d7620d19dcb59c/HSA0000158230510002021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/74/a1/c4/f16fa1725fcaf9/HSA0000158230510002021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fb/06/49/0a031207aea79f/HSA0000158230510002041.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c1/c9/d6/69964b1892dd6b/HSA0000158230510002041.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b5/fd/54/d9ab101e41bea2/HSA0000158230510002051.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ca/13/a2/09e6b8f1560275/HSA0000158230510002051.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7b/df/0d/ebecbf2d01981d/HSA0000158230510002071.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/cc/86/5b/141802a1c9b300/HSA0000158230510002071.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a2/a5/20/da2fed0e9c0706/HSA0000158230510002081.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f6/ee/44/7f1b00de980524/HSA0000158230510002081.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5e/7d/25/a93191713e08bc/HSA0000158230510002082.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/68/84/0b/9c6b0c9403f689/HSA0000158230510002082.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3d/0d/7b/1bfb9026c011c4/HSA0000158230510002092.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3d/db/cd/25c3381656c5c6/HSA0000158230510002092.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e2/4a/3e/3506f048fa163f/HSA0000158230510002101.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a4/0b/77/fcd77b53f409ec/HSA0000158230510002101.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/df/a2/09/d45d64d620df20/HSA0000158230510002121.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d5/7a/ab/681d3b222be06d/HSA0000158230510002121.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/98/9b/5f/e70f3f4bddae05/HSA0000158230510002131.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e5/2f/b0/a47a5255729937/HSA0000158230510002131.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e5/f7/18/ef84d977fe9c01/HSA0000158230510002141.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/6b/ba/64/26982c07b19296/HSA0000158230510002141.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f1/2b/f4/e4fb1d4213b5e7/HSA0000158230510002151.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/00/2b/dc/fa6a25eca00647/HSA0000158230510002151.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/44/66/c0/16e358aec0f44a/HSA0000158230510002161.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/42/2e/44/f39b8f93fc3aa1/HSA0000158230510002161.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3a/3b/de/1b1402b3910262/HSA0000158230510002171.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/7e/88/b9/3e2744a7f103a0/HSA0000158230510002171.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/da/2f/02/6158504b1d805f/HSA0000158230510002201.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/90/e0/17/7d45bc94ce1c90/HSA0000158230510002201.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b1/59/ae/ebd3ac175868e2/HSA0000158230510002211.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5c/50/28/686e4c395695c7/HSA0000158230510002211.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e4/cb/d6/6af10366d08a37/HSA0000158230510002221.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/04/14/35/7875432a2fa502/HSA0000158230510002221.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8b/48/cb/8dfcafc2674596/HSA0000158230510002241.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e2/5c/2d/f255a6d58162a7/HSA0000158230510002241.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/90/50/ac/481ef8e1d844e5/HSA0000158230510002251.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a2/15/0c/e9660e448858ff/HSA0000158230510002251.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f1/de/6f/cf3a01e58a8060/HSA0000158230510002271.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d0/8a/04/04bcc453507c71/HSA0000158230510002271.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/22/de/b4/0504c196208d6e/HSA0000158230510002311.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/eb/52/f9/cd0855915cf0fb/HSA0000158230510002311.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c2/ae/f6/d4c4cb8f4d04f9/HSA0000158230510002321.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0b/21/4c/06aa6f4c943319/HSA0000158230510002321.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d1/fe/b6/db62b6e7637110/HSA0000158230510002341.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/23/80/57/bc16b1c6b35a2c/HSA0000158230510002341.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5b/b4/46/3cd831c88c8eab/HSA0000158230510002351.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f4/6f/b8/e8acada92f225c/HSA0000158230510002351.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/03/58/88/e5deb5f27133ef/HSA0000158230510002361.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e5/80/d9/0a270f75763647/HSA0000158230510002361.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/93/a3/23/3e7e643dd49151/HSA0000158230510002381.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2d/96/80/2022428c531b60/HSA0000158230510002381.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b1/22/7c/8d0b30196ec8e3/HSA0000158230510002391.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/64/d7/64/456fcac8f0ddf9/HSA0000158230510002391.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1c/20/f0/2eaa5742b51cc7/HSA0000158230510002401.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ab/e3/9d/526984c7d9e0c9/HSA0000158230510002401.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6f/cb/c4/aaa52d1253a331/HSA0000158230510002411.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/21/34/5c/84fff3f85dd7fc/HSA0000158230510002411.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e6/eb/fb/f5e2194a15c959/HSA0000158230510002421.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/58/e4/35/ac4c8e92ac1316/HSA0000158230510002421.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/30/1a/99/1172ade711fbb4/HSA0000158230510002431.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a2/96/f1/edc984fc194ec6/HSA0000158230510002431.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/af/05/03/3d0dfab5ec7a46/HSA0000158230510002441.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bc/d4/30/022641bf3755ac/HSA0000158230510002441.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/af/ea/bb/e53aaae47000cf/HSA0000158230510002531.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b5/1d/8e/d7d2a137d90b8b/HSA0000158230510002531.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/19/3a/f6/463530143a3ca8/HSA0000158230510002451.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/7d/34/92/1e069d173fa777/HSA0000158230510002451.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f1/75/26/27d94e7bab24fe/HSA0000158230510002631.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d6/e9/c5/5b5bea6c96d4e0/HSA0000158230510002631.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ce/7d/74/91a83996b9d65f/HSA0000158230510002541.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/47/ef/b2/d5498b7ce31740/HSA0000158230510002541.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/85/4e/cd/3f5a6012925831/HSA0000158230510002561.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/12/71/bd/96ec61056f20bd/HSA0000158230510002561.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c2/df/df/2986ad0a097725/HSA0000158230510002581.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f6/b7/8a/869014342e9ba8/HSA0000158230510002581.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b2/f0/a7/c1aafd33906909/HSA0000158230510002591.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d3/71/b3/a7476a51f468f4/HSA0000158230510002591.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f7/00/36/e309361f3d6cb0/HSA0000158230510002621.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/75/b2/33/4bc7be924a9d37/HSA0000158230510002621.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/88/03/63/21911f44f0fd3b/HSA0000158230510002661.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c7/d7/37/a2e0af9807b5e2/HSA0000158230510002661.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c4/6d/dc/7c7a0e907ec3e2/HSA0000158230510002671.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8b/5e/83/fcd4755bd0d070/HSA0000158230510002671.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5b/f2/ea/ae8627ce9d41cf/HSA0000158230510002681.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0b/96/21/464241f1b8c767/HSA0000158230510002681.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/22/ed/08/058b7b3ffa164c/HSA0000158230510002691.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f7/fb/c8/425f84868342cf/HSA0000158230510002691.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/63/a2/d3/d94743e9a3960e/HSA0000158230510002471.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/97/9c/2c/ce41cb71e211d7/HSA0000158230510002471.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/28/de/02/51e6ff769331f5/HSA0000158230510002481.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/62/89/77/9a0864461df7bb/HSA0000158230510002481.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/13/6c/25/23fd62d99be33d/HSA0000158230510002501.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e7/f7/7b/5ea9261c302d4c/HSA0000158230510002501.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/86/a3/cd/c10d8dacc247d0/HSA0000158230510002511.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9b/cf/6c/e0021445bc6b25/HSA0000158230510002511.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/92/5e/3a/a43f029e0a48a9/HSA0000158230510002521.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/96/c3/ef/22a16c805c627b/HSA0000158230510002521.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9a/03/1e/3a9bfaad2dc083/HSA0000158230510002781.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ac/15/7a/f5b6d52a333315/HSA0000158230510002781.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ea/94/53/23bf4dec6864c4/HSA0000158230510002701.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/fe/08/f8/f88071e721c9c7/HSA0000158230510002701.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b4/2f/ea/a5005de0e4b74e/HSA0000158230510002711.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/59/04/10/590952b326a337/HSA0000158230510002711.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/69/9c/03/8bac1f6bf7fb51/HSA0000158230510002731.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5a/58/4d/8a91df126d8428/HSA0000158230510002731.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/df/a7/ea/f61471e86e4e36/HSA0000158230510002741.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/54/3a/f6/511d538e1307a3/HSA0000158230510002741.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5c/a7/ac/5c54f5cb8f31c4/HSA0000158230510002761.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9b/dd/22/41f328c1cf63d5/HSA0000158230510002761.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/43/5c/a4/8ea0f57dde5d68/HSA0000158230510002771.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a0/5d/37/854a121c93e5fc/HSA0000158230510002771.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/15/f5/82/7764c1d10b76c9/HSA0000158230510002981.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ba/12/03/9c42ba88c1dd8b/HSA0000158230510002981.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/4d/4f/5d/dfcc70e94a451a/HSA0000158230510002891.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/31/06/fe/5a294261be8181/HSA0000158230510002891.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/48/4f/91/e9db3cc0910412/HSA0000158230510002901.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/1d/05/db/499f3584faf390/HSA0000158230510002901.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/10/01/38/cc8b54693664c0/HSA0000158230510002921.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/57/43/f4/66845e193fc51a/HSA0000158230510002921.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d5/36/34/de58fd2b90954c/HSA0000158230510002931.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/33/b3/30/b611340934216f/HSA0000158230510002931.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/20/d5/7e/db92009eb3d05a/HSA0000158230510002941.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/89/1e/08/3429f1b74b6ddd/HSA0000158230510002941.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a6/6a/49/d048bba6caa258/HSA0000158230510002961.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/86/53/81/21f58a257a6bf3/HSA0000158230510002961.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ef/22/db/4f3a47d829252a/HSA0000158230510002811.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d6/47/c5/5548f526ff9feb/HSA0000158230510002811.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d1/eb/62/d9fcc4b3cac07f/HSA0000158230510002821.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/69/74/13/c29498c07e7e84/HSA0000158230510002821.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fc/0b/5e/f662198335ba2e/HSA0000158230510002831.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/15/51/3d/8eac811b399ed9/HSA0000158230510002831.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5d/a6/95/a1b45290aabb4c/HSA0000158230510002841.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/92/5f/88/0fbe4562faa759/HSA0000158230510002841.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c1/b3/0d/bf998e975c1c20/HSA0000158230510002851.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2c/28/87/84a7aa6695478a/HSA0000158230510002851.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f5/89/f7/5fa89a5790e44c/HSA0000158230510002861.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4c/c6/87/8535d5f5130ac6/HSA0000158230510002861.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/58/a9/b9/8e6679adb77238/HSA0000158230510002871.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/59/8d/1f/c4a3558ac733b6/HSA0000158230510002871.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/db/7b/da/d002c7c93d6bea/HSA0000158230510003001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/15/ec/22/a4491d7513d7cb/HSA0000158230510003001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b3/9d/49/44d9dcefe0e6d0/HSA0000158230510003011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/23/39/b5/751c99616d8042/HSA0000158230510003011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b4/e7/bb/8248ea85ba318b/HSA0000158230510003021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/9e/69/c5/b181f0d02c6a41/HSA0000158230510003021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e9/06/01/8d7c3d018372df/HSA0000158230510003041.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b5/b3/0d/9e1361928d6f2a/HSA0000158230510003041.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/79/07/19/899ea6ba4025a0/HSA0000158230510003051.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0d/f8/8c/47d54c8e503096/HSA0000158230510003051.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/eb/f6/5a/4809a25dafd597/HSA0000158230510003061.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f0/64/8b/903136a84ebd10/HSA0000158230510003061.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/34/0c/72/039d1e73f24c2d/HSA0000158230510003071.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/97/e1/d4/b20bfd51f5136c/HSA0000158230510003071.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3e/63/09/0864d22ffd756a/HSA0000158230510003081.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f5/79/f7/e5d9b12ee86bdd/HSA0000158230510003081.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/da/68/7b/ad9157e9253a3f/HSA0000158230510003101.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/27/a1/f7/565aeca0bf8066/HSA0000158230510003101.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/64/96/e2/1ed4aa5f73ff48/HSA0000158230510003111.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/94/9e/08/bc36d1bc06c3e6/HSA0000158230510003111.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/1e/78/26/73d1cb267b8d65/HSA0000158230510003121.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/eb/68/94/ae964f1790bd54/HSA0000158230510003121.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/00/f2/41/1e4fa3518c69be/HSA0000158230510003131.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0f/56/9a/ef63b7208a1e23/HSA0000158230510003131.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3b/c4/06/9c00424ee63c75/HSA0000158230510003141.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3b/ea/a2/d0dfd637119389/HSA0000158230510003141.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e6/c6/25/2147b0fac946c2/HSA0000158230510003151.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d9/18/67/ecf801467d1e3c/HSA0000158230510003151.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/40/d5/80/06ef23681ce666/HSA0000158230510003161.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a3/6e/62/669432b5a93d18/HSA0000158230510003161.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/bf/cc/7b/496cad76ff616a/HSA0000158230510003171.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/11/0d/87/7bf411a9b3de3e/HSA0000158230510003171.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d0/55/7a/3c26b51913858b/HSA0000158230510003181.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/03/b2/aa/12007ae0f5396a/HSA0000158230510003181.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/87/0c/12/9c564fb3830628/HSA0000158230510003191.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d4/c0/ca/758fa0b08a6d1e/HSA0000158230510003191.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/43/90/c6/a582c82b72519f/HSA0000158230510003201.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/20/8d/4f/0b1f3a97304ac0/HSA0000158230510003201.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/cd/54/dd/03d717150bf911/HSA0000158230510003211.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/20/50/2b/b4a8a87154555c/HSA0000158230510003211.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7f/e5/0f/02e7941149a95f/HSA0000158230510003221.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/99/87/d7/c2fd440378a826/HSA0000158230510003221.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6c/af/73/895dc2c4f0ff2a/HSA0000158230510003231.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/96/ec/57/d7720fe1e00cf6/HSA0000158230510003231.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/aa/49/d4/26770fd14fc453/HSA0000158230510003261.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a9/e6/05/94a4dd86db0290/HSA0000158230510003261.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/be/8d/e4/b0c265a2b54e74/HSA0000158230510003271.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d0/55/c3/33a1c09df6b640/HSA0000158230510003271.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/69/5a/05/010e88f9b5aae2/HSA0000158230510003281.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/39/85/27/d2473d97854573/HSA0000158230510003281.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/bf/4e/08/b0e00d5f1c80c4/HSA0000158230510003291.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bb/c8/24/46ae358a5c4d24/HSA0000158230510003291.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/16/a6/76/9b829dd5377852/HSA0000158230510003301.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4a/38/f2/12bd5210b92942/HSA0000158230510003301.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3b/a4/d4/284bf3fd3d6cdc/HSA0000158230510003311.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d9/94/d0/58c5db410447af/HSA0000158230510003311.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/76/00/f9/c2cb25f344a3ca/HSA0000158230510003331.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c6/74/cf/7fc31ce8f822ce/HSA0000158230510003331.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/3c/4e/a3/750f0ae0ea86fd/HSA0000158230510003341.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bc/d8/8c/1c8057edee05f5/HSA0000158230510003341.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ee/90/06/1bf199e9a170e0/HSA0000158230510003351.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/11/28/0a/6fb207fd99d457/HSA0000158230510003351.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/39/bc/7c/44d9ca07ddcf0c/HSA0000158230510003361.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/83/a2/92/725b108368adf4/HSA0000158230510003361.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/07/17/46/09d0ae5b84793f/HSA0000158230510003381.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/86/b1/40/4221ce222645f2/HSA0000158230510003381.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/14/cb/a1/80e695eda5f245/HSA0000158230510003391.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/13/00/f2/6cf7e62ff833ee/HSA0000158230510003391.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/72/1d/a7/859db1a102d032/HSA0000158230510003401.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/69/e1/1d/d66fad65d98aca/HSA0000158230510003401.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/32/2e/c9/f85f06d75db600/HSA0000158230510003411.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/49/f2/b5/cbb240b5300e66/HSA0000158230510003411.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d8/20/e2/07cff3e6a3fcdb/HSA0000158230510003421.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/93/29/9d/bb8d07de7260b0/HSA0000158230510003421.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/26/b6/14/cb0ea2a65a5861/HSA0000158230510003431.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5e/5a/c5/8fadd203b22338/HSA0000158230510003431.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/03/d7/89/45e797faad662b/HSA0000158230510003441.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/91/66/29/4c53e8a4222878/HSA0000158230510003441.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/2f/67/05/4ffc98d1c46787/HSA0000158230510003451.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4d/ab/58/25d15b979ab27f/HSA0000158230510003451.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/05/16/f4/61004bfa218824/HSA0000158230510003461.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8b/77/b3/e7440e600de17f/HSA0000158230510003461.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/68/0c/dc/77c3f1f02720fd/HSA0000158230510003481.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/21/69/86/dc69c30e9e2caf/HSA0000158230510003481.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c0/44/7d/8f595f4fc965cf/HSA0000158230510003491.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/96/a1/28/7d0f682bd45df4/HSA0000158230510003491.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/63/c6/d4/0709c1f22a37c1/HSA0000158230510003501.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/76/7c/ec/88c8a79f365a62/HSA0000158230510003501.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/24/62/69/78afbcd9d59aa8/HSA0000158230510003511.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4f/38/ef/bd73b576c89807/HSA0000158230510003511.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/eb/cc/11/b2874c7d82bcf3/HSA0000158230510003521.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d0/0e/bc/fcd508d71d0261/HSA0000158230510003521.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5f/39/ee/870312b72482fb/HSA0000158230510003531.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b2/8e/98/94bd5a1efbb866/HSA0000158230510003531.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b0/54/55/6b6dba03f837cd/HSA0000158230510003541.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ec/42/b1/db896b15d440c4/HSA0000158230510003541.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/30/d9/a6/f7dbe828bf2e13/HSA0000158230510003551.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/79/89/c2/26813ac3e85bfa/HSA0000158230510003551.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/07/78/1e/eb9c35adb41d0f/HSA0000158230510003561.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c4/99/d1/dccd064a8e1361/HSA0000158230510003561.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/11/50/63/ce9766bf0b9d02/HSA0000158230510003571.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c8/07/5c/1762f9ef1f3e20/HSA0000158230510003571.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/84/c7/e5/aeab915f95dabf/HSA0000158230510003581.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e4/26/04/a08e920a405024/HSA0000158230510003581.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/23/8f/a5/32858c3ea2a7c6/HSA0000158230510003591.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e6/a8/87/a5cde2c7f80e0b/HSA0000158230510003591.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fd/7c/17/93783c69af1ef8/HSA0000158230510003601.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/12/a9/82/159b4939384797/HSA0000158230510003601.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/44/eb/5f/758811546a76be/HSA0000158230510003611.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f9/4c/cf/ada1c83e2d413e/HSA0000158230510003611.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6e/5f/62/e2bb5b65460782/HSA0000158230510003621.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/83/21/08/92807708cfb7e1/HSA0000158230510003621.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ad/13/aa/4b04cae721bc6f/HSA0000158230510003631.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f0/eb/11/cd17453ab5732f/HSA0000158230510003631.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e1/a9/e9/efbff69ba68f2a/HSA0000158230510003641.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/bb/f0/69/546f0de18ffe70/HSA0000158230510003641.png"
                }
            ]
        },
        {
            "title": "Flexible ads",
            "snippet": "A display (14) comprising:a first polymer layer (48) having an active region (106) containing an array of thin film transistors (54) and an inactive region (IA) including curved edge portions of the first polymer layer (48); anda second polymer layer (52) attached to the first polymer layer (48), …",
            "link": "https://patents.google.com/patent/DE112013003937B4/en",
            "priorityDate": "2012-08-07",
            "filingDate": "2013-07-23",
            "grantDate": "2023-12-28",
            "publicationDate": "2023-12-28",
            "inventor": "c/o Apple Inc. Degner Brett W.",
            "assignee": "Apple Inc.",
            "publicationNumber": "DE112013003937B4",
            "language": "en",
            "thumbnailUrl": "https://patentimages.storage.googleapis.com/ce/2a/cd/a2f662c61118d6/DE112013003937B4_0001.png",
            "pdfUrl": "https://patentimages.storage.googleapis.com/47/52/35/87be9ad31e9ef2/DE112013003937B4.pdf",
            "figures": [
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ba/1a/09/a4dffa8df832bf/DE112013003937B4_0001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d2/57/5d/f76f8d7e0b6794/DE112013003937B4_0001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/12/08/33/64d7fae93a26d4/DE112013003937B4_0002.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/24/c7/7d/a35564bbc86d2a/DE112013003937B4_0002.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/db/53/d0/cd3f0fc150b403/DE112013003937B4_0003.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3f/4a/1a/2283c3adf72b53/DE112013003937B4_0003.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/36/45/96/c5ffd36f3154ad/DE112013003937B4_0004.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/53/fc/7b/b92c0dec357c5d/DE112013003937B4_0004.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/54/5d/9b/c930005dbb8374/DE112013003937B4_0005.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/58/c3/d7/f514ac2024095b/DE112013003937B4_0005.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b8/47/52/0b49019f2b25aa/DE112013003937B4_0006.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f6/d0/e4/dae54df5792c03/DE112013003937B4_0006.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5d/bc/85/f56def2cf78de4/DE112013003937B4_0007.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2d/de/d2/1486f0f66368ba/DE112013003937B4_0007.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d8/5f/c1/9c2c0f2b70e2d4/DE112013003937B4_0008.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/83/df/ad/0018caea1ac9c7/DE112013003937B4_0008.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/22/28/68/19a263978fa3ab/DE112013003937B4_0009.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4c/12/49/f4f327ff946181/DE112013003937B4_0009.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/e8/8a/c7/e671155f0bcf6f/DE112013003937B4_0010.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/39/62/6b/cc81d929dddf48/DE112013003937B4_0010.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/33/87/dd/b9391d93d28077/DE112013003937B4_0011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/95/ab/bd/d35c7c7ba1d87b/DE112013003937B4_0011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5d/9a/61/b3d718df4b5068/DE112013003937B4_0012.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b4/80/9d/9d89d553f87283/DE112013003937B4_0012.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/09/00/03/283fb0dad33b6f/DE112013003937B4_0013.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/c4/f6/ce/e80499757fc2e8/DE112013003937B4_0013.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ac/5a/2e/ea0821f2d3ba42/DE112013003937B4_0014.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ea/b5/d3/0abbb3a62a10b4/DE112013003937B4_0014.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/90/16/19/608bbd7dd38fc5/DE112013003937B4_0015.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/09/c4/e3/ff804261ab9b97/DE112013003937B4_0015.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8f/72/29/40e87b5b11e3b0/DE112013003937B4_0016.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e7/88/94/2d276e378d8040/DE112013003937B4_0016.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/9e/0b/41/9eb04894b99a9a/DE112013003937B4_0017.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/78/33/3e/51ccdf8d1217d8/DE112013003937B4_0017.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/5f/fb/e7/bdf0c1a0799e96/DE112013003937B4_0018.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5e/be/b7/b8f4e5830874be/DE112013003937B4_0018.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/41/bc/95/62fa85a9464b0e/DE112013003937B4_0019.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/43/5e/be/906eb72e821dad/DE112013003937B4_0019.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/2c/cb/72/0647214a50cfa7/DE112013003937B4_0020.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b1/56/9a/454f54d9c98aaf/DE112013003937B4_0020.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d9/90/92/925c556ea9de59/DE112013003937B4_0021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/4c/98/47/7024fa129e6d69/DE112013003937B4_0021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ea/ac/71/d581babb5aabd2/DE112013003937B4_0022.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5a/8c/86/6a7d4c19856408/DE112013003937B4_0022.png"
                }
            ]
        },
        {
            "title": "Distributed personal assistant",
            "snippet": "An exemplary method for using a virtual assistant may include, at an electronic device configured to transmit and receive data, receiving a user request for a service from a virtual assistant; determining at least one task to perform in response to the user request; estimating at least one …",
            "link": "https://patents.google.com/patent/US20250110774A1/en",
            "priorityDate": "2015-09-08",
            "filingDate": "2024-12-12",
            "grantDate": "",
            "publicationDate": "2025-04-03",
            "inventor": "Nicolas ZEITLIN",
            "assignee": "Apple Inc.",
            "publicationNumber": "US20250110774A1",
            "language": "en",
            "thumbnailUrl": "https://patentimages.storage.googleapis.com/d6/6e/b9/cb11bec4f30905/US20250110774A1-20250403-D00000.png",
            "pdfUrl": "https://patentimages.storage.googleapis.com/8b/91/61/c4177d29954e9d/US20250110774A1.pdf",
            "figures": [
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ce/39/15/3cdb8ff074cf6a/US20250110774A1-20250403-D00000.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5a/ac/80/d8b8fcb9eef7b0/US20250110774A1-20250403-D00000.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/44/6a/c7/dcf8a402e16994/US20250110774A1-20250403-D00001.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f9/30/7e/7a0dae1476f1fd/US20250110774A1-20250403-D00001.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/ad/a7/a7/3b2605eb1709f2/US20250110774A1-20250403-D00002.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/84/7f/74/63b3c4cb833d8d/US20250110774A1-20250403-D00002.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/07/4d/68/3db0a8a83feed2/US20250110774A1-20250403-D00003.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/54/bd/b6/a533e9409c7e62/US20250110774A1-20250403-D00003.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a9/6d/8d/1f90ac090625f1/US20250110774A1-20250403-D00004.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/94/02/80/3c3b3573ae8a7a/US20250110774A1-20250403-D00004.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a4/66/f2/3ef56df8be0a25/US20250110774A1-20250403-D00005.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/33/1f/98/cb8fcdde7c74c4/US20250110774A1-20250403-D00005.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/bd/00/94/4fe19c3196e849/US20250110774A1-20250403-D00006.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0b/b8/bd/f3066fc369e520/US20250110774A1-20250403-D00006.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/4d/1d/05/e4401645e1940b/US20250110774A1-20250403-D00007.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/ca/cb/23/fbbd5f6a841e6a/US20250110774A1-20250403-D00007.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/fc/f0/24/1a27677b8c2ccd/US20250110774A1-20250403-D00008.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d5/11/d0/73e49709dcbae7/US20250110774A1-20250403-D00008.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/7b/24/cc/61ce92529cec45/US20250110774A1-20250403-D00009.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/b9/06/f5/000a4f914a2933/US20250110774A1-20250403-D00009.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/23/31/c0/394d3ba4ae8b3a/US20250110774A1-20250403-D00010.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/39/b9/06/c8cd01ae01f19e/US20250110774A1-20250403-D00010.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/17/87/00/338137ddf33e75/US20250110774A1-20250403-D00011.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/6a/0d/ba/d4887c40bbd6a1/US20250110774A1-20250403-D00011.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/4d/b2/52/3018cc62ee7886/US20250110774A1-20250403-D00012.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/0a/30/d3/9478ca685a7375/US20250110774A1-20250403-D00012.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/f5/f4/0a/9c186f6ac52e2f/US20250110774A1-20250403-D00013.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/fc/2e/73/52b91eb29a8a8a/US20250110774A1-20250403-D00013.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a4/09/b1/d83a3447ba01d2/US20250110774A1-20250403-D00014.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/5b/38/5e/86ccf5690d4c27/US20250110774A1-20250403-D00014.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/8e/30/0f/313e58a8422c2a/US20250110774A1-20250403-D00015.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/8a/64/12/99623433e3b22e/US20250110774A1-20250403-D00015.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/66/7d/db/e3bf34c2f26d6a/US20250110774A1-20250403-D00016.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/e1/d4/c5/477eec663a7350/US20250110774A1-20250403-D00016.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/cf/2f/72/22c9a21da5a0a6/US20250110774A1-20250403-D00017.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/2b/70/cb/70c109b51e4648/US20250110774A1-20250403-D00017.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/b1/29/4a/6521c7f56e675e/US20250110774A1-20250403-D00018.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/10/1b/17/05447f4d940e8c/US20250110774A1-20250403-D00018.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d5/c7/85/acff31c09988a5/US20250110774A1-20250403-D00019.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/d2/cb/8a/98d519440da799/US20250110774A1-20250403-D00019.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/c9/f6/62/72f11e9c793b58/US20250110774A1-20250403-D00020.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/a1/70/6d/11af121574c455/US20250110774A1-20250403-D00020.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/6a/f8/72/eebe1cffa750d7/US20250110774A1-20250403-D00021.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/dd/e9/55/355bb0f4305e1e/US20250110774A1-20250403-D00021.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/d5/f8/0a/4f08c574dede2a/US20250110774A1-20250403-D00022.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/f8/21/5e/c2639e64d38bf4/US20250110774A1-20250403-D00022.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/14/fe/8b/ac8190044e9267/US20250110774A1-20250403-D00023.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/82/f2/e4/2c7e5e378b0927/US20250110774A1-20250403-D00023.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/a3/70/d9/ddadb2a821bc4c/US20250110774A1-20250403-D00024.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/3e/08/fb/c708d9824882e7/US20250110774A1-20250403-D00024.png"
                },
                {
                    "imageUrl": "https://patentimages.storage.googleapis.com/eb/eb/82/26d92742151d15/US20250110774A1-20250403-D00025.png",
                    "thumbnailUrl": "https://patentimages.storage.googleapis.com/00/ac/ac/d180ce3cd4b6b6/US20250110774A1-20250403-D00025.png"
                }
            ]
        },
        {
            "title": "Restricted operation of an electronic device",
            "snippet": "IRI.5JO,JPKE. KG.KH. KN.KP CLARK, David: co Apple Inc.. One Applc Park Way. KR. KW. KZ, LA, LC. LK, LR. LS. LU. LY. MA, MD. ME, Cupertino, Califoria 95014 (US). IIAWKINS, Tyler. c/ MG. MK. MN. MW, MX. MYMZ, NA. NG NI. NO. NZ, a Apple Inc.. One Apple Park Way, Cupertino. Califor- OM.PA.PEPG.PPH.,PL.",
            "link": "https://patents.google.com/patent/AU2020239670B2/en",
            "priorityDate": "2019-05-06",
            "filingDate": "2020-05-05",
            "grantDate": "2021-07-15",
            "publicationDate": "2021-07-15",
            "inventor": "Giovanni Agnoli",
            "assignee": "Apple Inc.",
            "publicationNumber": "AU2020239670B2",
            "language": "en",
            "pdfUrl": "https://patentimages.storage.googleapis.com/8e/be/9d/aab9098bf80d6b/AU2020239670B2.pdf",
            "figures": []
        }
    ],
    "credits": 1
}
