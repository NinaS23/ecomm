use("ecomm")

const AllTheBooksWereSold = db.productes.updateMany(
    {categoria: "LIVRO"}, 
    {$set: {estoque: 0}}
);
