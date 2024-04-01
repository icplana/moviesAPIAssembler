import config from './config/config'
import app from './server'
import mongoose from 'mongoose'
import express from 'express';
import userRouter from './routes/user.routes';


const PORT = config.app.PORT

app.use(express.json());
app.use(express.text());
app.use( "/users", userRouter )


const bootstrap = async () => {

    try {
        await mongoose.connect(config.app.MONGO_URL)
        console.log('connected')
        mongoose.connection.on('error', err => console.log(err))
    } catch (error) {
        console.log(error)
    }
    
    app.listen(PORT, () => {
      console.log("Servidor levantado en " + PORT);
    });
  
  }
  
  bootstrap()
  