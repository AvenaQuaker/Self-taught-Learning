//Importacion de las Dppendencias
import { Router } from "express";
import crypto from "crypto";

// Importación de los métodos de validación de ZOD
import { validateMovie, validatePartialMovie } from "./Schemas/Schema.js";

// Importación del json de películas
import movies from "./movies.json" with { type: "json" };

// Creacion del Router
export const moviesRouter = new Router();

// RUTAS
moviesRouter.get("/", (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter((movie) =>
            movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
        );
        return res.json(filteredMovies);
    }
    res.json(movies);
});

moviesRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === id);
    if (movie) return res.json(movie);

    res.status(404).json({ message: "Pelicula no encontrada" });
})

moviesRouter.post('/', (req, res) => {
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
})

moviesRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({ message: "Pelicula no encontrada" });
    }

    movies.splice(movieIndex, 1);

    return res.json({ message: "Movie Deleted" });
});

moviesRouter.patch("/:id", (req, res) => {
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