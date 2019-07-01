const mongoose = require('./connection.js')

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    album: String,
    spotifyLink: String,
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

module.exports = {
    getSongsByShow,
    getSongByShow,
    addSong,
    editSong
}