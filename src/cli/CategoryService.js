import chalk from "chalk";
import fs from "fs";

function trataErro(error) {
	throw new Error(chalk.red("Erro na requisição:"), error);
}

function encontraCategorias() {
	return new Promise((resolve, reject) => {
		fetch("http://localhost:3000/categories")
			.then((response) => {
				console.log("response status:" + " " + chalk.green(response.status));
				return response.json();
			})
			.then((data) => {
				setTimeout(() => {
					console.log(data);
				}, 2000);
				resolve(data);
			})
			.catch((error) => {
				reject(trataErro(error));
			});
	});
}

function econtraCategoriaPeloId(id) {
	let statusCode;
	let idDaCategoriaDesejada = id;
	return new Promise((resolve, reject) => {
		fetch("http://localhost:3000/categories")
			.then((response) => {
				console.log("response status:" + " " + chalk.green(response.status));
				statusCode = response.status;
				return response.json();
			})
			.then((data) => {
				if (statusCode === 200) {
					console.log(chalk.bgMagentaBright("A categoria Desejada é:"));
					const categorias = data;
					categorias.find((categoria) => {
						if (categoria.id === idDaCategoriaDesejada) console.log(categoria);
					});

				} else if (statusCode === 404) {
					console.log(chalk.red("Categoria não encontrada"));
				} else {
					console.log(chalk.red("Problema ao procurar categoria"));
				}

			})
			.catch((error) => {
				reject(trataErro(error));
			});
	});
}

async function criarCategoria() {
	let statusCode;
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
			console.log("response status:" + " " + chalk.green(response.status));
			statusCode = response.status;
			return response.json();
		})
		.then((data) => {
			if (statusCode === 201) console.log(chalk.bgMagentaBright("A Categoria foi cadastrada com Sucesso!!"));
			else console.log(chalk.red("Erro na inserção de uma categoria"));
			console.log(data);
		})
		.catch((error) => {
			trataErro(error);
		});
}

async function atualizaCategoria(idDaCategoria) {
	let statusCode;
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
			console.log("response status:" + " " + chalk.green(response.status));
			statusCode = response.status;
			return response.json();
		})
		.then((data) => {
			if (statusCode === 404) console.log(chalk.red(" Categoria não encontrada"));
			if (statusCode === 200) console.log(chalk.bgMagentaBright("A Categoria foi atualizada com Sucesso!!"));
			console.log(data);
		})
		.catch((error) => {
			trataErro(error);
		});
}

async function deletarCategoria(idDaCategoria) {
	let statusCode;
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
			console.log("response status:" + " " + chalk.green(response.status));
			statusCode = response.status;
			return response.json();
		})
		.then((data) => {
			if (statusCode === 404) console.log(chalk.red(" Categoria não encontrada"));
			if (statusCode === 200) console.log(chalk.bgMagentaBright("A Categoria foi deletada com Sucesso!!"));
			console.log(data);
		})
		.catch((error) => {
			trataErro(error);
		});
}


const categoryService = {
	encontraCategorias,
	econtraCategoriaPeloId,
	criarCategoria,
	atualizaCategoria,
	deletarCategoria
};

export default categoryService;




