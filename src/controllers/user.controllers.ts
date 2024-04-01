import  { Request, Response } from "express"

export const getAllUser = ( request:Request, response: Response ) => {
    response.send("hola desde controles")
}


export const createUser = ( req:Request, res:Response ) => {
    res.send('user created')
}

export const updateUser = ( req:Request, res:Response ) => {
    res.send('user updated')
}

export const deleteUser = ( req:Request, res:Response ) => {
    console.log(req.params)
    res.send('user deleted')
}