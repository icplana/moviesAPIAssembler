import { Router } from "express";
import { createGenres, getAllGenres } from "../controllers/genres.controllers";

const genresRoutes = Router();

genresRoutes.get("/", getAllGenres);
genresRoutes.post("/", createGenres);

export default genresRoutes;