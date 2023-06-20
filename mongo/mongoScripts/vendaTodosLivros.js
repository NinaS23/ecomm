/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-tabs */
// eslint-disable-next-line no-undef
use("ecomm");

const AllTheBooksWereSold = db.productes.updateMany(
	{ categoria: "LIVRO" },
	{ $set: { estoque: 0 } },
);
console.log(AllTheBooksWereSold);
