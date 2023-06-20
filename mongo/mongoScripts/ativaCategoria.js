/* eslint-disable no-console */
/* eslint-disable no-undef */
use('ecomm');

const categoriesActive = db.categories.updateOne(
  { nome: 'ESPORT' },
  { $set: { status: 'ATIVA' } },
);
console.log(categoriesActive);
