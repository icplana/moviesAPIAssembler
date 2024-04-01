import  { Request, Response } from "express"
import userModel from "../schemas/user.schema"


export const getAllUser = async ( request:Request, response: Response ) => {
    const users = await userModel.find({})


    return response.send(users)
}

export const getUserById = async ( request:Request, response: Response ) => {
    const userId = request.params.userId

    const user = await userModel.findById(userId).exec()

    if (!user) return response.status(404).send()

    return response.send(user)


    
}

export const createUser = async ( req:Request, res:Response ) => {
    
    const { userId, name, email, password } = req.body

    if ( !userId || !name || !email || !password ) return res.status(400).send()

    const userById = await userModel.findById(userId).exec()   
    if (userById) return res.status(409).send('id in use')

    const userByEmail = await userModel.find({email}).exec()
    console.log(userByEmail)   
    if (userByEmail.length > 0 ) return res.status(409).send('email in use')

    const newUser = new userModel({
        _id: userId,
        name,
        email,
        password,
        movies: []
    })

    await newUser.save()

    return res.send('usuario registrado')
    
}

export const updateUser = async ( req:Request, res:Response ) => {

    const { userId, name, email, password, movies } = req.body

    if ( !userId ) return res.status(400).send('no id')

    const user = await userModel.findById(userId).exec()

    if (!user) return res.status(404).send('user not found')

    if ( typeof name === 'string' ) user.name = name
    if ( typeof password === 'string' ) user.password = password
    if ( movies ) user.movies = movies

    try {
        
        await user.save()
    } catch (error) {
        console.log(error)
        return res.status(406).send('wrong movie format')
    }

    return res.send('user updated')
}

export const deleteUser = async ( req:Request, res:Response ) => {
    const userId = req.params.userId
    
    const user = await userModel.findById(userId).exec()

    if (!user) return res.status(404).send('user not found')

    // await userModel.deleteOne({_id: userId}).exec()
    await user.deleteOne()

    return res.send('user deleted')
}

