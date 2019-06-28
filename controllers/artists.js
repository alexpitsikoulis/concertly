const express = require('express')

const artistApi = require('../models/artists.js')
const artistRouter = express.Router()

artistRouter.get('/', (req, res) => {
  artistApi.getArtists()
    .then((artists) => {
      res.send(artists)
    })
})

artistRouter.post('/', (req, res) => {
  artistApi.addArtist(req.body)
    .then(() => {
      res.send('Artist created')
    })
})

module.exports = {
  artistRouter
}
