const path = require("path");

// .basename devolve apenas o nome do arquivo atual
console.log(path.basename(__filename));

// .dirname devolve apenas o nome do diretótio do arquivo atual

console.log(path.dirname(__filename));

// .Extname pega a extensão do arquivo

console.log(path.extname(__filename));

// .parse cria um objeto com todas as informações do nosso arquivo atual

console.log(path.parse(__dirname));

// .join permite juntar vários caminhos de arquivos

console.log(path.join(__dirname, "teste", "teste.html"));
