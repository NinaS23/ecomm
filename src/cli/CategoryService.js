import chalk from "chalk";
import fs from "fs";

const URL = "http://localhost:3000/categories";

function trataErro(error) {
	console.log(chalk.red("Erro na requisição:"), error);
}
function renderizaStatus(statusCode, method) {
	try {
		if (statusCode === 200 && method === "get") {
			console.log(chalk.bgMagentaBright("Sucesso!!"));
			console.log("response status:" + " " + chalk.green(statusCode));
		} else if (statusCode === 404) {
			console.log("response status:" + " " + chalk.red(statusCode));
			console.log(chalk.red("categoria não encontrada"));
		} else if (statusCode === 200 && method === "patch") {
			console.log(chalk.bgMagentaBright("categoria atualizada com sucesso"));
			console.log("response status:" + " " + chalk.green(statusCode));
		} else if (statusCode === 201) {
			console.log("response status:" + " " + chalk.green(statusCode));
			console.log(chalk.bgMagentaBright("categoria criada com sucesso"));
		} else if (statusCode === 200 && method === "delete") {
			console.log("response status:" + " " + statusCode);
			console.log(chalk.bgMagentaBright("categoria delatada com sucesso"));
		} else {
			console.log(statusCode);
			console.log(chalk.red("Error"));
		}
	} catch (error) {
		trataErro(error);
	}
}


function renderizaDados(dados) {
	console.log(dados);
}
class categoryService {
	static async encontraCategorias() {
		try {
			const response = await fetch(URL);
			const categorias = await response.json();
			let status = response.status;
			renderizaStatus(status,"get");
			renderizaDados(categorias);
		
		} catch (error) {
			trataErro(error);
		}
	}

	static async econtraCategoriaPeloId(id) {
		try {
			let idDaCategoriaDesejada = id;
			const response = await fetch(URL);
			const categorias = await response.json();
			categorias.find((categoria) => {
				if (categoria.id === idDaCategoriaDesejada) renderizaDados(categoria);
			});
			let status = response.status;
			renderizaStatus(status,"get");
		} catch (error) {
			trataErro(error);
		}
	}

	static async criarCategoria() {
		try {
			const caminhoDaCategoriaNova = "./src/cli/novaCategoria.json";
			const encoding = "utf-8";
			const categoria = await fs.promises.readFile(caminhoDaCategoriaNova, encoding);
			const headers = {
				"Content-Type": "application/json"
			};
			let requestOptions = {
				method: "POST",
				headers: headers,
				body: categoria
			};
			const response = await fetch(URL, requestOptions);
			const categoriaCriada = await response.json();
			let status = response.status;
			renderizaStatus(status);
			renderizaDados(categoriaCriada);
		} catch (error) {
			trataErro(error);
		}

	}

	static async atualizaCategoria(idDaCategoria) {
		try {
			let categoriaId = idDaCategoria;
			const caminhoDaCategoriaNova = "./src/cli/categoriaAtualizada.json";
			const encoding = "utf-8";
			const atualizarData = await fs.promises.readFile(caminhoDaCategoriaNova, encoding);
			const headers = {
				"Content-Type": "application/json"
			};
			let requestOptions = {
				method: "PATCH",
				headers: headers,
				body: atualizarData
			};
			const response = await fetch(`${URL}/${categoriaId}`, requestOptions);
			const categoriaCriada = await response.json();
			let status = response.status;
			renderizaStatus(status, "patch");
			renderizaDados(categoriaCriada);
		} catch (error) {
			trataErro(error);
		}
	}

	static async deletarCategoria(idDaCategoria) {
		try {
			let categoriaId = idDaCategoria;
			const headers = {
				"Content-Type": "application/json"
			};
			let requestOptions = {
				method: "DELETE",
				headers: headers,
			};
			const response = await fetch(`${URL}/${categoriaId}`, requestOptions);
			const categoriaCriada = await response.json();
			let status = response.status;
			renderizaStatus(status, "delete");
			renderizaDados(categoriaCriada);
		} catch (error) {
			trataErro(error);
		}
	}
}



export default categoryService;




