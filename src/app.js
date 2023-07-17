import environment from "./config/environment.js";
import express, {json} from 'express'

const {PORT} = environment
const app = express ()
app.use(json())

app.get('/', function(req, res){
return res.send( {"msg": "Hola mundo"})
})


app.listen(PORT, () => { console.log(`APLICACION INICIARA EN EL PUERTO ${PORT}`)})
