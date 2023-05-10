import express from "express";
import PeliculaRouter from "./src/servicios/PeliculaService.js";

const app = express();
const port = 5000;

app.use(express.json());

app.use("/Pelicula", PeliculaRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});