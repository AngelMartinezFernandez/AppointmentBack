import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ClientsModule, MongooseModule.forRoot('mongodb://localhost/appointmentdb')],
  controllers: [AppController, ClientsController],
  providers: [AppService, ClientsService],
})
export class AppModule {}
