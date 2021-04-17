import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './interfaces/clients.interface';


@Injectable()
export class ClientsService {
    constructor(@InjectModel('Client')private readonly clientModel:Model<Client>){}
    
}
