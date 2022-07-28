import mongoose from "mongoose";


const dbConnection = async ()=>{
    try {
        await mongoose.connect( process.env.MONGODB_CNN || "");
        console.log(`Base de datos conectada...`);
        
    } catch (error) {
        console.log(`No se pudo conectar a base de datos ${process.env.MONGODB_CNN}`);
        throw new Error(`Error al conectarse a la base de datos`);
    }

}

export{
    dbConnection
}