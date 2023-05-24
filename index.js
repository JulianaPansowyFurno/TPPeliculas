import express from "express";
import PeliculaRouter from "./src/controllers/peliculasController.js";
import PersonajeRouter from "./src/controllers/personajesController.js";

const app = express();
const port = 5001;

//http://localhost:5000/characters/5
app.use(express.json());

app.use("/movie", PeliculaRouter);
app.use("/characters", PersonajeRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});