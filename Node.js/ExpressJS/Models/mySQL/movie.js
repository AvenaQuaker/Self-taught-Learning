// Importacion de dependencias
import { randomUUID } from "crypto";
import mysql from "mysql2/promise";

const config = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "sonic123@",
    database: "moviesdb",
};

const connection = await mysql.createConnection(config);

export class movieModel {
    static async Todo() {
        const query = `
        SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id 
        FROM movie `;

        const [result] = await connection.query(query);
        return result;
    }

    static async getAll({ genre }) {
        const query = `
        SELECT title, year, director, duration, poster, rate, g.name as genre, BIN_TO_UUID(m.id) as id 
        FROM movie m
        JOIN movie_genres l on l.movie_id = m.id
        JOIN genre g on g.id = l.genre_id
        WHERE g.name = ?;
    `;

        const [result] = await connection.query(query, [genre]);

        return result;
    }

    static async getByID({ id }) {
        const query = `
        SELECT title, year,director,duration,poster,rate,BIN_TO_UUID(id) id 
        FROM movie
        WHERE BIN_TO_UUID(id) = ?;`;

        const [result] = await connection.query(query, [id]);

        return result;
    }

    static async create({ input }) {
        const query1 = `
        INSERT INTO movie (id,title, year, director, duration, poster, rate)
        VALUES (UUID_TO_BIN(?),?,?,?,?,?,?);`;

        const query2 = `
        INSERT INTO movie_genres (movie_id, genre_id) 
        VALUES (UUID_TO_BIN(?), ?);`;

        const query3 = `
        SELECT * FROM genre`;

        const id = randomUUID();

        const movieData = await connection.query(query1, [
            id,
            input.title,
            input.year,
            input.director,
            input.duration,
            input.poster,
            input.rate,
        ]);

        const [genres] = await connection.query(query3);
        const movieGenres = input.genre;
        const movieInsertions = [];
        genres.forEach((genre) => {
            if (movieGenres.includes(genre.name)) {
                movieInsertions.push(genre.id);
            }
        });

        movieInsertions.forEach((genreID) => {
            connection.query(query2, [id, genreID]);
        });

        const newMovie = {
            id,
            ...input,
        };

        const result = { newMovie };
        return result;
    }

    static async delete({ id }) {
        const query = `
        DELETE FROM movie WHERE id = UUID_TO_BIN(?);`;

        const [movieDeletion] = await connection.query(query, id);

        return movieDeletion;
    }

    static async update({ id, input }) {
        let query = `
        UPDATE movie SET `;
        const updates = [];
        const values = [];

        for (const [key, value] of Object.entries(input)) {
            updates.push(`${key} = ?`);
            values.push(value);
        }

        query += updates.join(", ");
        query += ` WHERE id = UUID_TO_BIN(?);`;

        values.push(id);

        const [movieUpdate] = await connection.query(query, values);

        return movieUpdate;
    }
}
