const http = require("http");
const { stringify } = require("querystring");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> Home Page </h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        nome: "thales",
        email: "thales@email.com",
      },

      {
        nome: "joao",
        email: "joao@email.com",
      },
    ];

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port);
