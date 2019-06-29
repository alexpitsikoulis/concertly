const mongoose = require('./connection.js')

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  genre: {
    type: String,
    required: true,
    lowercase: true
  },
  imgLink: String
})

const ArtistCollection = mongoose.model('Artists', ArtistSchema)

function getArtists() {
  return ArtistCollection.find().sort({name: 'asc'})
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

function deleteArtist(artistId) {
  return ArtistCollection.findByIdAndDelete(artistId)
}

module.exports = {
  getArtists,
  getArtist,
  addArtist,
  editArtist,
  deleteArtist
}
