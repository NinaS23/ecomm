/* eslint-disable consistent-return */
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
      console.log(produto);
      await produto.save();
      res.status(201).json('Produto inserido com sucesso!!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default ProdutosController;
