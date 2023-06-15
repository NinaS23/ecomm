import chalk from "chalk";
import fs from "fs";

function trataErro(error) {
	throw new Error(chalk.red("Erro na requisição:"), error);
}


function renderizaStatus(statusCode, method) {
	try {
		if (statusCode === 200 && method === "get") {
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
	const dadosResolvidos = Promise.resolve(dados);
	dadosResolvidos.then((value) => {
		console.log(value);
	});

}
class categoryService {
	static encontraCategorias() {
		return new Promise((resolve, reject) => {
			fetch("http://localhost:3000/categories")
				.then((response) => {
					renderizaStatus(response.status, "get");
					return response.json();
				})
				.then((data) => {
					setTimeout(() => {
						renderizaDados(data);
					}, 2000);
				})
				.catch((error) => {
					reject(trataErro(error));
				});
		});
	}

	static econtraCategoriaPeloId(id) {
		let idDaCategoriaDesejada = id;
		return new Promise((_, reject) => {
			fetch("http://localhost:3000/categories")
				.then((response) => {
					renderizaStatus(response.status, "get");
					return response.json();
				})
				.then((data) => {
					const categorias = data;
					categorias.find((categoria) => {
						if (categoria.id === idDaCategoriaDesejada) renderizaDados(categoria);
					});

				})
				.catch((error) => {
					reject(trataErro(error));
				});
		});
	}

	static async criarCategoria() {
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
		fetch("http://localhost:3000/categories", requestOptions)
			.then((response) => {
				renderizaStatus(response.status);
				return response.json();
			})
			.then((data) => {
				renderizaDados(data);
			})
			.catch((error) => {
				trataErro(error);
			});
	}

	static async atualizaCategoria(idDaCategoria) {
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
		fetch(`http://localhost:3000/categories/${categoriaId}`, requestOptions)
			.then((response) => {
				renderizaStatus(response.status, "patch");
				return response.json();
			})
			.then((data) => {
				renderizaDados(data);
			})
			.catch((error) => {
				trataErro(error);
			});
	}

	static async deletarCategoria(idDaCategoria) {
		let categoriaId = idDaCategoria;
		const headers = {
			"Content-Type": "application/json"
		};
		let requestOptions = {
			method: "DELETE",
			headers: headers,
		};
		fetch(`http://localhost:3000/categories/${categoriaId}`, requestOptions)
			.then((response) => {
				renderizaStatus(response.status, "delete");
				return response.json();
			})
			.then((data) => {
				renderizaDados(data);
			})
			.catch((error) => {
				trataErro(error);
			});
	}
}



export default categoryService;




