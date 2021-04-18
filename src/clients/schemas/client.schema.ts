import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: number;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop()
  nif: string;

  @Prop({ required: true })
  appointment: string[];

  @Prop( { default: { product: String, sessions: Number }})
  bono: object;
}

export const ClientSchema = SchemaFactory.createForClass(Client);


/* export const ClientSchema:Schema = new Schema({
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
})

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
} */


