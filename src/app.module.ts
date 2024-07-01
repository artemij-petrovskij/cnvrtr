import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeRatesModule } from './exchangeRates/exchangeRates.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

@Module({
  imports: [ExchangeRatesModule, ServeStaticModule.forRoot({
    // rootPath: path.resolve(__dirname, 'static'),
    rootPath:  path.basename('static'),

    exclude: ['/api'],

  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
