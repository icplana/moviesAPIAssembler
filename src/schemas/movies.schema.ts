import mongoose from "mongoose";
import { genreSchema } from "./genre.schema";


export const moviesSchema = new mongoose.Schema({
    _id: String,
    name: String,
    poster_image: String,
    score: String,
    genre: [genreSchema]
})


const movieModel = mongoose.model('Movie', moviesSchema )

export default movieModel