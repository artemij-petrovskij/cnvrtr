'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const bodyParser = require('body-parser');
const cors = require('cors');
const main = require('../router/currencyRoute');
app.use(express_1.default.static(path_1.default.join(__dirname, '../', 'public')));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.sendFile(path_1.default.join(__dirname, '../', 'public/index.html')));
console.log(path_1.default.join(__dirname, '../', 'public/index.html'));
app.use('/api/currency', main);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
