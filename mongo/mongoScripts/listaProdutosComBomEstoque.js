/* eslint-disable no-undef */

use('ecomm');

const productsWithGoodStock = db.products.find(
  { estoque: { $gte: 3 } },
  { nome: 1, estoque: 1 },
);

console.log(productsWithGoodStock);
