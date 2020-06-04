import express from 'express';

const app = express();

app.get('/users', (request, response) => {

  return response.json([
    'Wagner',
    'Daniela',
    'Lorenzo',
    'Lorena'
  ])
})

app.listen(3333);