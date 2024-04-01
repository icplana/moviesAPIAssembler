import  { Router } from "express"
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from "../controllers/user.controllers"

const userRouter = Router()

userRouter.get( "/", getAllUser )
userRouter.get( "/:userId", getUserById )
userRouter.post( "/", createUser )
userRouter.put( "/", updateUser )
userRouter.delete( "/:userId", deleteUser )

export default userRouter