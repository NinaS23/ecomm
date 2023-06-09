use("ecomm")
const result = db.orders.aggregate([
    {
       $unwind: '$itens'
    },
    {
       $group: {
          _id: "$account.cliente",
          somaQuantidades: { $sum: '$itens.quantidade' },
          montanteTotalPedidos: {
             $sum: {
                $multiply: [
                   { $toInt:'$itens.precoUnitario' },
                   '$itens.quantidade'
                ]
             }
          },
          montanteTotalDesconto: { $sum: { $toInt: '$itens.desconto'  } }
       }
    }
 ]);



console.log(result)