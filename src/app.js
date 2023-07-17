import environment from "./config/environment.js";
import express, { json } from 'express';
import productsRouter from "./resources/products/routes/products.routes.js";

const { PORT } = environment;
const app = express();
app.use(json());

app.get('/', function(req, res) {
  return res.send({ "msg": "Hola mundo" });
});

// Rutas de los recursos
app.use(productsRouter);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Aplicación iniciará en el puerto ${PORT}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`El puerto ${PORT} está siendo utilizado por otro proceso.`);
  } else {
    console.error('Ocurrió un error al iniciar el servidor:', error);
  }
});