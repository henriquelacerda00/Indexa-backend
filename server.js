// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Porta do Render usa process.env.PORT
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rotas personalizadas (se necessário)
// Exemplo: criar uma rota POST customizada
// server.post('/contatos', (req, res, next) => {
//   req.body.createdAt = Date.now();
//   next();
// });

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}`);
});