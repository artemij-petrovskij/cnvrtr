const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/NBRB', async function (req, res) {

    try {
        const data = await fetch(`http://www.nbrb.by/api/exrates/rates?periodicity=0`);
        const jsondata = await data.json();
        res.json(jsondata)
        res.end()
    } catch (err) {
        console.log('connection error')
        console.error(err);
        
    }
   
});
router.get('/CRB', async function (req, res) {

    try {
        const data = await fetch(`https://www.cbr-xml-daily.ru/latest.js`);
        const jsondata = await data.json();
        res.json(jsondata)
        res.end()
    } catch (err) {
        console.log('connection error')
        console.error(err);
        
    }
   
});

module.exports = router