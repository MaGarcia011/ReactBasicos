import  express  from "express";
import  cors  from 'cors';
import db from "./database/db.js";
import blogRoute from "./routes/routes.js"

const app = express()

app.use( cors())
app.use(express.json())
app.use('/blogs', blogRoute)

try {
    db.authenticate()
    console.log('Conexión exitosa')
} catch (error) {
    console.log('Fallo al conectar');
}

app.get('/',(req,res) =>{
    res.send('Hola')
})

app.listen(8000 , ()=>{
    console.log('Server UP running in http://localhost:8000/')
})