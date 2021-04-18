import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './interfaces/clients.interface';
import { ClientDTO } from './dto/clients.dto';

@Injectable()
export class ClientsService {
    constructor(@InjectModel('Client') private readonly clientModel: Model<Client>) {}

    async getClients(): Promise<Client[]> {
        const allClients = await this.clientModel.find();
        return allClients;
    }

    async getOneClient(clientID: string): Promise<Client> {
        const oneClient = this.clientModel.findById(clientID).exec();
        return oneClient;
    }

    async createNewClient(clientDTO: ClientDTO): Promise<Client> {
        const newClient = new this.clientModel(clientDTO);
        return newClient.save();
    }

    async updateOneClient(clientID: string, clientDTO: ClientDTO): Promise<Client> {
        const clientToUpdate = this.clientModel.findByIdAndUpdate(clientID, clientDTO,
            { new: true }).exec();
        return clientToUpdate;
    }

    async deleteClient(clientID: string): Promise<Client> {
        const clientToDelete = this.clientModel.findByIdAndDelete(clientID).exec();
        return clientToDelete;
    }
};
