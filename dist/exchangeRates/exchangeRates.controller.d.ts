import { ExchangeRatesService } from "./exchangeRates.service";
export declare class ExchangeRatesController {
    private exchangeRatesService;
    constructor(exchangeRatesService: ExchangeRatesService);
    getExchangeRatesNBRB(): Promise<any>;
    getExchangeRatesCBR(): Promise<any>;
    getExchangeRatesOKEX(): Promise<any>;
    getExchangeRatesBybit(): Promise<any>;
}
