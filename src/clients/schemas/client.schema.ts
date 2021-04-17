import {Schema} from 'mongoose';

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

})

