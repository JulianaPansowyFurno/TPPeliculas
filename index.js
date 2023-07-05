import express from "express";
import passport from "passport";
import PeliculaRouter from "./src/controllers/peliculasController.js";
import PersonajeRouter from "./src/controllers/personajesController.js";
import { jwtStrategy } from "./src/common/jwt.strategy.js";
import authController from "./src/controllers/authController.js";
import 'dotenv/config'
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
const port = 5000;

passport.use(jwtStrategy);
app.use(passport.initialize());


app.use(express.json());

app.use("/movie", PeliculaRouter);
app.use("/character", PersonajeRouter);
app.use("/auth/login", authController);

express.router.use('/api-docs', swaggerUi.serve);
express.router.get('/api-docs', swaggerUi.setup(swaggerDocument));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(port, () => {
  console.log(`Listening on port ${5000}`);
});