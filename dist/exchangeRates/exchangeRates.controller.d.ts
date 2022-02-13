import { ExchangeRatesService } from "./exchangeRates.service";
export declare class ExchangeRatesController {
    private exchangeRatesService;
    constructor(exchangeRatesService: ExchangeRatesService);
    getExchangeRateNBRB(): Promise<any>;
    getExchangeRateCBR(): Promise<any>;
    getExchangeRateOKEX(): Promise<any>;
}
