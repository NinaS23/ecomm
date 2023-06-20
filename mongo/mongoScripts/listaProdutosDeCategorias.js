use('ecomm');

const productsCategoriesList = db.categories.find({
  $or: [
    { categoria: 'LIVROS' },
    { categoria: 'CELULARES' },
  ],
});

console.log(productsCategoriesList);
