// Importacion de Express y Crypto de NodeJS
const express = require("express");
const crypto = require("crypto");

// Importacion del json de peliculas
const movies = require("./movies.json");

//Importacion de los Metodos ZOD de la validacion
const { validateMovie, validatePartialMovie } = require("./Schema.js");

// Creacion,Middleware y Seguridad
const app = express();
app.use(express.json());
app.disable("x-powered-by");

// Creacion del Puerto
const PORT = process.env.PORT ?? 1234;

// Origenes Aceptados
const ACCEPTED_ORIGINS = [
    "http://localhost:8080",
    "http://localhost:1234",
    "http://localhost:3000",
    "http://127.0.0.1:5500",
    "http://movies;.com",
    "https://api-rest-auco.onrender.com",
];

// GET de Peliculas
app.get("/movies", (req, res) => {
    const origin = req.header("origin");
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter((movie) =>
            movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
        );
        return res.json(filteredMovies);
    }
    res.json(movies);
});

// GET de Pelicula especifica
app.get("/movies/:id", (req, res) => {
    const origin = req.header("origin");
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === id);
    if (movie) return res.json(movie);

    res.status(404).json({ message: "Pelicula no encontrada" });
});

// POST de Pelicula
app.post("/movies", (req, res) => {
    const origin = req.header("origin");
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    const result = validateMovie(req.body);

    if (result.error) {
        return res
            .status(400)
            .json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data,
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// DELETE de Pelicula especifica
app.delete("/movies/:id", (req, res) => {
    const origin = req.header("origin");
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    const { id } = req.params;
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({ message: "Pelicula no encontrada" });
    }

    movies.splice(movieIndex, 1);

    return res.json({ message: "Movie Deleted" });
});

// PATCH de Pelicula especifica
app.patch("/movies/:id", (req, res) => {
    const origin = req.header("origin");
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    const result = validatePartialMovie(req.body);

    if (result.error) {
        return res
            .status(400)
            .json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({ message: "Pelicula no encontrada" });
    }

    const updateMovie = {
        ...movies[movieIndex],
        ...result.data,
    };

    movies[movieIndex] = updateMovie;

    return res.json(updateMovie);
});

// CORS Preflight
app.options("/movies/:id", (req, res) => {
    const origin = req.header("origin");
    if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        res.header("Access-Control-Allow-Origin", origin);
    }

    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
    res.send(200);
});

// Iniciando el Servidor
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
