const app = require("./server");
const port = 7002;

app.listen(port, () => {
  console.log(`🚀 app listening at http://localhost:${port}`);
});
