// Importación de módulos de Node.js
import express from "express";
import { moviesRouter } from "./Routes/movies.js";
import { corsMiddleware } from "./Middlewares/Cors.js";

// Creacion,Middleware y Seguridad
const app = express();
app.use(express.json());
app.use(corsMiddleware());
app.disable("x-powered-by");

// Rutas
app.use("/movies", moviesRouter);

// Creacion del Puerto
const PORT = process.env.PORT ?? 1234;

// Iniciando el Servidor
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
