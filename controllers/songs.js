const express = require('express')

const showApi = require('../models/shows.js')
const songApi = require('../models/songs.js')
const songRouter = express.Router({mergeParams: true})

songRouter.get('/', (req, res) => {
    songApi.getSongsByShow(req.params.showId)
        .then((shows) => {
            res.send(shows)
        })
})

songRouter.get('/:songId', (req, res) => {
    songApi.getSongByShow(req.params.showId, req.params.songId) 
        .then((show) => {
            res.send(show)
        })
})

songRouter.post('/', (req, res) => {
    req.body.showId = req.params.showId
    songApi.addSong(req.body)
        .then(() => {
            res.send('Song created')
        })
})
module.exports = {
    songRouter
}