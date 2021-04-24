import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ClientsModule, MongooseModule.forRoot('mongodb://localhost/appointmentdb', {
    useFindAndModify: true,
    useCreateIndex: true
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
