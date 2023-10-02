const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "<h1>🤠 Tudo certo</h1>" });
});

module.exports = app;
