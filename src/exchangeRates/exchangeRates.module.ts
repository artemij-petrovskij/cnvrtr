import { Module } from '@nestjs/common';
import { ExchangeRatesController } from './exchangeRates.controller';
import { ExchangeRatesService } from './exchangeRates.service';

@Module({
  controllers: [ExchangeRatesController],
  providers: [ExchangeRatesService]
})
export class ExchangeRatesModule {}
