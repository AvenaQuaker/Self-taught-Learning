// Importacion de dependencias
import { randomUUID } from 'crypto';

// Importación del json de películas
import movies from "../../movies.json" with { type: "json" };

// Clase Modelo Movie
export class movieModel {
    static async Todo() {
        return movies;
    }

    static async getALL({ genre }){
        if (genre) {
            return movies.filter((movie) =>
                movie.genre.some((g) => g.tolowercase() === genre.tolowercase())
            );
        }

        return movies;
    }

    static async getByID({id}){
        const movie = movies.find(movie => movie.id === id);
        return movie;
    }

    static async create({input}){
        const newMovie = {
            id: randomUUID(),
            ...input
        };
        movies.push(newMovie);
        return newMovie;
    }

    static async delete({id}){
        const movieIndex = movies.findIndex((movie) => movie.id === id);
        if(movieIndex === -1) return false

        movies.splice(movieIndex, 1);
        return true;
    }

    static async update({id, input}){
        const movieIndex = movies.findIndex((movie) => movie.id === id);
        if(movieIndex === -1) return false

        movies[movieIndex] = {
            ...movies[movieIndex],
            ...input};

        return movies[movieIndex];
    } 
}
