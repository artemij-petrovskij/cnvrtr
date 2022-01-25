'use strict';
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const main = require('../router/currencyRoute');
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../', 'public/index.html')));
console.log(path.join(__dirname, '../', 'public/index.html'))
app.use('/api/currency', main);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
