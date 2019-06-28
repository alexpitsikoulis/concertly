const mongoose = require('./connection.js')

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
})

const ArtistCollection = mongoose.model('Sample', ArtistSchema)

function getArtists() {
  return ArtistCollection.find()
}

function getArtist(artistId) {
  return ArtistCollection.findById(artistId)
}

function addArtist(artistObject) {
  return ArtistCollection.create(artistObject)
}

function editArtist(artistId, artistObject) {
  return ArtistCollection.findByIdAndUpdate(artistId, artistObject)
}

module.exports = {
  getArtists,
  getArtist,
  addArtist,
  editArtist
}
