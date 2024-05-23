import { Router } from "express";
import { createMovie, getAllMovies } from "../controllers/movie.controllers";

const movieRoutes = Router();

movieRoutes.get("/", getAllMovies)
movieRoutes.post("/", createMovie)

export default movieRoutes;