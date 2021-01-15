const fetch = require('node-fetch')
const url = 'api/currency'

class CurrencyService {
  static getNBRBCurrency = async () => {
    try {
      const res = await fetch(`${url}/NBRB`);

      const data = await res.json();
      return data
    } catch (err) {

      console.error(err);
    }
  }

  static getCRBCurrency = async () => {
    try {
      const res = await fetch(`${url}/CRB`);

      const data = await res.json();
      return data
    } catch (err) {

      console.error(err);
    }
  }

  static getBTCCurrency = async () => {
    try {
      const res = await fetch(`${url}/BTC`);

      const data = await res.json();

      return data
    } catch (err) {

      console.error(err);
    }
  }
  static getETHCurrency = async () => {
    try {
      const res = await fetch(`${url}/ETH`);

      const data = await res.json();

      return data
    } catch (err) {

      console.error(err);
    }
  }
  static fromUSDtoBTC = async (body) => {
    try {
      const query = await fetch(`${url}/USDtoBTC`,
        {
          method: 'post',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });

      const responseJSON = await query.json();
      return responseJSON
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CurrencyService