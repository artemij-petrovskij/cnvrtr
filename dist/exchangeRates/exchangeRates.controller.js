"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRatesController = void 0;
const common_1 = require("@nestjs/common");
const exchangeRates_service_1 = require("./exchangeRates.service");
let ExchangeRatesController = class ExchangeRatesController {
    constructor(exchangeRatesService) {
        this.exchangeRatesService = exchangeRatesService;
    }
    getExchangeRatesNBRB() {
        return this.exchangeRatesService.getExchangeRatesNBRB();
    }
    getExchangeRatesCBR() {
        return this.exchangeRatesService.getExchangeRatesCBR();
    }
    getExchangeRatesOKEX() {
        return this.exchangeRatesService.getExchangeRatesOKEX();
    }
    getExchangeRatesBybit() {
        return this.exchangeRatesService.getExchangeRatesBybit();
    }
};
__decorate([
    (0, common_1.Get)('/currency/nbrb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExchangeRatesController.prototype, "getExchangeRatesNBRB", null);
__decorate([
    (0, common_1.Get)('/currency/crb'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExchangeRatesController.prototype, "getExchangeRatesCBR", null);
__decorate([
    (0, common_1.Get)('/currency/okex-index-tickers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExchangeRatesController.prototype, "getExchangeRatesOKEX", null);
__decorate([
    (0, common_1.Get)('/currency/bybit-index-tickers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExchangeRatesController.prototype, "getExchangeRatesBybit", null);
ExchangeRatesController = __decorate([
    (0, common_1.Controller)('/api'),
    __metadata("design:paramtypes", [exchangeRates_service_1.ExchangeRatesService])
], ExchangeRatesController);
exports.ExchangeRatesController = ExchangeRatesController;
//# sourceMappingURL=exchangeRates.controller.js.map