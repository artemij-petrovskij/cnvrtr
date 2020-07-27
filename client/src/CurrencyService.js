const fetch = require('node-fetch')

class CurrencyService {
    static getCurrency = async () => {
        try {
          const res = await fetch(`http://www.nbrb.by/api/exrates/rates?periodicity=0`);
    
          const data = await res.json();
          return data
        } catch (err) {
    
          console.error(err);
        }
    }
}

module.exports = CurrencyService