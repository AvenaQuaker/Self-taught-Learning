//Importacion de las Dppendencias
import { Router } from "express";
import { MovieController } from "../Controllers/movies.js";

// Creacion del Router
export const moviesRouter = new Router();

// RUTAS
moviesRouter.get("/", MovieController.getALL);

moviesRouter.get("/:id", MovieController.getById);

moviesRouter.post("/", MovieController.create);

moviesRouter.delete("/:id", MovieController.delete);

moviesRouter.patch("/:id", MovieController.update);
