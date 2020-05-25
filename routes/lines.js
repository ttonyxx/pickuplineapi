const express = require('express')
const router = express.Router()
const lines = [
    {
        id: 0,
        line: "Damn, I'm no weather man, but you can expect a couple inches tonight."
    },
    {
        id: 1,
        line: "Hey, my name's Microsft. Can I crash at your place tonight?"
    },
    {
        id: 2,
        line: "Did the sun come out or did you just smile at me?"
    }
]

// Getting all pick up lines
router.get('/', (req, res) => {
    res.json(lines)
})

// Getting random pick up lines
router.get('/random', (req, res) => {
    res.json(lines[Math.floor(Math.random() * lines.length)])
})


module.exports = router