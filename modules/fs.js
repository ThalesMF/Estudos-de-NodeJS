const fs = require("fs");
const path = require("path");

// .mkdir cria uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro ao tentar criar a pasta", error);
  }

  console.log("Pasta criada com sucesso");
});
// .writeFile cria um arquivo com conteúdo dentro ou sem. Ou sobrescreve um arquivo ja existente
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "Hello World!!",
  (error) => {
    if (error) {
      return console.log("Algo deu errado", error);
    }

    console.log("Arquivo criado com sucesso");

    // .appendFile adiciona conteúdos a algum arquivo existente
    fs.appendFile(
      path.join(__dirname, "/test", "teste.txt"),
      "Adicionando um conteúdo dentro de um arquivo ja criado!!",
      (error) => {
        if (error) {
          return console.log("algo deu errado!", error);
        }

        return console.log("Conteúdo adicionado com sucesso!!");
      },
    );
    // .readFile ler arquivos existente

    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Algo deu errado!!", error);
        }

        console.log("Arquivo lido com sucesso!!", data);
      },
    );
  },
);
