const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");
const mongoosePaginate = require("mongoose-paginate-v2");

// Define collection and schema
const Task = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 30,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    progress: {
      type: String,
      default: "New Task",
    },
  },
  {
    collection: "Task",
  }
);
const initial = 1;
Task.plugin(mongoosePaginate);

autoIncrement.initialize(mongoose.connection);
Task.plugin(autoIncrement.plugin, "id");
mongoose.model("id", Task);
module.exports = mongoose.model("Task", Task);
