/* eslint-disable import/extensions */
/* eslint-disable no-tabs */
import express from 'express';
import ProdutosController from '../controllers/produtosController.js';

const produtosRoute = express.Router();

produtosRoute
  .get('/api/products', ProdutosController.listarProdutos);
export default produtosRoute;
