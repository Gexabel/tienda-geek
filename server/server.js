const jsonServer = require('json-server');
const data = require('./database/bd.json');

const server = jsonServer.create();
const router = jsonServer.router(data);

server.use(router);
server.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
