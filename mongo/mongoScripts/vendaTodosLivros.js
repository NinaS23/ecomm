/* eslint-disable no-console */
/* eslint-disable no-undef */

use('ecomm');

const AllTheBooksWereSold = db.productes.updateMany(
  { categoria: 'LIVRO' },
  { $set: { estoque: 0 } },
);
console.log(AllTheBooksWereSold);
