import express from 'express'
import router from './Routes/routes.js'

//Libreria que nos permite trabajar con los metodos Post Put Delete 
import cors from 'cors'



const app = express();
//usando cors con express
app.use(cors());
//utilizamos el formato Json desde express
app.use(express.json());

//aca definimos nuestra ruta principal
app.use('/',router);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`El Servidor esta corriendo en http://localhost:${PORT}`)
})