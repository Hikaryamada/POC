/* 
  criar server (conexão express)

  criar banco de dados
    criar schema
    criar model

  criar crud
  criar rota
    conectar crud com rota

  no main 
    informar a porta e a rota para o servido
*/



const express = require('./src/config/server');
const Server = require('./src/server/server.js')
const port = 3000;

async function main() {
  const server = new express();

  Server(port, routes)

  await server.connection(port);
} 


main();

