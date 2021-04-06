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
      const currencydata = await res.json();
      return currencydata.data[0]
    } catch (err) {
      console.error(err);
    }
  }
  static getETHCurrency = async () => {
    try {
      const res = await fetch(`${url}/ETH`);
      const currencydata = await res.json();
      return currencydata.data[0]
    } catch (err) {
      console.error(err);
    }
  }

  static getADACurrency = async () => {
    try {
      const res = await fetch(`${url}/ADA`);
      const currencydata = await res.json();
      return currencydata.data[0]
    } catch (err) {
      console.error(err);
    }
  }

  static getDOTCurrency = async () => {
    try {
      const res = await fetch(`${url}/DOT`);
      const currencydata = await res.json();
      return currencydata.data[0]
    } catch (err) {
      console.error(err);
    }
  }

  static getXRPCurrency = async () => {
    try {
      const res = await fetch(`${url}/XRP`);
      const currencydata = await res.json();
      return currencydata.data[0]
    } catch (err) {
      console.error(err);
    }
  }

  static getBTTCurrency = async () => {
    try {
      const res = await fetch(`${url}/BTT`);
      const currencydata = await res.json();
      return currencydata.data[0]
    } catch (err) {
      console.error(err);
    }
  }


}



module.exports = CurrencyService