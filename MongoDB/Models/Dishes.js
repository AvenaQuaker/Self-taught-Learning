import mongoose from "mongoose";

const dishSchema = new mongoose.Schema(
    {
        Key: Number,
        Nombre: String,
        Origen: String,
        Ingredientes: [String],
        Imagen: String,
    },
    {
        collection: "Dishes",
        versionKey: false,
    }
);

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
