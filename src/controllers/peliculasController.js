import { Router } from 'express';
import PeliculaService from '../servicios/PeliculaService.js';
import { Authenticate } from "../common/jwt.strategy.js";


const router = Router();
const peliculaService = new PeliculaService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  
  let name = req.query.name
  let order = req.query.order
  const peliculas = await peliculaService.BusquedaPeliculas(name, order);

  return res.status(200).json(peliculas);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);
  
  const peliculas = await peliculaService.PeliculaDetalles(req.params.id);

  return res.status(200).json(peliculas);
}); 

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);
  
  const pelicula = await peliculaService.createPelicula(req.body);
  return res.status(201).json(pelicula);
});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const pelicula = await peliculaService.deletePeliculaById(req.params.id);

  return res.status(200).json(pelicula);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const pelicula = await peliculaService.updatePeliculaById(req.params.id,req.body);

  return res.status(200).json(pelicula);
});

export default router;