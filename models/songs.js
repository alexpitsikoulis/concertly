const mongoose = require('./connection.js')

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    album: String,
    spotifyLink: String,
    artistId: mongoose.Types.ObjectId,
    showId: mongoose.Types.ObjectId,
})

const SongCollection = mongoose.model('Songs', SongSchema)

function getSongsByShow(showId) {
    return SongCollection.find({showId: showId})
}

function getSongByShow(showId, songId) {
    return SongCollection.findOne({showId: showId, _id: songId})
}

function addSong(songObject) {
    return SongCollection.create(songObject)
}

function editSong(songId, songObject) {
    return SongCollection.findByIdAndUpdate(songId, songObject)
}

function deleteSong(songId) {
    return SongCollection.findByIdAndDelete(songId)
}

module.exports = {
    getSongsByShow,
    getSongByShow,
    addSong,
    editSong,
    deleteSong
}