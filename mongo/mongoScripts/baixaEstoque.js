use('ecomm');
const produtoModificado = db.products.updateOne(
  { nome: 'Galaxy Tab S8' },
  { gte: 2 },
  { $inc: { estoque: -2 } },
);

console.log(produtoModificado);
