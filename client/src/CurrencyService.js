const fetch = require('node-fetch')
const url = 'api/'

class CurrencyService {
    static getCurrency = async () => {
        try {
          const res = await fetch(url);
    
          const data = await res.json();
          return data
        } catch (err) {
    
          console.error(err);
        }
    }
}

module.exports = CurrencyService