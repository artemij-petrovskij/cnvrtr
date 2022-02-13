"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesService = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let ExchangeRatesService = class ExchangeRatesService {
    async getExchangeRateNBRB() {
        try {
            const data = await (0, node_fetch_1.default)(`https://www.nbrb.by/api/exrates/rates?periodicity=0`);
            const jsondata = await data.json();
            return jsondata;
        }
        catch (err) {
            console.error(`fetch error getExchangeRateNBRB: ${err}`);
        }
    }
    async getExchangeRateCBR() {
        try {
            const data = await (0, node_fetch_1.default)(`https://www.cbr-xml-daily.ru/latest.js`);
            const jsondata = await data.json();
            return jsondata;
        }
        catch (err) {
            console.error(`fetch error getExchangeRateCBR: ${err}`);
        }
    }
    async getExchangeRateOKEX() {
        try {
            const data = await (0, node_fetch_1.default)(`https://www.okex.com/api/v5/market/index-tickers?quoteCcy=USDT`);
            const jsondata = await data.json();
            return jsondata.data;
        }
        catch (err) {
            console.error(`fetch error getExchangeRateOKEX: ${err}`);
        }
    }
};
ExchangeRatesService = __decorate([
    (0, common_1.Injectable)()
], ExchangeRatesService);
exports.ExchangeRatesService = ExchangeRatesService;
//# sourceMappingURL=exchangeRates.service.js.map