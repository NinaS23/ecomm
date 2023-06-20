/* eslint-disable no-console */
/* eslint-disable no-undef */
use('ecomm');

const categoriesAtive = db.categories.find({ status: 'ATIVA' });

console.log(categoriesAtive);
