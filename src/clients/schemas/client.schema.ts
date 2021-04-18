import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
/* import { Schema } from 'mongoose'; */
export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: number;

  @Prop({ unique: true })
  nif: string;

  @Prop({ required: true })
  appointment: string[];

  @Prop( { type: Object })
  bono: object;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

/* 
export const ClientSchema:Schema = new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    nif:{
        type: String,
        required: true,
        unique: true
    },
    appointment: {
        type: Array,
        default:[]
    },
    bono: {
        type: Object,
        default: {product: String, sessions: Number}
    }
});
 */

