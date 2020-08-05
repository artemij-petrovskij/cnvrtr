const fetch = require('node-fetch')
const url = 'api/currency/'

class CurrencyService {
    static getNBRBCurrency = async () => {
        try {
          const res = await fetch(`${url}NBRB`);
    
          const data = await res.json();
          return data
        } catch (err) {
    
          console.error(err);
        }
    }
    
    static getCRBCurrency = async () => {
      try {
        const res = await fetch(`${url}CRB`);
  
        const data = await res.json();
        return data
      } catch (err) {
  
        console.error(err);
      }
  }
}

module.exports = CurrencyService