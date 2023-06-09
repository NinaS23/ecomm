use("ecomm")

let DataDoPedido = new Date();
const produtoQueFoiPedido = {
    productId: new ObjectId("648336b5dddea3f9a30b9d83"),
    quantidade: 1,
    precoUnitario: NumberDecimal("102.9")
}

const pedido = {
    "dataPedido": DataDoPedido,
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
    "itens":[
        {
            productId: new ObjectId("648336b5dddea3f9a30b9d83"),
            quantidade: 1,
            precoUnitario: NumberDecimal("102.9")
        }
    ]
};


const verificandoQuantidadeDoProduto = {
    _id: new ObjectId("648336b5dddea3f9a30b9d83"),
    estoque:
    {
        $gte: produtoQueFoiPedido.quantidade
    }
};

const diminuirEstoque = {
    $min: {
        estoque:(produtoQueFoiPedido.quantidade)
    }
};

const mostraUpdate = db.products.updateOne(
    verificandoQuantidadeDoProduto,
    diminuirEstoque
);
db.orders.insertOne(pedido);

console.log(mostraUpdate)
