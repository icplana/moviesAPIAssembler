import mongoose from "mongoose";


export const genreSchema = new mongoose.Schema({
    _id: String,
    name: String,
})


const genreModel = mongoose.model('Genre', genreSchema )

export default genreModel