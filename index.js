import express from "express";
import passport from "passport";
import PeliculaRouter from "./src/controllers/peliculasController.js";
import PersonajeRouter from "./src/controllers/personajesController.js";
import { jwtStrategy } from "./src/common/jwt.strategy.js";
import authController from "./src/controllers/authController.js";
import 'dotenv/config'

const app = express();
const port = 5000;

passport.use(jwtStrategy);
app.use(passport.initialize());


app.use(express.json());

app.use("/movie", PeliculaRouter);
app.use("/character", PersonajeRouter);
app.use("/auth/login", authController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});