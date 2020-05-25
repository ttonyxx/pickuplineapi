require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.set('view-engine', 'ejs')

const linesRouter = require('./routes/lines')
app.use('/lines', linesRouter)

app.get('/', (req, res) => {
    res.render('index.ejs', { url: process.env.URL })
}) 

app.listen(3000, () => {
    console.log("Server has started")
})