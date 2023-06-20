/* eslint-disable no-undef */

use('ecomm');

const productsForPrice = db.products.find(
  {
    $and: [
      { preco: { $gt: 1000 } },
      { preco: { $lte: 2000 } },
    ],
  },
  { nome: 1, preco: 1 },
);
console.log(productsForPrice);
