//Importacion de las Dppendencias
import { Router } from "express";

// Importación de los métodos de validación de ZOD
import { validateMovie, validatePartialMovie } from "./Schemas/Schema.js";

// Importación del json de películas
import { movieModel } from "../Models/movie.js";

// Creacion del Router
export const moviesRouter = new Router();

// RUTAS
moviesRouter.get("/", async (req, res) => {
    const { genre } = req.query;
    const movies = await movieModel.getALL({ genre });
    res.json(movies);
});

moviesRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const movie = await movieModel.getByID({ id });
    if (movie) return res.json(movie);

    res.status(404).json({ message: "Pelicula no encontrada" });
});

moviesRouter.post("/", async (req, res) => {
    const result = validateMovie(req.body);

    if (result.error) {
        return res
            .status(400)
            .json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = await movieModel.create({ input: result.data });
    res.status(201).json(newMovie);
});

moviesRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const movieIndex = await movieModel.delete({ id });

    if (!movieIndex)
        return res.status(404).json({ message: "Pelicula no encontrada" });

    return res.json({ message: "Movie Deleted" });
});

moviesRouter.patch("/:id", async (req, res) => {
    const result = validatePartialMovie(req.body);

    if (result.error) {
        return res
            .status(400)
            .json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updatedMovie = await movieModel.update({ id, input: result.data });
    movies[movieIndex] = updatedMovie;

    return res.json(updatedMovie);
});
