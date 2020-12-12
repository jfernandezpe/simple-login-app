import http from 'http';
import login from './login.mjs';

//TODO: dynamic loader, multiples http verbs, etc.
const server = http.createServer((request, response) => {
  if (request.url === '/api/authentication') {
    response.writeHead(200);
    response.end(JSON.stringify(login));
  }
});

server.listen(9000);
