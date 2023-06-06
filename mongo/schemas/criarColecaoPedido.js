use("ecomm")

db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "dataPedido",
                "enderecoEntrega",
                "account",
                "itens"
            ],
            properties: {
                "_id": {
                    "description": "A unique identifier for an order",
                     "bsonType": "objectId"
                 },
                dataPedido: {
                    bsonType: "date",
                    description: "data em que o pedido foi gerado."
                },
                enderecoEntrega: {
                    bsonType: "object",
                    required: [
                        "bairro",
                        "rua",
                        "numero",
                        "cep",
                        "cidade",
                        "uf"
                    ],
                    additionalProperties: false,
                    properties: {
                        bairro: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Bairro com no mínimo 1 caractere."
                        },
                        rua: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Rua com no mínimo 1 caractere."
                        },
                        numero: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Número com no mínimo 1 caractere."
                        },
                        complemento: {
                            bsonType: "string",
                            description: "Complemento do endereço."
                        },
                        cep: {
                            bsonType: "string",
                            pattern: "^[0-9]{8}$",
                            description: "CEP com exatamente 8 caracteres."
                        },
                        cidade: {
                            bsonType: "string",
                            minLength: 5,
                            description: "Cidade com no mínimo 5 caracteres."
                        },
                        uf: {
                            bsonType: "string",
                            pattern: "^[A-Z]{2}$",
                            description: "UF com exatamente 2 caracteres."
                        }
                    }
                },
                account: {
                    bsonType: "object",
                    required: [
                        "accountId",
                        "cliente"
                    ],
                    additionalProperties: false,
                    properties: {
                        accountId: {
                            bsonType: "objectId",
                            description: "Id da conta do cliente."
                        },
                        cliente: {
                            bsonType: "string",
                            minLength: 1,
                            description: "Nome do cliente."
                        }
                    }
                },
                itens: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        bsonType: "object",
                        required: [
                            "productId",
                            "quantidade",
                            "precoUnitario",
                        ],
                        additionalProperties: false,
                        properties: {
                            "productId": {
                                bsonType: "objectId",
                                description: "Id do produto."
                            },
                            quantidade: {
                                bsonType: "int",
                                minimum: 0,
                                exclusiveMinimum: true,
                                description: "No mínimo 1 item."
                            },
                            precoUnitario: {
                                bsonType: "decimal",
                                minimum: 0,
                                exclusiveMinimum: true,
                                description: "Preço unitário."
                            },
                            "desconto": {
                                bsonType: "decimal",
                                minimum: 0,
                                exclusiveMinimum: true,
                                description: "Valor de desconto."
                            },
                        }
                    }
                }
            }
        }
    }
});