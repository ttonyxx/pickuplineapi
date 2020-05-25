const express = require('express')
const app = express()

app.use(express.json())
app.set('view-engine', 'ejs')

const linesRouter = require('./routes/lines')
app.use('/lines', linesRouter)
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
    res.render('index.ejs', { url: 'getpickuplines.herokuapp.com' })
}) 

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started")
})