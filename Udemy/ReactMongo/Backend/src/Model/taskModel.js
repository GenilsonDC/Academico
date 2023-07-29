const { Schema } = require("mongoose");
const mongoose = require("../Config/database");
const schema = mongoose.Schema;

const taskSchema = new Schema({
  mac_address: { type: String, required: true },
  type: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, require: true },
  when: { type: Date, required: true },
  done: { type: Boolean, default: false },
  created: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("task", taskSchema);
