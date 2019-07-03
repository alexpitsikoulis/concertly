const express = require('express')

const artistApi = require('../models/artists.js')
const artistRouter = express.Router()

artistRouter.get('/', (req, res) => {
  artistApi.getArtists()
    .then((artists) => {
      res.render('artists/artists', {artists})
    })
    .catch((err) => {
      res.send(err)
    })
})


artistRouter.get('/new', (req, res) => {
  res.render('artists/newArtistForm')
})

artistRouter.get('/:artistId/edit', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      res.render('artists/editArtistForm', {artist})
    })
})

artistRouter.get('/:artistId', (req, res) => {
  artistApi.getArtist(req.params.artistId)
    .then((artist) => {
      res.render('artists/artist', {artist})
    })
    .catch((err) => {
      res.send(err)
    })
})

artistRouter.post('/', (req, res) => {
  artistApi.addArtist(req.body)
    .then(() => {
          res.redirect('/artists')
    })
    .catch((err) => {
      res.send(err)
    })
})

artistRouter.put('/:artistId', (req, res) => {
  artistApi.editArtist(req.params.artistId, req.body)
    .then(() => {
      res.redirect(`/artists/${req.params.artistId}`)
    })
    .catch((err) => {
      res.send(err)
    })
})

artistRouter.delete('/:artistId', (req, res) => {
  artistApi.deleteArtist(req.params.artistId)
    .then(() => {
      res.redirect('/artists')
    })
    .catch((err) => {
      res.send(err)
    })
})
module.exports = {
  artistRouter
}
