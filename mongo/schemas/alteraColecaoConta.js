/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

use('ecomm');

db.runCommand({
  collMod: 'accounts',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'nome_de_usuario',
        'email',
        'senha',
        'dataCriacao',
        'cpf',
        'telefone',
        'endereco',
      ],
      properties: {
        _id: {
          description: 'Um identificador unico para cada conta',
          bsonType: 'objectId',
        },
        nome_de_usuario: {
          bsonType: 'string',
          minLength: 5,
          description: 'Nome de usuário com no mínimo 5 caracteres.',
        },
        email: {
          bsonType: 'string',
          pattern: '^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$',
          description: 'Email com no mínimo 5 caracteres.',
        },
        senha: {
          bsonType: 'string',
          minLength: 5,
          description: 'Senha com no mínimo 5 caracteres.',
        },
        dataCriacao: {
          bsonType: 'date',
          description: 'Data de criação da conta.',
        },
        cpf: {
          bsonType: 'string',
          pattern: '^[0-9]{11}$',
          description: 'CPF tem que ter exatamente 11 caracteres.',
        },
        telefone: {
          bsonType: 'number',
          pattern: '^[0-9]{11}$',
          description: 'Telefone com no mínimo 10 caracteres.',
        },
        endereco: {
          bsonType: 'object',
          required: [
            'bairro',
            'rua',
            'numero',
            'cep',
            'cidade',
            'uf',
          ],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: 'string',
              minLength: 1,
              description: 'Bairro com no mínimo 1 caractere.',
            },
            rua: {
              bsonType: 'string',
              minLength: 1,
              description: 'Rua com no mínimo 1 caractere.',
            },
            numero: {
              bsonType: ['number', 'string'],
              pattern: '^\\d{1}|[S/N]$',
              description: 'Número com no mínimo 1 caractere.',
            },
            complemento: {
              bsonType: 'string',
              description: 'Complemento do endereço.',
            },
            cep: {
              bsonType: 'number',
              pattern: '^[0-9]{8}$',
              description: 'CEP com exatamente 8 caracteres.',
            },
            cidade: {
              bsonType: 'string',
              minLength: 5,
              description: 'Cidade com no mínimo 5 caracteres.',
            },
            uf: {
              bsonType: 'string',
              enum: [
                'AC',
                'AL',
                'AM',
                'AP',
                'BA',
                'CE',
                'DF',
                'ES',
                'GO',
                'MA',
                'MG',
                'MS',
                'MT',
                'PA',
                'PB',
                'PE',
                'PI',
                'PR',
                'RJ',
                'RN',
                'RO',
                'RR',
                'RS',
                'SC',
                'SE',
                'SP',
                'TO',
              ],
              description: 'UF com exatamente 2 caracteres.',
            },
          },
        },
      },
    },
  },
  validationLevel: 'strict',
  validationAction: 'error',
});
