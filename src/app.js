/* eslint-disable import/extensions */
import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';
import db from './config/dbConexao.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, chalk.bgRed('Erro de conexão')));
db.once('open', () => {
  console.log(chalk.bgGreenBright('conexão com o banco feita com sucesso'));
});

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

export default app;
