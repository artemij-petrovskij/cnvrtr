const fetch = require('node-fetch');
const url = 'api/currency';

class CurrencyService {
  static fetchCurrency = async (route) => {
    try {
      const res = await fetch(`api/currency${route}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = CurrencyService;
