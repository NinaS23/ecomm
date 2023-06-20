/* eslint-disable no-console */
/* eslint-disable no-tabs */
// eslint-disable-next-line no-undef
use("ecomm");

// eslint-disable-next-line no-undef
const categoriesActive = db.categories.updateOne(
	{ nome: "ESPORT" },
	{ $set: { status: "ATIVA" } },
);
console.log(categoriesActive);
