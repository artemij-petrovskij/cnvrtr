import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class ExchangeRatesService {

    async getExchangeRateNBRB() {
        try {
            const data = await fetch(
                `https://www.nbrb.by/api/exrates/rates?periodicity=0`
            );
            const jsondata = await data.json();

            return jsondata

        } catch (err) {
            console.error(`fetch error getExchangeRateNBRB: ${err}`);
        }
    }

    async getExchangeRateCBR() {
        try {
            const data = await fetch(
                `https://www.cbr-xml-daily.ru/latest.js`
            );
            const jsondata = await data.json();

            return jsondata

        } catch (err) {
            console.error(`fetch error getExchangeRateCBR: ${err}`);
        }
    }

    async getExchangeRateOKEX() {
        try {
            const data = await fetch(
                `https://www.okex.com/api/v5/market/index-tickers?quoteCcy=USDT`
            );
            const jsondata = await data.json();

            return jsondata.data

        } catch (err) {
            console.error(`fetch error getExchangeRateOKEX: ${err}`);
        }
    }
}
