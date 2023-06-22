/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';
import chalk from 'chalk';
import fs from 'fs';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';
import app from './src/app.js';

dotenv.config();

const file = fs.readFileSync('./swagger/ecomm.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`${chalk.magenta('Iniciando ecomm em:')} http://localhost:${port}`);
});
