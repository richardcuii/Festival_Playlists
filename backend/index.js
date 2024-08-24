import dotenv from 'dotenv'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
    res.send('Server is running')
})

// login
app.get('/login', (req, res) => {
    const state = generateRandomString(16)
    const scope = 'user-read-private user-read-email'

    res.redirect('https://accounts.spotify.com/authorize?' + querystring.stringify({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        state,
    }))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})