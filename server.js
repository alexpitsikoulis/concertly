const express = require('express')
const app = express()
const methodOverride = require('method-override')

const { artistRouter } = require('./controllers/artists.js')
const { showRouter } = require('./controllers/shows.js')
const { songRouter } = require('./controllers/songs.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(__dirname+"/public"))
app.set('view engine', 'hbs')
app.get('/', (req, res) => {
    res.redirect('/artists')
})
app.use('/artists', artistRouter)
app.use('/artists/:artistId/shows', showRouter)
app.use('/artists/:artistId/shows/:showId/songs', songRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
