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

function addArtist(artistObject) {
  return ArtistCollection.create(artistObject)
}

module.exports = {
  getArtists,
  addArtist
}
