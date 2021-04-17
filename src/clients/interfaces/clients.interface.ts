import { Document } from 'mongoose';

export interface Client extends Document {
  readonly name: string;

  readonly surname: string;

  readonly phoneNumber: number;

  readonly nif: string;

  readonly appointment: string[];

  readonly bono: object;
}
