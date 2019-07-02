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

function alphabetList() {
  return ArtistCollection.find()
    .then((artists) => {
      let arr = []
      artists.forEach((artist) => {
        arr.push(artist.name[0])
      })
      arr.sort()
      let alphList = [... new Set(arr)]
      // console.log(alphList)
      return alphList
    })
}


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
  alphabetList,
  getArtists,
  getArtist,
  addArtist,
  editArtist,
  deleteArtist
}
