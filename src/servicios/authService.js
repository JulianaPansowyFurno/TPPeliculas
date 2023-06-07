
export default getSignedToken = () => {
    const usuario = 'Alumno';
    const contraeña = 'Alumno';
    const token = jwt.sign(
      {
        payload: "custom payload",
        contraseñaUser: contraeña,
      },
      process.env.AUTH0_HS256_KEY,
      {
        issuer: "http://localhost/",
        subject: usuario,
        audience: ["http://localhost/"],
        expiresIn: 60 * 24 * 24,
      }
    );
  
    return token;
  };