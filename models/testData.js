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
            name: 'test',
            genre: 'test'
        })
    })
    