import express from "express";

import userRouter from "./routes/user.routes";
import movieRoutes from "./routes/movie.routes";
import genresRoutes from "./routes/genres.routes";

const cors = require("cors")
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
  }));

  
app.use("/user", userRouter);
app.use("/movie", movieRoutes);
app.use("/genres", genresRoutes);

export default app;