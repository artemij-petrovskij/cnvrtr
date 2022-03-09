import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class ExchangeRatesService {

    async getExchangeRatesNBRB() {
        try {
            const data = await fetch(
                `https://www.nbrb.by/API/ExRates/Rates?Periodicity=0`
            );
            const jsondata = await data.json();

            return jsondata

        } catch (err) {
            console.error(`fetch error getExchangeRatesNBRB: ${err}`);
        }
    }

    async getExchangeRatesCBR() {
        try {
            const data = await fetch(
                `https://www.cbr-xml-daily.ru/latest.js`
            );
            const jsondata = await data.json();

            return jsondata

        } catch (err) {
            console.error(`fetch error getExchangeRatesCBR: ${err}`);
        }
    }

    async getExchangeRatesOKEX() {
        try {
            const data = await fetch(
                `https://www.okex.com/api/v5/market/index-tickers?quoteCcy=USDT`
            );
            const jsondata = await data.json();

            return jsondata.data

        } catch (err) {
            console.error(`fetch error getExchangeRatesOKEX: ${err}`);
        }
    }

    async getExchangeRatesBybit() {
        try {
            const data = await fetch(
                `https://api.bytick.com/v2/public/tickers`
            );
            const jsondata = await data.json();

            return jsondata.result

        } catch (err) {
            console.error(`fetch error getExchangeRatesBybit: ${err}`);
        }
    }
}
