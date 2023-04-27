require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./database');
const routes = require('./routes');


const app = express();


// Conexão com o banco de dados

connectDB();

// Rotas

app.use(cors());
app.use(express.json());
app.use(routes);

// Inicialização do servidor

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});
