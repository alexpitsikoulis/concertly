const mongoose = require('./connection.js')

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    album: String,
    spotifyLink: String,
    showId: mongoose.Types.ObjectId
})

const SongCollection = mongoose.model('Songs', SongSchema)

function getSongsByShow(showId) {
    return SongCollection.find({showId: showId})
}

module.exports = {
    getSongsByShow
}