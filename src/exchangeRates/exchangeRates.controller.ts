import { Controller, Get } from '@nestjs/common';
import { ExchangeRatesService } from "./exchangeRates.service";

@Controller('/api')
export class ExchangeRatesController {
    constructor(private exchangeRatesService: ExchangeRatesService) { }

    @Get('/currency/nbrb')
    getExchangeRateNBRB() {
        return this.exchangeRatesService.getExchangeRateNBRB();
    }

    @Get('/currency/crb')
    getExchangeRateCBR() {
        return this.exchangeRatesService.getExchangeRateCBR();
    }

    @Get('/currency/index-tickers')
    getExchangeRateOKEX() {
        return this.exchangeRatesService.getExchangeRateOKEX();
    }
}
