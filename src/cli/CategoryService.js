import chalk from "chalk";
import fs from "fs";

function trataErro(error) {
  throw new Error(chalk.red('Erro na requisição:'), error);
}

function encontraCategorias() {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/categories')
      .then((response) => {
        console.log("response status:" + " " + chalk.green(response.status));
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          console.log(data)
        }, 2000)
        resolve(data);
      })
      .catch((error) => {
        reject(trataErro(error));
      });
  });
}

function econtraCategoriaPeloId(id) {
  let idDaCategoriaDesejada = id;
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/categories')
      .then((response) => {
        console.log("response status:" + " " + chalk.green(response.status));
        return response.json();
      })
      .then((data) => {
        console.log(chalk.bgMagentaBright("A categoria Desejada é:"))
        const categorias = data;
        const acharCategoria = categorias.find((categoria) => {
          if (categoria.id === idDaCategoriaDesejada) console.log(categoria)
        })
        setTimeout(() => { acharCategoria }, 2000)

      })
      .catch((error) => {
        reject(trataErro(error));
      });
  });
}

async function criarCategoria() {
  const caminhoDaCategoriaNova = "./src/cli/novaCategoria.json"
  const encoding = 'utf-8';
  const categoria = await fs.promises.readFile(caminhoDaCategoriaNova, encoding)
  const headers = {
    "Content-Type": "application/json"
  }
  let requestOptions = {
    method: 'POST',
    headers: headers,
    body: categoria
  };
  fetch("http://localhost:3000/categories", requestOptions)
    .then((response) => {
      console.log("response status:" + " " + chalk.green(response.status));
      return response.json();
    })
    .then((data) => {
      console.log(chalk.bgMagentaBright("A Categoria foi cadastrada com Sucesso!!"))
      console.log(data)
    })
    .catch((error) => {
      trataErro(error)
    });
}

async function atualizaCategoria() {
  const caminhoDaCategoriaNova = "./src/cli/categoriaAtualizada.json"
  const encoding = 'utf-8';
  const atualizarData = await fs.promises.readFile(caminhoDaCategoriaNova, encoding)
  const headers = {
    "Content-Type": "application/json"
  }
  let requestOptions = {
    method: 'PATCH',
    headers: headers,
    body: atualizarData
  };
  fetch("http://localhost:3000/categories/7", requestOptions)
    .then((response) => {
      console.log("response status:" + " " + chalk.green(response.status));
      return response.json();
    })
    .then((data) => {
      console.log(chalk.bgMagentaBright("A Categoria foi atualizada com Sucesso!!"))
      console.log(data)
    })
    .catch((error) => {
      trataErro(error)
    });
}

async function deletarCategoria() {
  const headers = {
    "Content-Type": "application/json"
  }
  let requestOptions = {
    method: 'DELETE',
    headers: headers,
  };
  fetch("http://localhost:3000/categories/8", requestOptions)
    .then((response) => {
      console.log("response status:" + " " + chalk.green(response.status));
      return response.json();
    })
    .then((data) => {
      console.log(chalk.bgMagentaBright("A Categoria foi deletada com Sucesso!!"))
      console.log(data)
    })
    .catch((error) => {
      trataErro(error)
    });
}


const categoryService = {
  encontraCategorias,
  econtraCategoriaPeloId,
  criarCategoria,
  atualizaCategoria,
  deletarCategoria
}

export default categoryService




