const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
console.log(
    `\{^_^}/ hi!

\x1b[36m%s\x1b[0m`, `server running at port ${port}...`
)