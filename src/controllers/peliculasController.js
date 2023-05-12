import { Router } from 'express';
import PeliculaService from '../servicios/PeliculaService.js';


const router = Router();
const peliculaService = new PeliculaService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const peliculas = await peliculaService.getPeliculas();

  return res.status(200).json(peliculas);
});

// router.get('/:id', async (req, res) => {
//   console.log(`Request URL Param: ${req.params.id}`);
//   console.log(`This is a get operation`);

//   const pizza = await pizzaService.getPizzaById(req.params.id);

//   return res.status(200).json(pizza);
// });

// router.post('', async (req, res) => {
//   console.log(`This is a post operation`);

//   const pizza = await pizzaService.createPizza(req.body);

//   return res.status(201).json(pizza);
// });

// router.put('/:id', async (req, res) => {
//   console.log(`Request URL Param: ${req.params.id}`);
//   console.log(`This is a put operation`);

//   const pizza = await pizzaService.updatePizzaById(req.body);

//   return res.status(200).json(pizza);
// });

// router.delete('/:id', async (req, res) => {
//   console.log(`Request URL Param: ${req.params.id}`);
//   console.log(`This is a delete operation`);

//   const pizza = await pizzaService.deletePizzaById(req.params.id);

//   return res.status(200).json(pizza);
// });

export default router;