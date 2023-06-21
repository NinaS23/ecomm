/* eslint-disable import/extensions */

import { Router } from 'express';
import categoriaRouter from './categoriasRoute.js';
import produtosRoute from './produtosRoute.js';

const routes = Router();

routes.use(categoriaRouter);
routes.use(produtosRoute);

export default routes;
