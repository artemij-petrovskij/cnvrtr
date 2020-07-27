const fetch = require('node-fetch')

class CurrencyService {
    static getCurrency = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api`);
    
          const data = await res.json();
          return data
        } catch (err) {
    
          console.error(err);
        }
    }
}

module.exports = CurrencyService