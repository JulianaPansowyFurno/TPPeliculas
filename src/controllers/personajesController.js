import { Router } from 'express';
import PersonajeService from '../servicios/PersonajeService.js';


const router = Router();
const personajeService = new PersonajeService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const personajes = await personajeService.getPersonaje();

  return res.status(200).json(personajes);
});


router.post('', async (req, res) => {
    console.log(`This is a post operation`);
    
    const personajes = await personajeService.createPersonaje(req.body);
    return res.status(201).json(personajes);
    
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await personajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await personajeService.updatePersonajeById(req.params.id,req.body);

  return res.status(200).json(personaje);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);
  
  const personajes = await personajeService.PersonajesDetalles(req.params.id);

  return res.status(200).json(personajes);
});

export default router;