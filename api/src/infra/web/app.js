const express = require("express");
const mongoose = require("mongoose");

const snippetRoutes = require("./routes/snippet.routes");

const responseHandler = require("./middlewares/responseHandler");

const app = express();

app.use(express.json());

app.use(responseHandler);

app.use("/snippets", snippetRoutes);

const MONGO_URI = `mongodb://127.0.0.1:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

mongoose.connect(MONGO_URI)
  .then(() => console.log("🚀 MongoDB conectado"))
  .catch(err => console.error("Erro ao conectar no MongoDB", err));

module.exports = app;
