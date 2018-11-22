const express = require('./config/server');

async function main() {
  const server = new express();
  await server.connection(3000);
} 

main();