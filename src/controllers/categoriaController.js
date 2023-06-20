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
      res.status(201).send('Categoria cadastrada com sucesso!!');
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async listarCategoriaPeloId(req, res) {
    try {
      const { id } = req.params;
      const categoriaEncontrada = await categorias.findById(id)
        .exec();
      res.status(200).send(categoriaEncontrada);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async atualizarCategoria(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      await categorias.updateOne(
        { _id: id },
        { $set: { nome: dados.nome } },
      );
      res.status(200).send('Categoria modificada com sucesso!!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async deletaCategoria(req, res) {
    try {
      const { id } = req.params;
      await categorias.deleteOne({ _id: id });
      res.status(200).send('Categoria deletada com sucesso!!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async ativarCategoria(req, res) {
    try {
      const { id } = req.params;
      await categorias.updateOne(
        { _id: id },
        { $set: { status: 'ATIVA' } },
      );
      res.status(200).send('Categoria ativada com sucesso!!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default categoriasCrontroller;
