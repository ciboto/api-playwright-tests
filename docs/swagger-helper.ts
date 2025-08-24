// docs/swagger-helper.ts
import express from 'express';
const app = express();

app.get('/posts', (req, res) => {
  /* #swagger.tags = ['Posts'] */
  /* #swagger.description = 'Retorna todos os posts' */
  /* #swagger.responses[200] = {
        description: 'Lista de posts',
        schema: [{ userId: 1, id: 1, title: '...', body: '...' }]
  } */
  res.send([]);
});

app.get('/posts/:id', (req, res) => {
  /* #swagger.tags = ['Posts'] */
  /* #swagger.description = 'Retorna um post por ID' */
  /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do post',
        required: true,
        type: 'integer'
  } */
  /* #swagger.responses[200] = {
        description: 'Post encontrado',
        schema: { userId: 1, id: 1, title: '...', body: '...' }
  } */
  res.send({});
});

app.post('/posts', (req, res) => {
  /* #swagger.tags = ['Posts'] */
  /* #swagger.description = 'Cria um novo post' */
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados do post',
        required: true,
        schema: { title: 'foo', body: 'bar', userId: 1 }
  } */
  /* #swagger.responses[201] = {
        description: 'Post criado',
        schema: { id: 101, title: 'foo', body: 'bar', userId: 1 }
  } */
  res.send({});
});

app.put('/posts/:id', (req, res) => {
  /* #swagger.tags = ['Posts'] */
  /* #swagger.description = 'Atualiza um post' */
  /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do post',
        required: true,
        type: 'integer'
  } */
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados atualizados',
        required: true,
        schema: { id: 1, title: 'foo', body: 'bar', userId: 1 }
  } */
  /* #swagger.responses[200] = {
        description: 'Post atualizado',
        schema: { id: 1, title: 'foo', body: 'bar', userId: 1 }
  } */
  res.send({});
});

app.delete('/posts/:id', (req, res) => {
  /* #swagger.tags = ['Posts'] */
  /* #swagger.description = 'Deleta um post' */
  /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do post',
        required: true,
        type: 'integer'
  } */
  /* #swagger.responses[200] = { description: 'Post deletado' } */
  res.send({});
});

export default app;
