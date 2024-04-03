import  { Request, Response } from "express"
import prisma from "../db/prismaClient"



export const getAllUser = async ( request:Request, response: Response ) => {
    try {
        console.log('test')
        const users = await prisma.user.findMany()
        console.log(users)
    
        return response.send(users)
    } catch (error) {
        console.log(error)
        return response.send(error)
    }
}

export const getUserById = async ( request:Request, response: Response ) => {
    const userId = request.params.userId

    try {
        
        const user = await prisma.user.findUnique({
            where: {
              id: userId,
            },
          })

          response.status(201).send(user)
    } catch (error) {
        response.status(400).send(error)
    }




    
}

export const createUser = async ( req:Request, res:Response ) => {
    
   
    const { name, email, password } = req.body;

    try {
      const newUser = await prisma.user.create({
        data:{ name, email, password }
      });
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).send(error);
    }
  
    
}

export const updateUser = async ( req:Request, res:Response ) => {

    const { name, email, password, userId } = req.body;

    try {
        const userUpdated = await prisma.user.update({
        where: {id:userId},
        data:{name, email, password}
        })
        res.status(201).send(userUpdated)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}

export const deleteUser = async ( req:Request, res:Response ) => {

    const { userId } = req.params;

    try {
      const userDeleted = await prisma.user.delete({ 
       where: { id: userId}
      })
      res.status(200).send(userDeleted)
    } catch (error) {
      res.status(400).send(error)
    }
}
