/* eslint-disable eqeqeq */
/* eslint-disable new-cap */
/* eslint-disable import/extensions */

import categorias from '../models/categoriasModel.js';

class categoriasCrontroller {
  static async listarCategorias(_, res) {
    try {
      const listaDeCategorias = await categorias.find();
      res.status(200).json(listaDeCategorias);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async cadastrarCategoria(req, res) {
    try {
      const categoria = new categorias({
        nome: req.body.nome,
        status: req.body.status,
      });
      console.log(categoria.nome);
      await categoria.save();
      res.status(201).send('categoria cadastrada com sucesso!!');
    } catch (err) {
      if (err.nome === undefined || err.status) {
        res.status(400).send('nome e status são necessários');
      }
      res.status(500).json(err);
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const { id } = req.params;
      const categoriaEncontrada = await categorias.findById(id)
        .exec();
      res.status(200).send(categoriaEncontrada);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default categoriasCrontroller;
