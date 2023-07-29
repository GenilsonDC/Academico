const mongoose = require("mongoose");
const ulr = "mongodb://localhost:27017/todo";
mongoose.connect(ulr, { useNewUrlParser: true });

module.exports = mongoose;
