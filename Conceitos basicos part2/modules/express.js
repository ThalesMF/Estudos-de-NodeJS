const express = require("express");
const UserModel = require("../src/models/user.model");
const app = express();

app.use(express.json());

const port = 800;

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

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port);
