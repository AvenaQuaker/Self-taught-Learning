// Importacion de ZOD Verifications
import z from "zod";

// Definicion del esquema de datos para el objeto pelicula
const movieSchema = z.object({
    title: z.string({
        invalid_type_error: "Movie most be a string",
        required_error: "Movie Title is required",
    }),
    year: z.number().int().min(1880).max(new Date().getFullYear()),
    director: z.string().min(1).max(100),
    duration: z.number().positive().int(),
    rate: z.number().min(0).max(10).default(8),
    poster: z.string().url({
        message: "Poster most be an URL",
    }),
    genre: z.array(
        z.enum([
            "Action",
            "Adventure",
            "Comedy",
            "Crime",
            "Drama",
            "Fantasy",
            "Horror",
            "Thriller",
            "Sci-Fi",
        ]),
        {
            required_error: "Movie Genre is Required",
            invalid_type_error:
                "Movie Genre must be one of the following: Action, Adventure, Comedy, Drama, Fantasy, Horror, Thriller, Sci-Fi",
        }
    ),
});

//Funciones de Validacion
export function validateMovie(object) {
    return movieSchema.safeParse(object);
}
export function validatePartialMovie(object) {
    return movieSchema.partial().safeParse(object);
}
