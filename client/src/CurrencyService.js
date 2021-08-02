const fetch = require('node-fetch');
const url = 'api/currency';

class CurrencyService {
  static fetchCurrency = async (route) => {
    try {
      const res = await fetch(`api/currency/${route}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static getBTCCurrency = async () => {
    try {
      const res = await fetch(`${url}/BTC`);
      const currencydata = await res.json();
      return currencydata.data[0];
    } catch (err) {
      console.error(err);
    }
  };
 
  static getIndexTickers = async () => {
    try {
      const res = await fetch(`${url}/index-tickers`);
      const currencydata = await res.json();
      return currencydata;
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = CurrencyService;
