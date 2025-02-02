const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 8082;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
