/* eslint-disable import/extensions */
/* eslint-disable no-tabs */
import express from 'express';
import categoriasCrontroller from '../controllers/categoriaController.js';

const CategoriaRouter = express.Router();

CategoriaRouter
  .get('/api/categories', categoriasCrontroller.listarCategorias)
  .post('/api/admin/categories', categoriasCrontroller.cadastrarCategoria)
  .get('/api/categories/:id', categoriasCrontroller.listarLivroPorId);

export default CategoriaRouter;
