const express = require('express')
const app = express()

const main = require('./router/main_route')

app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, (req, res) => res.sendFile(__dirname+'/public/index.html'))
}

app.use('/', main)

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});