use("ecomm")

db.createCollection("products", {
    validator: {
        "$jsonSchema": {
            "title": "Record of products",
            "description": "This document records the details of an product",
            "type": "object",
            "properties": {
                "_id": {
                    "description": "A unique identifier for an product",
                    "bsonType": "objectId"
                },
                "nome": {
                    "bsonType": "string",
                    "minLength": 3
                },
                "descrição": {
                    "bsonType": "string",
                    "minLength": 10
                },
                "slug": {
                    "bsonType": "string",
                    "minLength": 5
                },
                "estoque": {
                    "bsonType": "int",
                    "minimum": 0
                },
                "preco": {
                    "bsonType": "decimal",
                    "minimum": 0.00,
                    "exclusiveMinimum": true
                },
                "categoria": {
                    "bsonType": "string",
                    "enum": [
                        "AUTOMOTIVA",
                        "CELULARES",
                        "INFORMÁTICA",
                        "LIVROS",
                        "MÓVEIS"
                    ]
                }
            },
            "required": [
                "nome",
                "descrição",
                "slug",
                "estoque",
                "categoria",
                "preco"
            ],
            "additionalProperties": false
        }
    }
});