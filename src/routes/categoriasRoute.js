/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-tabs */
import express from 'express';
import categoriasCrontroller from '../controllers/categoriaController.js';

const CategoriaRouter = express.Router();

CategoriaRouter
  .get('/categories', categoriasCrontroller.listarCategorias)
  .post('/admin/categories', categoriasCrontroller.cadastrarCategoria)
  .get('/categories/:id', categoriasCrontroller.listarLivroPorId);

export default CategoriaRouter;
