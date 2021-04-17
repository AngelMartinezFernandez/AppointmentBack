import { Module } from '@nestjs/common';
import { ClientSchema } from './schemas/client.schema';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: 'Client', schema: ClientSchema }
    ]),
  ],
  controllers: [
      ClientsController
  ],
  providers: [
      ClientsService
  ]
})
export class ClientsModule {}
