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

function getShowByArtist(artistId, showId) {
    return ShowCollection.findOne({artistId: artistId, _id: showId})
}

function addShowToArtist(showObject) {
    return ShowCollection.create(showObject)
}

function editShow(showId, showObject) {
    return ShowCollection.findByIdAndUpdate(showId, showObject)
}
module.exports = {
    getShowsByArtist,
    getShowByArtist,
    addShowToArtist,
    editShow
}