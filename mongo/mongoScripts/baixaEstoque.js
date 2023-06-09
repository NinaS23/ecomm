use("ecomm")

let DataDoPedido = new Date();
const produtoQueFoiPedido = {
    productId: new ObjectId("6480765e2a7dd5e659e32431"),
    quantidade: 3,
    precoUnitario: NumberDecimal("1889")
};
const pedido = {
    dataPedido: DataDoPedido,
    "enderecoEntrega": {
        "bairro": "Centro",
        "rua": "Avenida Floriano Gonçalves de Lima 93",
        "numero": "1549",
        "complemento": "em frente ao pet shop xero-bom",
        "cep": "55555970",
        "cidade": "Xexéu",
        "uf": "PE"
    },
    "account": {
        "accountId": ObjectId("6480f55bcc81d477fda96440"),
        "cliente": "Emilia Dos Santos"
    },
    "itens": [produtoQueFoiPedido]
};



const verificandoQuantidadeDoProduto = {
    _id: new ObjectId("6480765e2a7dd5e659e32431"),
    estoque:
    {
        $gte: produtoQueFoiPedido.quantidade
    }
};
const diminuirEstoque = {
    $inc: {
        estoque:
            -(produtoQueFoiPedido.quantidade)
    }
};

db.orders.insertOne(pedido);


const mostraUpdate = db.products.updateOne(
    verificandoQuantidadeDoProduto,
    diminuirEstoque
);

console.log(mostraUpdate)
