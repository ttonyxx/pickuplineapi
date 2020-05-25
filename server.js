const express = require('express')
const app = express()

app.use(express.json())
app.set('view-engine', 'ejs')

const linesRouter = require('./routes/lines')
app.use('/lines', linesRouter)

app.get('/', (req, res) => {
    res.render('index.ejs', { url: 'getpickuplines.herokuapp.com' })
}) 

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started")
})