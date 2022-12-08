import mongoose, { Mongoose } from 'mongoose'
import {db} from '../mongodb.js'

const userSchema = new mongoose.Schema(
    {
        nomuser: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true,
            lowercase: true,
            unique: true
        },
         emailVerified: {
            type: Boolean,
            default: false,
            }
    },
    {
        timestamps: true,
        versionKey: false,
   }
);

export const usuario = mongoose.model('users',userSchema);
export default usuario;