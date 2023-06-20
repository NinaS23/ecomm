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
  it('Não Deve adicionar uma categoria com campos vazios', async () => {
    await request(app)
      .post('/api/admin/categories')
      .send({
        nome: '',
        status: 'INATIVA',
      })
      .expect(404);
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
  it('Retonar 404 quando a categoria desejada não é encontrada', async () => {
    const idDaCategoria = '6491d4b686a172d3a51f1670';
    await request(app)
      .get(`/api/categories/${idDaCategoria}`)
      .expect(404);
  });

  describe('test rota /api/admin/categories/:id', () => {
    it('ativa a categorias', async () => {
      const pegarTodasAsCategorias = await request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
      const posicaoDaCategoria = pegarTodasAsCategorias.body.length - 1;
      const idDaCategoria = pegarTodasAsCategorias.body[posicaoDaCategoria]._id;
      console.log(idDaCategoria);
      await request(app)
        .patch(`/api/admin/categories/${idDaCategoria}`)
        .expect(200);
    });
    it('Retorna 409, conflito com categoria já ativada', async () => {
      const pegarTodasAsCategorias = await request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
      const posicaoDaCategoria = pegarTodasAsCategorias.body.length - 1;
      const idDaCategoria = pegarTodasAsCategorias.body[posicaoDaCategoria]._id;
      await request(app)
        .patch(`/api/admin/categories/${idDaCategoria}`)
        .expect(409);
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
