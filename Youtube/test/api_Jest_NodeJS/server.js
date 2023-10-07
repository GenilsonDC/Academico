const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "🤠 Tudo certo" });
});

module.exports = app;
