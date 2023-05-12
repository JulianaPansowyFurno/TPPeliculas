import express from "express";
import PeliculaRouter from "./src/controllers/peliculasController.js";

const app = express();
const port = 5000;

app.use(express.json());

app.use("/Movie", PeliculaRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});