const typeorm = require("typeorm");

class DatabaseTyprOrm {
   constructor(host, port) {
        this.host = host;
        this.port = port;
   } 

   connection() {
    typeorm.createConnection({
        type: "postgres",
        host: this.host,
        port: this.port,
        username: "usuario",
        password: "natura",
        database: "produtos",
        synchronize: true,
        entitySchemas: [
        ]
    })
   }
}

module.exports = DatabaseTyprOrm;