const mongoose = require("mongoose");

let Todo;

try {
  // Check if the model has already been compiled
  Todo = mongoose.model("todo");
} catch (error) {
  // Define the model if it hasn't been compiled
  const todoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "title is required"],
    },
    desc: {
      type: String,
      required: [true, "desc is required"],
    },
  });

  Todo = mongoose.model("todo", todoSchema);
}

module.exports = Todo;
