const express = require('express')

const showApi = require('../models/shows.js')
const songApi = require('../models/songs.js')
const songRouter = express.Router({mergeParams: true})

songRouter.get('/', (req, res) => {
    songApi.getSongsByShow(req.params.showId)
        .then((songs) => {
            let artist = req.params.artistId
            res.render('songs/songs', {songs, artist})
        })
})

songRouter.get('/:songId', (req, res) => {
    songApi.getSongByShow(req.params.showId, req.params.songId) 
        .then((song) => {
            res.render('songs/song', {song})
        })
})

songRouter.post('/', (req, res) => {
    req.body.artistId = req.params.artistId
    req.body.showId = req.params.showId
    songApi.addSong(req.body)
        .then(() => {
            res.send('Song created')
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