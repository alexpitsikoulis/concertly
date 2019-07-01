const express = require('express')

const artistApi = require('../models/artists.js')
const showApi = require('../models/shows.js')
const showRouter = express.Router({mergeParams: true})

showRouter.get('/', (req, res) => {
    artistApi.getArtist(req.params.artistId)
        .then((artist) => {
            showApi.getShowsByArtist(artist._id)
                .then((shows) => {
                    res.render('shows/shows', {artist, shows})
                })
        })
        .catch((err) => {
            res.send(err)
        })
})

showRouter.get('/new', (req, res) => {
    artistApi.getArtist(req.params.artistId)
        .then((artist) => {
            res.render('shows/newShowForm', {artist})
        })
})

showRouter.get('/:showId/edit', (req, res) => {
    showApi.getShowByArtist(req.params.artistId, req.params.showId)
        .then((show) => {
            res.render('shows/editShowForm', {show})
        })
})

showRouter.get('/:showId', (req, res) => {
    artistApi.getArtist(req.params.artistId)
        .then((artist) => {
            showApi.getShowByArtist(req.params.artistId, req.params.showId)
                .then((show) => {
                    res.render('shows/show', {artist, show})
                })
        })
})

showRouter.post('/', (req, res) => {
    req.body.artistId = req.params.artistId
    showApi.addShowToArtist(req.body)
        .then(() => {
            res.redirect(`/artists/${req.params.artistId}/shows`)
        })
})

showRouter.put('/:showId', (req, res) => {
    showApi.editShow(req.params.showId, req.body)
        .then(() => {
            res.redirect(`/artists/${req.params.artistId}/shows/${req.params.showId}`)
        })
})

showRouter.delete('/:showId', (req, res) => {
    showApi.deleteShow(req.params.showId)
        .then(() => {
            res.redirect(`/artists/${req.params.artistId}/shows`)
        })
})

module.exports = {
    showRouter
}