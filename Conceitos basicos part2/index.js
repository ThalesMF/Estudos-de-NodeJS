require("./modules/express");
const dotenv = require("dotenv");
const ConectDB = require("./src/database/conect");

dotenv.config();

ConectDB();
