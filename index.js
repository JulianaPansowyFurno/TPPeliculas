import express from "express";
import passport from "passport";
import PeliculaRouter from "./src/controllers/peliculasController.js";
import PersonajeRouter from "./src/controllers/personajesController.js";
import { jwtStrategy } from "./src/common/jwt.strategy.js";
import authController from "./src/controllers/authController.js";
import 'dotenv/config'

//Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiY3VzdG9tIHBheWxvYWQiLCJjb250cmFzZcOxYVVzZXIiOiJBbHVtbm8iLCJpYXQiOjE2ODYzMTc5ODYsImV4cCI6MTY4NjM1MjU0NiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3QvIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvIiwic3ViIjoiQWx1bW5vIn0.AXXIGjxODzIQPZM3uKhKa96akZULTgoVA_jS_qg8eFQ

const app = express();
const port = 5000;

passport.use(jwtStrategy);
app.use(passport.initialize());

//http://localhost:5000/characters/5
app.use(express.json());

app.use("/movie", PeliculaRouter);
app.use("/character", PersonajeRouter);
app.use("/auth/login", authController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});