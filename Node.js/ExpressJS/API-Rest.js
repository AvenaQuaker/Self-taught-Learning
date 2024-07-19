// Importación de módulos de Node.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createHomeRouter, createMovieRouter } from "./Routes/movies.js";
import { corsMiddleware } from "./Middlewares/Cors.js";
//import { movieModel } from "./Models/mySQL/movie.js";
import { movieModel } from "./Models/local-file-system/movie.js";

// Creacion,Middleware y Seguridad
const app = express();
app.use(express.json());
app.use(corsMiddleware());
app.disable("x-powered-by");

// Obtener el directorio base correctamente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/", createHomeRouter());
app.use("/movies", createMovieRouter({ movieModel: movieModel }));

// Creacion del Puerto
const PORT = process.env.PORT ?? 1234;

// Iniciando el Servidor
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
