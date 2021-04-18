import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res, Put, Delete } from '@nestjs/common';
import { Client } from './interfaces/clients.interface';
import { ClientDTO } from './dto/clients.dto';

import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {

    constructor(private clientService: ClientsService) {}

    @Get('/')
    async getAllClients(@Res() res): Promise<Client> {
        const allClients = await this.clientService.getClients();
        if (!allClients) throw new NotFoundException('Was an error, clients not found');
        return res.status(HttpStatus.OK).json({
            msg: 'Got all clients correctly',
            allClients
        });
    };

    @Get('/:clientID')
    async getOneClient(@Res() res, @Param('clientID') clientID): Promise<Client> {
        const oneClient = await this.clientService.getOneClient(clientID);
        if (!oneClient) throw new NotFoundException('Was an error, client not found');
        return res.status(HttpStatus.OK).json({
            msg: 'Got client correctly',
            oneClient
        });
    };

    @Post('/create-client')
    async createOneClient(@Res() res, @Body() clientDTO: ClientDTO) {
        const clientToCreate = await this.clientService.createNewClient(clientDTO);
        return res.status(HttpStatus.OK).json({
            msg: 'Client created correctly',
            clientToCreate
        });
    };

    @Put('/update-client/:clientID')
    async updateOneClientt(@Res() res, @Body() clientDTO: ClientDTO, @Param('clientID') clientID) {
        const clientToUpdate = await this.clientService.updateOneClient(clientID, clientDTO);
        if (!clientToUpdate) throw new NotFoundException('Imposible update client');
        return res.status(HttpStatus.OK).json({
            msg: 'Client updated',
            clientToUpdate
        });
    };

    @Delete('delete-client/:clientID')
    async deleteOneClient(@Res() res, @Param('clientID') clientID) {
        const clientToDelete = await this.clientService.deleteClient(clientID);
        if (!clientToDelete) throw new NotFoundException('Client does not exists');
        return res.status(HttpStatus.OK).json({
            msg: 'Deleted client correctly',
            clientToDelete
        });
    };
};
