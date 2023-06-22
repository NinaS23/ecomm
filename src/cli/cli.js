import categoryService from './CategoryService.js';

const comando = process.argv;

async function processarComandos(args) {
  const comando = args[2];
  const pegarIdDaCategoriaPeloTerminal = args[3] * 1;
  const pegarCaminhoDoArquivo = args[3];
  const caminhoParaCategoriaAtualizada = args[4];

  switch (comando) {
    case '--listarCategorias':
      await categoryService.encontraCategorias();
      break;
    case '--recuperarCategoriaPorId':
      await categoryService.econtraCategoriaPeloId(pegarIdDaCategoriaPeloTerminal);
      break;
    case '--inserirCategoria':
      await categoryService.criarCategoria(pegarCaminhoDoArquivo);
      break;
    case '--atualizarCategoria':
      await categoryService.atualizaCategoria(pegarIdDaCategoriaPeloTerminal,caminhoParaCategoriaAtualizada);
      break;
    case '--excluirCategoria':
      await categoryService.deletarCategoria(pegarIdDaCategoriaPeloTerminal);
      break;
  }
}

processarComandos(comando);

