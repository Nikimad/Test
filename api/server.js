import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(router);
server.listen(3000);

export default server;
