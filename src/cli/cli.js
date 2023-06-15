import chalk from "chalk";
import categoryService from "./CategoryService.js"

const comando = process.argv;


async function processarComandos(args) {
    let comando = args[2];
    let pegarIdDaCategoriaPeloTerminal = args[3] * 1;

    switch (comando) {

        case "--listarCategorias":
            try {
                console.log(" ");
                console.log(chalk.bgMagentaBright("listando Categorias..."));
                await categoryService.encontraCategorias();
            } catch (error) {
                console.log("erro:", error);
            }
            break;

        case "--recuperarCategoriaPorId":
            try {
                await categoryService.econtraCategoriaPeloId(pegarIdDaCategoriaPeloTerminal);

            } catch (error) {
                console.log(error)
            }
            break;
        case "--inserirCategoria":
            try {
                await categoryService.criarCategoria();
            } catch (error) {
                console.log(error);
            }
            break;
        case "--atualizarCategoria":
            try {
                await categoryService.atualizaCategoria();
            } catch (error) {
                console.log(error);
            }
            break;
        case "--excluirCategoria":
            try {
                await categoryService.deletarCategoria();
            } catch (error) {
                console.log(error);
            }
    }

};


processarComandos(comando);
