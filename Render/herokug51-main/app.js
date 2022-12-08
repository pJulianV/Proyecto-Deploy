import express from 'express';
import {db} from './mongodb.js';
import cors from 'cors';
import {router} from './routes/routes.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/usuarios',router);


router.get('/', (req,res) => {
    res.send("🚀😎 Deploy en Heroku🚀🚀")
})

var PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Conectado en el servidor: http://localhost:${PORT}`)
})