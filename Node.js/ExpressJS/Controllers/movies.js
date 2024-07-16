//Importacion de los Modelos
import { movieModel } from "../Models/local-file-system/movie.js";

// Importación de los métodos de validación de ZOD
import { validateMovie, validatePartialMovie } from "../Schemas/Schema.js";

export class MovieController {
    static async getALL(req, res) {
        const { genre } = req.query;
        const movies = await movieModel.getALL({ genre });

        //Que es lo que Renderiza
        res.json(movies);
    }

    static async getById(req, res) {
        const { id } = req.params;
        const movie = await movieModel.getByID({ id });
        if (movie) return res.json(movie);

        //Que es lo que Renderiza
        res.status(404).json({ message: "Pelicula no encontrada" });
    }

    static async create(req, res) {
        const result = validateMovie(req.body);

        if (result.error) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const newMovie = await movieModel.create({ input: result.data });
        res.status(201).json(newMovie);
    }

    static async delete(req, res) {
        const { id } = req.params;
        const movieIndex = await movieModel.delete({ id });

        if (!movieIndex)
            return res.status(404).json({ message: "Pelicula no encontrada" });

        return res.json({ message: "Movie Deleted" });
    }

    static async update(req, res) {
        const result = validatePartialMovie(req.body);

        if (result.error) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const { id } = req.params;
        const updatedMovie = await movieModel.update({
            id,
            input: result.data,
        });

        return res.json(updatedMovie);
    }
}
