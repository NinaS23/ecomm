import categoryService from "./CategoryService.js";

const comando = process.argv;

async function processarComandos(args) {
	let comando = args[2];
	let pegarIdDaCategoriaPeloTerminal = args[3] * 1;
	
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
