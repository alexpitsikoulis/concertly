const express = require('express')

const artistApi = require('../models/artists.js')
const showApi = require('../models/shows.js')
const showRouter = express.Router({mergeParams: true})

showRouter.get('/', (req, res) => {
    artistApi.getArtist(req.params.artistId)
        .then((artist) => {
            showApi.getShowsByArtist(artist._id)
                .then((shows) => {
                    res.send(shows)
                })
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = {
    showRouter
}