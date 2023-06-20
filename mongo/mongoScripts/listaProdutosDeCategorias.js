/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-tabs */
// eslint-disable-next-line no-undef
use("ecomm");

const productsCategoriesList = db.categories.find({
	$or: [
		{ categoria: "LIVROS" },
		{ categoria: "CELULARES" },
	],
});

console.log(productsCategoriesList);
