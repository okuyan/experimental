const http = require('http');
const models = require('./models');

const server = http.createServer((request, response) => {

  if(request.url === '/'){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello <strong>World</strong>");
  } else if(request.url === '/api/customers?type=nopurchase'){
    if(request.method === 'GET'){
      models.Customer.findNoPurchase().then((customers) => {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(customers));
      });


    } else if(request.method === 'POST'){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end("Posting goodbye cruel world!");
    }

  }
});

server.listen(3000);
