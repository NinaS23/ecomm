/* eslint-disable import/extensions */
/* eslint-disable no-tabs */
import express from 'express';
import ProdutosController from '../controllers/produtosController.js';

const produtosRoute = express.Router();

produtosRoute
  .get('/api/products', ProdutosController.listarProdutos)
  .post('/api/admin/products/', ProdutosController.inserirProduto)
  .get('/api/admin/products/:id', ProdutosController.detalharProduto)
  .put('/api/admin/products/:id', ProdutosController.atualizaProduto)
  .delete('/api/admin/products/:id', ProdutosController.deletarProduto);
export default produtosRoute;
