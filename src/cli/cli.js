/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable default-case */
/* eslint-disable no-tabs */
import categoryService from "./CategoryService.js";

const comando = process.argv;

async function processarComandos(args) {
	const comando = args[2];
	const pegarIdDaCategoriaPeloTerminal = args[3] * 1;

	switch (comando) {
	case "--listarCategorias":
		await categoryService.encontraCategorias();
		break;
	case "--recuperarCategoriaPorId":
		await categoryService.econtraCategoriaPeloId(pegarIdDaCategoriaPeloTerminal);
		break;
	case "--inserirCategoria":
		await categoryService.criarCategoria();
		break;
	case "--atualizarCategoria":
		await categoryService.atualizaCategoria(pegarIdDaCategoriaPeloTerminal);
		break;
	case "--excluirCategoria":
		await categoryService.deletarCategoria(pegarIdDaCategoriaPeloTerminal);
		break;
	}
}

processarComandos(comando);
