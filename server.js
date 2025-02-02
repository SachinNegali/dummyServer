const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

console.log("Starting server...");
console.log("Current working directory:", process.cwd());
// console.log(
//   "Contents of db.json:",
//   JSON.stringify(require("./data/db.json"), null, 2),
//   "Contents of db.json:"
// );

server.use(middlewares);
server.use((req, res, next) => {
  console.log("Received request:", req.method, req.url);
  next();
});
server.use(router);

const port = process.env.PORT || 8082;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
