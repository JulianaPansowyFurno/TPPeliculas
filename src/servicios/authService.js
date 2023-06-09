import jwt from "jsonwebtoken";
import "dotenv/config";

export default class AuthService {

 getSignedToken = () => {
    const usuario = 'Alumno';
    const contraeña = 'Alumno';
    const token = jwt.sign(
      {
        payload: "custom payload",
        contraseñaUser: contraeña,
      },
      process.env.AUTH_HS256_KEY,
      {
        issuer: process.env.AUTH_ISSUER_URL,
        subject: usuario,
        audience: ["http://localhost/"],
        expiresIn: 60 * 24 * 24,
      }
    );
  
    return token;
  };
}