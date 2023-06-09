import { Router } from 'express';
import AuthService from "../servicios/authService.js";

const router = Router();
const authService = new AuthService();

router.get('/', async (req, res) => {
  console.log(`This is a get operation`);
 
  const authcontroller = await authService.getSignedToken();
  
  return res.status(200).json(authcontroller);
});

export default router;