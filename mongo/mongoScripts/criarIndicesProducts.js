/* eslint-disable no-undef */

use('ecomm');

const createdIndexName = db.products.createIndex({ nome: 1 });
const createdIndexCategory = db.products.createIndex({ categoria: 1 });
const createIndexPrice = db.products.createIndex({ preco: 1 });

console.log(createdIndexCategory, createdIndexName, createIndexPrice);
