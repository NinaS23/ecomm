/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import request from 'supertest';
import app from '../../src/app.js';

let server;
beforeEach(() => {
  const port = 6000;
  server = app.listen(port);
});
afterEach(() => {
  server.close();
});

describe('POST em api/admin/categories', () => {
  it('Deve adicionar uma nova categoria', async () => {
    await request(app)
      .post('/api/admin/categories')
      .send({
        nome: 'MUSICA',
        status: 'INATIVA',
      })
      .expect(201);
  });
});

describe('test rota GET api/categories', () => {
  it('listar todas as categorias', async () => {
    const resposta = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
    const posicaoDaCategoria = resposta.body.length - 1;
    expect(resposta.body[posicaoDaCategoria].nome).toEqual('MUSICA');
  });
});

describe('GET em api/categories/{id}', () => {
  it('Deve pegar uma categoria pelo ID', async () => {
    const pegarTodasAsCategorias = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
    const posicaoDaCategoria = pegarTodasAsCategorias.body.length - 1;
    const idDaCategoria = pegarTodasAsCategorias.body[posicaoDaCategoria]._id;
    const resposta = await request(app)
      .get(`/api/categories/${idDaCategoria}`)
      .expect(200);
    expect(resposta.body).toStrictEqual({
      _id: idDaCategoria,
      nome: 'MUSICA',
      status: 'INATIVA',
    });
  });

  describe('test rota PATCH /api/admin/categories/:id', () => {
    it('ativa a categorias', async () => {
      const pegarTodasAsCategorias = await request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
      const posicaoDaCategoria = pegarTodasAsCategorias.body.length - 1;
      const idDaCategoria = pegarTodasAsCategorias.body[posicaoDaCategoria]._id;

      await request(app)
        .patch(`/api/admin/categories/${idDaCategoria}`)
        .expect(200);
    });
  });

  describe('test rota PUT /api/admin/categories/:id', () => {
    it('Atualiza o nome da categorias', async () => {
      const pegarTodasAsCategorias = await request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
      const posicaoDaCategoria = pegarTodasAsCategorias.body.length - 1;
      const idDaCategoria = pegarTodasAsCategorias.body[posicaoDaCategoria]._id;
      await request(app)
        .put(`/api/admin/categories/${idDaCategoria}`)
        .send({ nome: 'FERRAMENTAS' })
        .expect(200);
    });
  });
  describe('test rota Delete api/categories', () => {
    it('deleta a categorias', async () => {
      const pegarTodasAsCategorias = await request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
      const posicaoDaCategoria = pegarTodasAsCategorias.body.length - 1;
      const idDaCategoria = pegarTodasAsCategorias.body[posicaoDaCategoria]._id;
      await request(app)
        .delete(`/api/admin/categories/${idDaCategoria}`)
        .expect(200);
    });
  });
});
