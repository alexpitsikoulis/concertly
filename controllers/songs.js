const express = require('express')

const artistApi = require('../models/artists.js')
const showApi = require('../models/shows.js')
const songApi = require('../models/songs.js')
const songRouter = express.Router({mergeParams: true})

songRouter.get('/', (req, res) => {
    artistApi.getArtist(req.params.artistId)
        .then((artist) => { 
            showApi.getShowByArtist(req.params.artistId, req.params.showId)
                .then((show) => {
                songApi.getSongsByShow(req.params.showId)
                    .then((songs) => {
                    res.render('songs/songs', {songs, show, artist})
                    })
                })
        })
})

songRouter.get('/new', (req, res) => {
    artistApi.getArtist(req.params.artistId)
        .then((artist) => {
            showApi.getShowByArtist(req.params.artistId, req.params.showId)
                .then((show) => {
                res.render('songs/newSongForm', {show, artist})
                })
        })
    
})

songRouter.get('/:songId', (req, res) => {
    artistApi.getArtist(req.params.artistId)
        .then((artist) => {
            songApi.getSongByShow(req.params.showId, req.params.songId) 
                .then((song) => {
                res.render('songs/song', {song, artist})
                })
        })
})

songRouter.post('/', (req, res) => {
    req.body.artistId = req.params.artistId
    req.body.showId = req.params.showId
    songApi.addSong(req.body)
        .then(() => {
            res.redirect(`/artists/${req.params.artistId}/shows/${req.params.showId}/songs`)
        })
})

songRouter.put('/:songId', (req, res) => {
    songApi.editSong(req.params.songId, req.body)
        .then(() => {
            res.send('song updated')
        })
})

songRouter.delete('/:songId', (req, res) => {
    songApi.deleteSong(req.params.songId)
        .then(() => {
            res.send('song deleted')
        })
})
module.exports = {
    songRouter
}