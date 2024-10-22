// Importación de los métodos de validación de ZOD
import { validateMovie, validatePartialMovie } from "../Schemas/Schema.js";

export class MovieController {
    constructor({ movieModel }) {
        this.movieModel = movieModel;
    }

    Todo = async (req, res) => {
        const movies = await this.movieModel.Todo();
        res.render("Pagina1", { movies: movies });
    };

    getALL = async (req, res) => {
        const { genre } = req.query;
        const movies = await this.movieModel.getAll({ genre });

        //Que es lo que Renderiza
        res.render("Pagina1", { movies: movies });
    };

    getById = async (req, res) => {
        const { id } = req.params;
        const movie = await this.movieModel.getByID({ id });

        if (movie && movie != undefined) {
            res.render("Pagina2", { movie: movie[0] });
        } else {
            res.status(404).render("error", {
                status: 404,
                message: "Not Found",
            });
        }
    };

    create = async (req, res) => {
        const result = validateMovie(req.body);

        if (result.error) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const newMovie = await this.movieModel.create({ input: result.data });
        res.status(201).json(newMovie);
    };

    delete = async (req, res) => {
        const { id } = req.params;
        const movieIndex = await this.movieModel.delete({ id });

        if (!movieIndex)
            return res.status(404).json({ message: "Pelicula no encontrada" });

        return res.json({ message: "Movie Deleted" });
    };

    update = async (req, res) => {
        const result = validatePartialMovie(req.body);

        if (result.error) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const { id } = req.params;
        const updatedMovie = await this.movieModel.update({
            id,
            input: result.data,
        });

        return res.json(updatedMovie);
    };
}
