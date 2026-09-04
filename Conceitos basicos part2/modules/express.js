const express = require("express");

const app = express();

const port = 8080;

// Rota GET simples

app.get("/home", (req, res) => {
  res.status(200).send("<h1> hello World </h1>");
});

app.get("/users", (req, res) => {
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

  res.status(200).json(users);
});

app.listen(port);
