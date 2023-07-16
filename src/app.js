import express, {json} from 'express'
const app = express ()
app.use(json())

app.get('/', function(req, res){
return res.send( {"msg": "Hola mundo"})
})


app.listen(3000)
