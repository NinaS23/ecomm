import chalk from "chalk";

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

const categoryService = {
  encontraCategorias,
  econtraCategoriaPeloId
}

export default categoryService




