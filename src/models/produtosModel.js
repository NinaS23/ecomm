import mongoose from 'mongoose';

const produtosSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Types.ObjectId },
    nome: { type: String, minLength: 4, required: true },
    slug: { type: String, match: /^[A-Za-z0-9]/, required: true },
    preco_unitario: { type: Number, min: 1, required: true },
    estoque: {
      type: Number, min: 1, max: 10.000, required: true,
    },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
  },
  {
    versionKey: false,
  },
);

const Produtos = mongoose.model('products', produtosSchema);

export default Produtos;
