// Importes
import express from "express";
import { crearRouter } from "Routes/Routes.js";
import { miCors } from "./Middlewares/Cors.js";
import { FoodModel } from "./Models/Food.js";
import MongoDB from "./Config/MongoDB.js";

// Configuración de Express
const app = express();
app.use(express.json());
app.use(miCors());

// Conexión a MongoDB
MongoDB();

// Rutas principales
app.use(crearRouter({ foodModel: FoodModel }));

// Inicialización del servidor
const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
