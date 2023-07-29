const express = require("express");
const server = express();
server.use(express.json());

const taskRoutes = require("./Routes/taskRoutes");
server.use("/task", taskRoutes); //  injetando o arquivo de routas

// server.get("/teste", (req, res) => {
//   res.send("OK - Online ✅");
// });

server.listen(3001, () => {
  console.log(" 🌐 ✅");
});
