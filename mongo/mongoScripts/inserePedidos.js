/* eslint-disable no-undef */

use('ecomm');

const orderDate = new Date();

const orderList = [
  {
    dataPedido: orderDate,
    enderecoEntrega: {
      bairro: 'Centro',
      rua: 'Avenida Floriano Gonçalves de Lima 93',
      numero: '1549',
      complemento: 'em frente ao pet shop xero-bom',
      cep: '55555970',
      cidade: 'Xexéu',
      uf: 'PE',
    },
    account: {
      accountId: ObjectId('6480f55bcc81d477fda96440'),
      cliente: 'Emilia Dos Santos',
    },
    itens: [
      {
        productId: ObjectId('647def57a672065edc69d312'),
        quantidade: 1,
        precoUnitario: NumberDecimal(9176),
      },
    ],
  },
  {
    dataPedido: orderDate,
    enderecoEntrega: {
      bairro: 'Centro',
      rua: 'Avenida Floriano Gonçalves de Lima 93',
      numero: '1549',
      complemento: 'em frente ao pet shop xero-bom',
      cep: '55555970',
      cidade: 'Xexéu',
      uf: 'PE',
    },
    account: {
      accountId: ObjectId('60bfebcf78b34839687ea187'),
      cliente: 'Alice Dos Santos',
    },
    itens: [
      {
        productId: ObjectId('647def57a672065edc69d30e'),
        quantidade: 1,
        precoUnitario: NumberDecimal(3523),
        desconto: NumberDecimal(50),
      }, {
        productId: ObjectId('647def57a672065edc69d30e'),
        quantidade: 1,
        precoUnitario: NumberDecimal(3523),
        desconto: NumberDecimal(50),
      },
    ],
  },
];

db.orders.insertMany(orderList);
