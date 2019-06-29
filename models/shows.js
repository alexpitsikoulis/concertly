const mongoose = require('./connection.js')

const ShowSchema = new mongoose.Schema({
    name: String,
    city: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    artistId: mongoose.Types.ObjectId
})

const ShowCollection = mongoose.model('Shows', ShowSchema)

function getShowsByArtist(artistId) {
    return ShowCollection.find({artistId: artistId})
}

module.exports = {
    getShowsByArtist
}