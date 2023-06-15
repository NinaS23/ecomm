/* eslint-disable no-undef */
use("ecomm");

const cliente = db.accounts.findOne({
	nome_de_usuario: "Emilia Dos Santos"
});

const result = db.orders.aggregate([
	{
		$match: {
			"account.accountId": cliente._id
		}
	},
	{
		$unwind: "$itens"
	},
	{
		$group: {
			_id: "$_id",
			somaQuantidades: { $sum: "$itens.quantidade" },
			montanteTotalPedidos: {
				$sum: {
					$multiply: [
						{ $toInt:"$itens.precoUnitario" },
						"$itens.quantidade"
					]
				}
			},
			montanteTotalDesconto: { $sum: { $toInt: "$itens.desconto"  } }
		}
	},
	{
		$addFields: {
			cliente: cliente.nome_de_usuario
		}
	}
]);


console.log(result);