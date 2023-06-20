/* eslint-disable no-console */
/* eslint-disable no-tabs */
// eslint-disable-next-line no-undef
use("ecomm");

// eslint-disable-next-line no-undef
const produtoModificado = db.products.updateOne(
	{ nome: "Galaxy Tab S8" },
	{ gte: 2 },
	{ $inc: { estoque: -2 } },
);

console.log(produtoModificado);
