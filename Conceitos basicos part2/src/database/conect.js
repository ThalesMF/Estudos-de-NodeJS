const mongoose = require("mongoose");

async function conectToDataBase() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@estudos-nodejs.vwda41t.mongodb.net/?appName=Estudos-nodeJS`,
  );

  console.log("banco de dados conectado!");
}

module.exports = conectToDataBase;
