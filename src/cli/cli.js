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
                console.log(chalk.bgMagentaBright("A categoria Desejada é:"))
                const pegarCategoria = await categoryService.econtraCategoriaPeloId(pegarIdDaCategoriaPeloTerminal);
                setTimeout(() => { pegarCategoria }, 2000)

            } catch (error) {
                console.log(error)
            }
            break;
    }

}


processarComandos(comando);
