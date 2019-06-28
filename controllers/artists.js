const express = require('express')

const artistApi = require('../models/artists.js')
const artistRouter = express.Router()

artistRouter.get('/', (req, res) => {
  artistApi.getArtists()
    .then((artists) => {
      res.send(artists)
    })
})

artistRouter.get('/:artistId', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      res.send(artist)
    })
})

artistRouter.post('/', (req, res) => {
  artistApi.addArtist(req.body)
    .then(() => {
      res.send('Artist created')
    })
})

artistRouter.put('/:artistId', (req, res) => {
  artistApi.editArtist(req.params.artistId, req.body)
    .then(() => {
      res.send('Artist updated')
    })
})
module.exports = {
  artistRouter
}
