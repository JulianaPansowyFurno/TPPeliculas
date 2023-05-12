import { Router } from 'express';
import PeliculaService from '../servicios/PersonajeService.js';


const router = Router();
const PersonajeService = new PersonajeService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const personajes = await personajeService.getPersonaje();

  return res.status(200).json(personajes);
});
