'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const main = require('./router/currencyRoute');
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.use('/api/currency', main);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
