const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created_date: { type: Date, default: Date.now }, 
  due_date: { type: Date, required: true }, 
  completed: { type: Boolean, default: false },
  pending: { type: Boolean, default: true }, 
});

module.exports = mongoose.model("Todo", TodoSchema);
