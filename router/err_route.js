const express = require('express')
const router = express.Router()


router.get('/', function (req, res) {
    
        res.render('err',{
            title:'Ошибка'
        });

});

module.exports = router