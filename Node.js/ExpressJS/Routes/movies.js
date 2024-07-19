//Importacion de las Dppendencias
import { Router } from "express";
import { MovieController } from "../Controllers/movies.js";
import { HomeController } from "../Controllers/Home.js";

// Controlacion de Pagina de Inicio
export const createHomeRouter = () => {
    const homeRouter = new Router();
    const homeController = new HomeController();

    homeRouter.get("/", homeController.Index);

    return homeRouter;
};

// Creacion del Router
export const createMovieRouter = ({ movieModel }) => {
    const moviesRouter = new Router();
    const movieController = new MovieController({ movieModel: movieModel });

    // RUTAS
    moviesRouter.get("/", movieController.Todo);
    moviesRouter.get("/", movieController.getALL);
    moviesRouter.get("/:id", movieController.getById);
    moviesRouter.post("/", movieController.create);
    moviesRouter.delete("/:id", movieController.delete);
    moviesRouter.patch("/:id", movieController.update);

    return moviesRouter;
};
