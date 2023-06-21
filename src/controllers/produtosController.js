/* eslint-disable import/extensions */
import produtos from '../models/produtosModel.js';

class ProdutosController {
  static async listarProdutos(_, res) {
    try {
      const response = await produtos.find();
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
}

export default ProdutosController;
