import { Controller, Get } from '@nestjs/common';
import { ExchangeRatesService } from "./exchangeRates.service";

@Controller('/api')
export class ExchangeRatesController {
    constructor(private exchangeRatesService: ExchangeRatesService) { }

    @Get('/currency/nbrb')
    getExchangeRatesNBRB() {
        return this.exchangeRatesService.getExchangeRatesNBRB();
    }

    @Get('/currency/crb')
    getExchangeRatesCBR() {
        return this.exchangeRatesService.getExchangeRatesCBR();
    }

    @Get('/currency/okex-index-tickers')
    getExchangeRatesOKEX() {
        return this.exchangeRatesService.getExchangeRatesOKEX();
    }

    @Get('/currency/bybit-index-tickers')
    getExchangeRatesBybit() {
        return this.exchangeRatesService.getExchangeRatesBybit();
    }

}
