import mongoose from "mongoose";

const MongoDB = async () => {
    try {
        const uri = "mongodb://localhost:27017/API-REST";
        await mongoose.connect(uri);
        console.log("Conexión exitosa con MongoDB");
    } catch (err) {
        console.error("Error al conectar con MongoDB: ", err);
        process.exit(1);
    }
};

export default MongoDB;
