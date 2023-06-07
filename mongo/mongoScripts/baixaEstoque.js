use("ecomm")

db.products.updateOne(
    {nome: "Galaxy Tab S8"},
    { $min: {estoque: 2} }
)