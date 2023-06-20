/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-mixed-spaces-and-tabs */
import mongoose from "mongoose";

const categoriasSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Types.ObjectId },
		nome: { type: String, required: true },
		status: { type: String, required: true },
	},
	{
		versionKey: false,
	},
);

const categorias = mongoose.model("categories", categoriasSchema);

export default categorias;
