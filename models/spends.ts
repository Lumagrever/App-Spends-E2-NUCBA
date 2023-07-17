import {Model, Schema, model} from "mongoose"

export interface ISpend {
    nombre_consumidor: string;
    apellido_consumidor: string;
    nombre_gasto: string;
    gasto: number;
    fecha_gasto: Date;
    state: boolean;
}

const SpendSchema = new Schema <ISpend>({
    nombre_consumidor:{
        type : String,
        required:true
    },
    apellido_consumidor:{
        type : String,
        required:true
    },
    nombre_gasto:{
        type : String,
        required:true
    },
    gasto:{
        type : Number,
        required: true
    },
    fecha_gasto:{
        date: { type: Date, default: Date.now },
    },
    state:{
        type: Boolean,
        required:true,
        default:true
    },

})

const Spend: Model<ISpend> = model<ISpend>("Spend", SpendSchema)

export default Spend