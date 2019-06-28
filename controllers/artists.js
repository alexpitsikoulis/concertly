const express = require('express')

const artistApi = require('../models/artists.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const artistRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
artistRouter.get('/', (req, res) => {
  artistApi.getArtists()
    .then((artists) => {
      res.send(artists)
    })
})

/* Step 6
 *
 * Export the router from the file.
 */
module.exports = {
  artistRouter
}
