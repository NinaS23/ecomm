use("ecomm")

const categoriesActive = db.categories.updateOne(
    {nome:"ESPORT"}, 
    {$set: {status: "ATIVA"}}
    );
console.log(categoriesActive);