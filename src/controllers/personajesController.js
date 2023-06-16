import { Router } from 'express';
import PersonajeService from '../servicios/PersonajeService.js';
import { Authenticate } from "../common/jwt.strategy.js";


const router = Router();
const personajeService = new PersonajeService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  let name = req.query.name
  let age = req.query.age
  let movie = req.query.movie
  const personajes = await personajeService.BusquedaPersonaje(name, age, movie);

  return res.status(200).json(personajes);
});

 router.post('', Authenticate, async (req, res) => {
    console.log(`This is a post operation`);
    
    const personajes = await personajeService.createPersonaje(req.body);
    return res.status(201).json(personajes);
});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await personajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await personajeService.updatePersonajeById(req.params.id,req.body);

  return res.status(200).json(personaje);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);
  
  const personajes = await personajeService.PersonajesDetalles(req.params.id);

  return res.status(200).json(personajes);
});
export default router;