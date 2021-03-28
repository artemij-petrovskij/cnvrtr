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
      return data.USD.last
    } catch (err) {
      console.error(err);
    }
  }
  static getETHCurrency = async () => {
    try {
      const res = await fetch(`${url}/ETH`);

      const data = await res.json();

      return data.USD
    } catch (err) {
      console.error(err);
    }
  }

  static getADACurrency = async () => {
    try {
      const res = await fetch(`${url}/ADA`);
      const data = await res.json();
      return data.data[0].last
    } catch (err) {
      console.error(err);
    }
  }

  static getDOTCurrency = async () => {
    try {
      const res = await fetch(`${url}/DOT`);
      const data = await res.json();
      return data.data[0].last
    } catch (err) {
      console.error(err);
    }
  }

  static getXRPCurrency = async () => {
    try {
      const res = await fetch(`${url}/XRP`);
      const data = await res.json();
      return data.data[0].last
    } catch (err) {
      console.error(err);
    }
  }


}



module.exports = CurrencyService