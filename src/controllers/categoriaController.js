/* eslint-disable eqeqeq */
/* eslint-disable new-cap */
/* eslint-disable import/extensions */

import Categorias from '../models/categoriasModel.js';

class categoriasCrontroller {
  static async listarCategorias(_, res) {
    try {
      const listaDeCategorias = await Categorias.find();
      if (listaDeCategorias.length < 1) {
        res.sendStatus(204);
      } else {
        res.status(200).json(listaDeCategorias);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async cadastrarCategoria(req, res) {
    try {
      const categoria = new Categorias({
        nome: req.body.nome,
        status: req.body.status,
      });
      if (categoria.nome === '' || categoria.status === '') {
        res.status(404).send('Nome e Status são necessários!!');
      } else {
        await categoria.save();
        res.status(201).send('Categoria cadastrada com sucesso!!');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async listarCategoriaPeloId(req, res) {
    try {
      const { id } = req.params;
      const categoriaEncontrada = await Categorias.findById(id)
        .exec();
      if (categoriaEncontrada == null) {
        res.status(404).send('categoria não encontrada');
      } else {
        res.status(200).json(categoriaEncontrada);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async atualizarCategoria(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      await Categorias.updateOne(
        { _id: id },
        { $set: { nome: dados.nome } },
      );
      res.status(200).send('Categoria modificada com sucesso!!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async ativarCategoria(req, res) {
    try {
      const { id } = req.params;
      const categoriaEncontrada = await Categorias.findById(id)
        .exec();
      if (categoriaEncontrada == null) {
        res.status(404).send('categoria não encontrada');
      } else if (categoriaEncontrada.status === 'ATIVA') {
        res.status(409).send('categoria já está ativada');
      } else {
        await Categorias.updateOne(
          { _id: id },
          { $set: { status: 'ATIVA' } },
        );
        res.status(200).send('Categoria ativada com sucesso!!');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async deletaCategoria(req, res) {
    try {
      const { id } = req.params;
      const categoriaEncontrada = await Categorias.findById(id)
        .exec();
      if (categoriaEncontrada == null) {
        res.status(404).send('categoria não encontrada');
      } else {
        await Categorias.deleteOne({ _id: id });
        res.status(200).send('Categoria deletada com sucesso!!');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default categoriasCrontroller;
