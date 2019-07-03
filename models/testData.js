const artistApi = require('./artists.js')
const showApi = require('./shows.js')
const songApi = require('./songs.js')




artistApi.deleteAllArtists()
    .then(() => {
        artistApi.addArtist({
            name: 'the mountain goats',
            genre: 'folk',
            imgLink: 'https://cdn-images-1.medium.com/max/1600/1*MGWqYNO9EqlGUygfp1gtMw.jpeg'
        })
            .then((artist) => {
                showApi.addShowToArtist({
                    name: 'heretic pride tour',
                    city: 'san francisco, ca',
                    year: 2008,
                    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kpTolrSnkqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    artistId: artist._id
                })
                    .then((show) => {
                        let tmgSongs = [
                            {
                                name: 'michael myers resplendent',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/6jkq6E8KUmzf1QNIzClD7V" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'heretic pride',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3LsPToq3yB7g5IKfw829e1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'you or your memory',
                                album: 'the sunset tree',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3LWy1aiaQDWxQhup9u7FC0" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'quito',
                                album: 'we shall all be healed',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/36jJgtVzEyHJaB99UeqgnO" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'sax rohmer #1',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2HdDlvTCSWYmhnvSZTokIJ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'marduk t-shirt men\'s room incident',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3fncHAdVqkMaQ2yfOUUCuA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'so desperate',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/6M2tqmsSytUi9o42LTjjFo" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'raja vocative',
                                album: 'ghana',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/0DOfhgv2cNciLgMLmtQKnA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'i\'ve got the sex',
                                spotifyLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_mVYac53_3E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'downtown seoul',
                                album: 'sweden',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/4N51JqNH9naopvvZUk3K98" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'talking in your sleep (romantics cover)',
                                spotifyLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D9sMupaqqfY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'in the craters on the moon',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/4FwaFDO8VMNuKUhpQt8FSp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'dilaudid',
                                album: 'the sunset tree',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2kIls4BrrWXCv0948Ag14d" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'sept 15th 1983',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3GV0trHRRyr2bVntgDvbrC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'lovecraft in brooklyn',
                                album: 'heretic pride',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2yBB2TGwhpd5ci79gfC9Gz" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'see america right',
                                album: 'tallahassee',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/7hdUxFqRnuX6j1xNu6eQ9B" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'house guest (nothing painted blue cover)',
                                spotifyLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wFZ7Fl9P9UY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'this year',
                                album: 'the sunset tree',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2M1Qc1mGSI1IYtmJzQtfPq" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'california song',
                                album: 'sweden',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/0q8hf5ydAuIbw8R7IhSArN" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'the sign (ace of base cover)',
                                spotifyLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CHUxODtKtgc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'the best ever death metal band in denton',
                                album: 'all hail west texas',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/38dYh2pToiZPEKGVErVISk" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            }
                        ]
                        tmgSongs.forEach((song) => {
                            songApi.addSong(song)
                        })
                        
                    })
            })
        artistApi.addArtist({
            name: 'beat happening',
            genre: 'indie',
            imgLink: 'http://exclaim.ca/images/BeatHappening-BretLunsford.jpg'
        })
            .then((artist) => {
                showApi.addShowToArtist({
                    name: 'you turn me on tour',
                    city: 'norman, ok',
                    year: 1992,
                    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DCdwMKmwuW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    artistId: artist._id
                })
                    .then((show) => {
                        let beatHappeningSongs = [
                            {
                                name: 'nancy sin',
                                album: 'dreamy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2nnRCAhQLfBnygQ16QfaY2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'me untamed',
                                album: 'dreamy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/6FooeOEAx5U9NayhLtZ548" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'other side',
                                album: 'black candy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/51RaICBblgoIy7t1AsweYo" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'tiger trap',
                                album: 'you turn me on',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2mVRnxS9AhVsJ2uWdRJ9ZM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'teenage caveman',
                                album: 'you turn me on',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/5XMAx0JrWui1XQn9xoSBKo" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'hey day',
                                album: 'you turn me on',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/6gIrBC3nuNp8drjmNAEA6D" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'noise',
                                album: 'you turn me on',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/17spVRySM7Mzm8OC6t2ySI" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'left behind',
                                album: 'dreamy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3QyoSrcrPfoozT3NhGhn0z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'godsend',
                                album: 'you turn me on',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3rVCzb2u0odnilEoEMG3A4" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'red head walking',
                                album: 'dreamy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/5oN5kKQM3fv6OJv8DUoey0" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'cry for a shadow',
                                album: 'dreamy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/49NHkRpEV23ekHbO88iK6W" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'sleepy head',
                                album: 'you turn me on',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/5bzp6WaOXltY3NrR00ko1u" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 't.v. girl',
                                album: 'black candy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/1vSbSvymDUpNFuCD4WT1Tm" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'bewitched',
                                album: 'jamboree',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/7lheP8opeMVB4dz5BQXEzU" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'cast a shadow',
                                album: 'black candy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3CaeRrdpxBk40OuqRURvBw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'you turn me on',
                                album: 'you turn me on',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/0uaILJoXH05mmFanUAHlic" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                        ]
                        beatHappeningSongs.forEach((song) => {
                            songApi.addSong(song)
                        })
                    })
            })
        artistApi.addArtist({
            name: 'kate bush',
            genre: 'pop',
            imgLink: 'https://www.billboard.com/files/styles/article_main_image/public/media/kate-bush-portrait-b-billboard-1548.jpg'
        })
            .then((artist) => {
                showApi.addShowToArtist({
                    name: 'tour of life',
                    city: 'london, uk',
                    year: 1979,
                    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/A44wwRgzGuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    artistId: artist._id
                })
                    .then((show) => {
                        let kateBushSongs = [
                            {
                                name: 'moving',
                                album: 'the kick inside',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/1PtXEYrahu8Vg2rhpJBoqt" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'them heavy people',
                                album: 'the kick inside',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/1eN1L9mXLFepXpMJNSQng8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'violin',
                                album: 'never for ever',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/6Q57OHrsxrgVZJa1vqSSVi" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'strange phenomena',
                                album: 'the kick inside',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/7FXFAvkVsZ85KzppbQzYs2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'hammer horror',
                                album: 'lionheart',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/1OeyUaxsSWYqJEzH81X3ue" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'don\'t push your foot on the heartbrake',
                                album: 'lionheart',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/5tXDePa4VHIORiNxJmu4Xs" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'wow',
                                album: 'lionheart',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/1hbB7wFZ28n5vOfMEEY2Jw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'feel it',
                                album: 'the kick inside',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2XRFaX4lO7wXVbi66EoFLa" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'kite',
                                album: 'the kick inside',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/5oKkU6VSkFSlTx3tP5zMoO" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'james and the cold gun',
                                album: 'the kick inside',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/0vC2UIF6GgcQvEdQzjcmKv" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'oh england my lionheart',
                                album: 'lionheart',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/2YoYQZkoTmTuAs3f7ZtGpQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'wuthering heights',
                                album: 'the kick inside',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/5YSI1311X8t31PBjkBG4CZ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            }
                        ]
                        kateBushSongs.forEach((song) => {
                            songApi.addSong(song)
                        })
                    })
            })
        artistApi.addArtist({
            name: 'waylon jennings',
            genre: 'country',
            imgLink: 'https://cdn.mobsocmedia.com/uploads/sites/49/20160822192927/waylon-jennings1-440x338.jpg'
        })
            .then((artist) => {
                showApi.addShowToArtist({
                    name: 'live at omaha civic auditorium',
                    city: 'omaha, ne',
                    year: 1979,
                    videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SKiQq_r1-3Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    artistId: artist._id
                })
                    .then((show) => {
                        let waylonJenningsSongs = [
                            {
                                name: 'don\'t you think this outlaw bit\'s done gone out of hand',
                                album: 'i\'ve always been crazy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/79M1EMwuUACX8hYUwX1uv1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'are you ready for the country',
                                album: 'are you ready for the country',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/5paXckVUlnYJfUybwXrSoI" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'waymore\'s blues',
                                album: 'dreaming my dreams',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/0lWHgpQIg3NcVLHnEP1h4b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'mammas don\'t let your babies grow up to be cowboys',
                                album: 'waylon & willie',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/7nVQ8mo77KaUvhUQzh4vMy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'i\'ve always been crazy',
                                album: 'i\'ve always been crazy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/7uCZY4H10zmzAgybEQkfmL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'amanda',
                                album: 'the ramblin\' man',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/62jCWEeUEIjzli6sFPcFnK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'slow rollin\' low',
                                album: 'this time',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/6MHTCbF6gHK2lDtFryxeqo" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'come with me',
                                album: 'what goes around comes around',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/4v6CbLj1aUnIzM2F82k8FW" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'a long time ago',
                                album: 'i\'ve always been crazy',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/79erUqzXzC0KjIu5VTZwpU" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'i\'ve been a long time leaving (but i\'ll be a long time gone)',
                                album: 'dreaming my dreams',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/0r8dEfqyiVgAPSv2Q6grMy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'lookin\' for a feeling',
                                album: 'waylon & willie',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/3ysdhH7r8Xd4QqZPWeZHB5" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'good hearted woman',
                                album: 'good hearted woman',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/4KmAGKJbeY2DUiLInlet53" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            },
                            {
                                name: 'honky tonk heroes',
                                album: 'honky tonk heroes',
                                spotifyLink: '<iframe src="https://open.spotify.com/embed/track/1skfGDMO9162triZ8ReWR8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                                artistId: artist._id,
                                showId: show._id
                            }
                        ]
                        waylonJenningsSongs.forEach((song) => {
                            songApi.addSong(song)
                        })
                    })
            })
    })
    