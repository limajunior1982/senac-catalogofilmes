import 'dotenv/config'
import express from 'express'
import cors from 'cors'


const servidor = express();
servidor.use(cors());
servidor.use(express.json());


const PORT = process.env.PORT;
servidor.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));