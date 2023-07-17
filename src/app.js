import environment from "./config/environment.js";
import express, {json} from 'express'
import productsRouter from "./resources/products/routes/products.routes.js";

const {PORT} = environment
const app = express ()
app.use(json())

app.get('/', function(req, res){
return res.send( {"msg": "Hola mundo"})
})

//Rutas de los recursos
app.use(productsRouter)

app.listen(PORT, () => { console.log(`APLICACION INICIARA EN EL PUERTO ${PORT}`)})
