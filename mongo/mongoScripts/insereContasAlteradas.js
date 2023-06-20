/* eslint-disable no-undef */

use('ecomm');

const criationDate = new Date();

const usersList = [
  {
    nome_de_usuario: 'Uramni',
    email: 'uramni@email.com',
    senha: 'alura23',
    dataCriacao: criationDate,
    cpf: '88792695618',
    telefone: 81958587457,
    endereco: {
      bairro: 'Centro',
      rua: 'Avenida Floriano Gonçalves de Lima 93',
      numero: 1549,
      complemento: 'em frente ao pet shop xero-bom',
      cep: 55555970,
      cidade: 'Xexéu',
      uf: 'PE',
    },
  },
  {
    nome_de_usuario: 'Emilia Dos Santos',
    email: 'Emilia@email.com',
    senha: 'alura23',
    dataCriacao: criationDate,
    cpf: '88792689018',
    telefone: 81958587809,
    endereco: {
      bairro: 'Centro',
      rua: 'Avenida Floriano Gonçalves de Lima 93',
      numero: 'S/N',
      complemento: 'em frente ao pet shop xero-bom',
      cep: 55555970,
      cidade: 'Xexéu',
      uf: 'PE',
    },
  },
  {
    nome_de_usuario: 'Alice Dos Santos',
    email: 'Alice@email.com',
    senha: 'alura23',
    dataCriacao: criationDate,
    cpf: '88792698019',
    telefone: 81958587657,
    endereco: {
      bairro: 'Centro',
      rua: 'Avenida Floriano Gonçalves de Lima 93',
      numero: 1549,
      complemento: 'em frente ao pet shop xero-bom',
      cep: 55555970,
      cidade: 'Xexéu',
      uf: 'PE',
    },
  },
];

db.accounts.insertMany(usersList);
