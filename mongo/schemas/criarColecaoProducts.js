/* eslint-disable no-tabs */
/* eslint-disable no-undef */
use('ecomm');

db.createCollection('products', {
  validator: {
    $jsonSchema: {
      title: 'registro de produtos',
      description: 'esse documento é um registro de detalhes da colecao produtos',
      type: 'object',
      properties: {
        _id: {
          description: 'Um identificador unico para cada produto',
          bsonType: 'objectId',
        },
        nome: {
          bsonType: 'string',
          minLength: 3,
        },
        descrição: {
          bsonType: 'string',
          minLength: 10,
        },
        slug: {
          bsonType: 'string',
          minLength: 5,
        },
        estoque: {
          bsonType: 'int',
          minimum: 0,
        },
        preco: {
          bsonType: 'decimal',
          minimum: 0.00,
          exclusiveMinimum: true,
        },
        categoria: {
          bsonType: 'string',
          enum: [
            'AUTOMOTIVA',
            'CELULARES',
            'INFORMÁTICA',
            'LIVROS',
            'MÓVEIS',
          ],
        },
      },
      required: [
        'nome',
        'descrição',
        'slug',
        'estoque',
        'categoria',
        'preco',
      ],
      additionalProperties: false,
    },
  },
});
