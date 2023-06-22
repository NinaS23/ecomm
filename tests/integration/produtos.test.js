/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import request from 'supertest';
import app from '../../src/app.js';

let server;
beforeEach(() => {
  const port = 6003;
  server = app.listen(port);
});
afterEach(() => {
  server.close();
});

describe('POST em /api/admin/products/', () => {
  it('Deve adicionar um novo Produto', async () => {
    const pegarTodasAsCategorias = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
    const posicaoDaCategoria = pegarTodasAsCategorias.body.length - 1;
    const idDaCategoria = pegarTodasAsCategorias.body[posicaoDaCategoria]._id;

    await request(app)
      .post('/api/admin/products/')
      .send({
        nome: 'Casinha de Cachorro',
        slug: 'casinha de cachorro, pro seu doguinho tirar o melhor cochilo',
        preco_unitario: 550,
        estoque: 3,
        categoria: idDaCategoria,
      })
      .expect(201);
  });
  it('Não Deve adicionar um novo Produto, categoria inválida', async () => {
    await request(app)
      .post('/api/admin/products/')
      .send({
        nome: 'Casinha de Cachorro',
        slug: 'casinha de cachorro, pro seu doguinho tirar o melhor cochilo',
        preco_unitario: 550,
        estoque: 3,
        categoria: '38490324809234802',
      })
      .expect(404);
  });
});

describe('test rota GET /api/products', () => {
  it('listar todas os Produtos', async () => {
    const resposta = await request(app)
      .get('/api/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
    const posicaoProduto = resposta.body.length - 1;
    expect(resposta.body[posicaoProduto].nome).toEqual('Casinha de Cachorro');
  });
});

describe('GET em /api/admin/products/:id', () => {
  it('Deve pegar um produto pelo ID', async () => {
    const pegarTodosOsProdutos = await request(app)
      .get('/api/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
    const posicaoProduto = pegarTodosOsProdutos.body.length - 1;
    expect(pegarTodosOsProdutos.body[posicaoProduto].nome).toEqual('Casinha de Cachorro');

    const idDoProduto = pegarTodosOsProdutos.body[posicaoProduto]._id;
    const idDaCategoriaDoProduto = pegarTodosOsProdutos.body[posicaoProduto].categoria._id;
    const categoriaNome = pegarTodosOsProdutos.body[posicaoProduto].categoria.nome;
    const categoriaStatus = pegarTodosOsProdutos.body[posicaoProduto].categoria.status;
    const nomeDoProduto = pegarTodosOsProdutos.body[posicaoProduto].nome;
    const { slug } = pegarTodosOsProdutos.body[posicaoProduto];
    const precoUnitario = pegarTodosOsProdutos.body[posicaoProduto].preco_unitario;
    const { estoque } = pegarTodosOsProdutos.body[posicaoProduto];

    const resposta = await request(app)
      .get(`/api/admin/products/${idDoProduto}`)
      .expect(200);
    expect(resposta.body).toStrictEqual({
      _id: idDoProduto,
      nome: nomeDoProduto,
      slug,
      preco_unitario: precoUnitario,
      estoque,
      categoria: {
        _id: idDaCategoriaDoProduto,
        nome: categoriaNome,
        status: categoriaStatus,
      },
    });
  });
  it('Retonar 404 quando a categoria desejada não é encontrada', async () => {
    const idDoProduto = '6491d4b686a172d3a51f1670';
    await request(app)
      .get(`/api/categories/${idDoProduto}`)
      .expect(404);
  });

  describe('test rota PUT /api/admin/products/:id', () => {
    it('atualiza o produto pelo ID', async () => {
      const pegarTodosOsProdutos = await request(app)
        .get('/api/products')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
      const posicaoProduto = pegarTodosOsProdutos.body.length - 1;
      const idDoProduto = pegarTodosOsProdutos.body[posicaoProduto]._id;
      await request(app)
        .put(`/api/admin/products/${idDoProduto}`)
        .send({ estoque: 2 })
        .expect(200);
    });
  });

  describe('test rota Delete /api/admin/products/:id', () => {
    it('deleta um produto pelo ID', async () => {
      const pegarTodosOsProdutos = await request(app)
        .get('/api/products')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
      const posicaoProduto = pegarTodosOsProdutos.body.length - 1;
      const idDoProduto = pegarTodosOsProdutos.body[posicaoProduto]._id;
      await request(app)
        .delete(`/api/admin/products/${idDoProduto}`)
        .expect(200);
    });
  });
});
