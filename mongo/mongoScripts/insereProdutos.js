use("ecomm")

const productsList = [
  {
    "nome": "Notebook Samsung",
    "descrição": "Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\"FHD, W11 Cinza",
    "slug": "notebook-samsung",
    "preco": NumberDecimal(3523),
    "estoque": 1,
    "categoria": "INFORMÁTICA"
  },
  {
    "nome": "Sofá 3 lugares",
    "descrição": "Sofá 3 Lugares Retrátil e Reclinável Cama Inbox Compact 1,80m Velusoft Cinza",
    "slug": "sofa-3-lugares",
    "preco": NumberDecimal(2500),
    "estoque": 1,
    "categoria": "MÓVEIS"
  },
  {
    "nome": "Clean Architecture",
    "descrição": "Arquitetura limpa: O guia do artesão para estrutura e design de software por Robert C. Martin (Uncle Bob)",
    "slug": "livro-clean-architecture",
    "preco": NumberDecimal(102.9),
    "estoque": 2,
    "categoria": "LIVROS"
  },
  {
    "nome": "Mesa de jantar 6 lugares",
    "descrição": "Mesa de Jantar 6 Lugares Lótus Oppa Design - Caramel",
    "slug": "mesa-de-jantar-6-lugares",
    "preco": NumberDecimal(3678.98),
    "estoque": 1,
    "categoria": "MÓVEIS"
  },
  {
    "nome": "iPhone 13 Pro",
    "descrição": "Apple iPhone 13 Pro (256 GB) - Verde-alpino",
    "slug": "iphone-13-pro",
    "preco": NumberDecimal(9176),
    "estoque": 6,
    "categoria": "CELULARES"
  },
  {
    "nome": "Monitor Dell 27",
    "descrição": "Monitor Dell de 27\" P2722H, Preto",
    "slug": "monitor-dell-27",
    "preco": NumberDecimal(1889),
    "estoque": 3,
    "categoria": "INFORMÁTICA"
  },
  {
    "nome": "Implementing Domain-Driven Design",
    "descrição": "Implementando Domain-Driven Design por Vaughn Vernon",
    "slug": "livro-implementing-ddd",
    "preco": NumberDecimal(144.07),
    "estoque": 3,
    "categoria": "LIVROS"
  },
  {
    "nome": "Jogo de pneus",
    "descrição": "Pneu Barum by Continental Aro 13 Bravuris 5hm 175/70r13 82t",
    "slug": "jogo-de-pneus-continental-13",
    "preco": NumberDecimal(1276.79),
    "estoque": 1,
    "categoria": "AUTOMOTIVA"
  },
  {
    "nome": "Clean Code",
    "descrição": "Código limpo: Habilidades práticas do Agile Software por Robert C. Martin (Uncle Bob)",
    "slug": "livro-clean",
    "preco":NumberDecimal(95.17),
    "estoque": 1,
    "categoria": "LIVROS"
  },
  {
    "nome": "Galaxy S22 Ultra",
    "descrição": "Smartphone Samsung Galaxy S22 Ultra 256GB 5G com caneta S PEN - Preto, Câmera Tripla 108MP + Selfie 40MP, RAM 12GB, Tela 6.8",
    "slug": "celular-galaxy-22-ultra",
    "preco": NumberDecimal(8549.1),
    "estoque": 5,
    "categoria": "CELULARES"
  },
  {
    "nome": "Macbook Pro 16",
    "descrição": "Notebook Apple MacBook Pro de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de dez núcleos, de 512 GB SSD - Prateado",
    "slug": "notebook-macbook-pro-16",
    "preco": NumberDecimal(31752),
    "estoque": 1,
    "categoria": "INFORMÁTICA"
  },
  {
    "nome": "Refactoring Improving the Design of Existing Code",
    "descrição": "Refatoração: Aperfeiçoando o Design de Códigos Existentes por Martin Fowler",
    "slug": "livro-refactoring",
    "preco": NumberDecimal(173.9),
    "estoque": 1,
    "categoria": "LIVROS"
  },
  {
    "nome": "Cama queen size",
    "descrição": "Cama Queen Size Dener Oppa Design - Mel",
    "slug": "cama-queen-size-dener",
    "preco": NumberDecimal(3100),
    "estoque": 2,
    "categoria": "MÓVEIS"
  },
  {
    "nome": "Central multimidia",
    "descrição": "Kit Combo Central Multimídia 9 Polegadas Mp5 Automotivo Aparelho 2 Din Som Pra Carro Sistema Operacional Android 12 Bluetooth Usb Gps Integrado Conexão Wifi Função Speedplay que Simula Carplay e Android Auto Mais Aplicativos Como Spotify Waze Youtube WhatsApp, Tela Resistiva, Microfone Externo Função Multi Tela 2gb Ram e 32gb de Memória interna, Entradas para Encostos de Cabeça, Comando de Volante e Para Câmera Frontal ou Traseira + Moldura Painel Kia Sorento 2013 a 2014 Cor Preta + Câmera de ré",
    "slug": "central-multimidia-automotiva",
    "preco": NumberDecimal(711.18),
    "estoque": 1,
    "categoria": "AUTOMOTIVA"
  },
  {
    "nome": "Building Microservices",
    "descrição": "Building Microservices (English Edition) por Sam Newman",
    "slug": "livro-building-microservices",
    "preco": NumberDecimal(300.28),
    "estoque": 2,
    "categoria": "LIVROS"
  },
  {
    "nome": "Galaxy Tab S8",
    "descrição": "Tablet Samsung Galaxy S8 5G SM-X706B 256gb Grafite 8gb Ram",
    "slug": "tablet-galaxy-tab-s8",
    "preco": NumberDecimal(5939.1),
    "estoque": 4,
    "categoria": "INFORMÁTICA"
  }
]

db.products.insertMany(productsList);