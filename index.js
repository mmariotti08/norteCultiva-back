const server = require("./src/server");
const { PORT } = process.env;
const { conn } = require("./src/db.js");

conn.sync({ force: true })
.then( () => {
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})
.catch(error => console.error("Erros al tratar de sincronizar con la base de datos", error));