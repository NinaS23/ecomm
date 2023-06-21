import mongoose from 'mongoose';

const categoriasSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Types.ObjectId },
    nome: { type: String, minLength: 3, required: true },
    status: { type: String, enum: ['ATIVA', 'INATIVA'], required: true },
  },
  {
    versionKey: false,
  },
);

const categorias = mongoose.model('categories', categoriasSchema);

export default categorias;
