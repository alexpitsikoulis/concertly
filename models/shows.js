const mongoose = require('./connection.js')

const ShowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    city: {
        type: String,
        required: true,
        lowercase: true
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

function addShowToArtist(showObject) {
    return ShowCollection.create(showObject)
}

module.exports = {
    getShowsByArtist,
    addShowToArtist
}