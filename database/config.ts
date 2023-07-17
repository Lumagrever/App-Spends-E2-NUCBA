import mongoose from "mongoose";

export const connectDB = async():Promise<void> => {
    try{
        await mongoose.connect("mongodb+srv://userTest:userTest123123-@clustername.khximuw.mongodb.net/")
        console.log('Conectado a la base de datos')
    } catch(error) {
        console.log(error)
        throw new Error("Error al iniciar la base de datos")
    }
}