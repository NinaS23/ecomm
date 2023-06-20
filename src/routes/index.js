/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

import { Router } from 'express';
import categoriaRouter from './categoriasRoute.js';

const routes = Router();

routes.use(categoriaRouter);

export default routes;
