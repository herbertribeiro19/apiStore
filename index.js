const express = require('express');
const bodyParser = require('body-parser');
const swaggerDocs = require('./swagger');

const transactionRoutes = require('./Routes/transactionRoutes');
const userRoutes = require('./Routes/userRoutes');
const sequelize = require('./Config/database');
require('./Models/associations');

const app = express();
app.use(bodyParser.json());


swaggerDocs(app);


app.use(userRoutes); 
app.use(transactionRoutes); 

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
};

startServer();
