/* eslint-disable import/extensions */
import Produtos from '../models/produtosModel.js';

class ProdutosController {
  static async listarProdutos(_, res) {
    try {
      const response = await Produtos.find()
        .populate('categoria')
        .exec();
      if (response.length < 1) {
        res.sendStatus(204);
      } else {
        res.status(200).json(response);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async inserirProduto(req, res) {
    try {
      const produto = new Produtos({
        nome: req.body.nome,
        slug: req.body.slug,
        preco_unitario: req.body.preco_unitario,
        estoque: req.body.estoque,
        categoria: req.body.categoria,
      });
      await produto.save();
      res.status(201).json('Produto inserido com sucesso!!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async detalharProduto(req, res) {
    try {
      const { id } = req.params;
      const response = await Produtos
        .findById(id)
        .populate('categoria')
        .exec();
      if (response == null) {
        res.status(404).send('Produto não encontrado');
      } else {
        res.status(200).json(response);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async atualizaProduto(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      await Produtos.updateOne(
        { _id: id },
        { $set: dados },
      );
      res.status(200).json('Produto atualizado com sucesso!!');
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deletarProduto(req, res) {
    try {
      const { id } = req.params;
      const response = await Produtos.findById(id)
        .exec();
      if (response == null) {
        res.status(404).send('Produto não encontrado');
      } else {
        await Produtos.deleteOne({ _id: id });
        res.status(200).send('Produto deletado com sucesso!!');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default ProdutosController;
