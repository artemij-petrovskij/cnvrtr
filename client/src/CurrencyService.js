const fetch = require('node-fetch');


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

  static fng = async () => {
    try {
      const res = await fetch(`https://api.alternative.me/fng/`);
      const data = await res.json();
  
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = CurrencyService;
