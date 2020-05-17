const fetch = require('node-fetch');

async function getRate() {
    try{
        const res = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
        let data = await res.json();
        return  data
    }catch(err){
        console.log(err)
    } 
  }

module.exports = getRate()