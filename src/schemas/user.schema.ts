import mongoose from "mongoose";
import { moviesSchema } from "./movies.schema";
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    password: String,
    movies: [moviesSchema]
})

export const encryptPassword = async (password = 'password') => {
    const salt = await bcrypt.genSalt(4)
    const encryptedPass = await bcrypt.hash(password, salt)
    return encryptedPass
}

const userModel = mongoose.model('User', userSchema )

export default userModel