import http from 'http';
import login from './login.mjs';
import myActivity from './myActivity.mjs';

//TODO: dynamic loader, multiples http verbs, etc.
const server = http.createServer((request, response) => {
  if (request.url === '/api/authentication') {
    response.writeHead(200);
    response.end(JSON.stringify(login));
  }
  if (request.url === '/api/my-activity') {
    response.writeHead(200);
    response.end(JSON.stringify(myActivity));
  }
});

server.listen(9000);
