const express = require('express')
const router = express.Router()
const fetch = require('../fetch/fetch')

router.get('/', async function (req, res) {
    const data = await fetch
        res.render('index',{
            title:'Курсы валют',
            USD: data[4].Cur_OfficialRate,
            EUR: data[5].Cur_OfficialRate,
            RUB: data[16].Cur_OfficialRate
        });
});

module.exports = router