/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import request from 'supertest';
import app from '../../src/app.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});
afterEach(() => {
  server.close();
});

describe('test rota GET api/categories', () => {
  it('listar todas as categorias', async () => {
    const resposta = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
    expect(resposta.body[0].nome).toEqual('INFORMÁTICA');
  });
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

describe('GET em api/categories/{id}', () => {
  it('Deve pegar uma categoria pelo ID', async () => {
    const pegarTodasAsCategorias = await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
    expect(pegarTodasAsCategorias.body[0].nome).toEqual('INFORMÁTICA');
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
});
