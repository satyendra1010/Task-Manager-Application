const express = require("express");
const taskRoutes = express.Router();
const taskController = require("../Controllers/task");

function catchErrors(fn) {
  return function (req, res, next) {
    // Make sure to `.catch()` any errors and pass them along to the `next()`
    // middleware in the chain, in this case the error handler.
    fn(req, res, next).catch(next);
  };
}

taskRoutes.post("/create-new-task", taskController.createTask);

taskRoutes.post("/update-task/:_id", taskController.updateTask);

taskRoutes.post("/delete-task/:_id", taskController.deleteTask);

taskRoutes.get("/get-one-task/:_id", taskController.getOneTask);

taskRoutes.get("/get-all-task", taskController.getAllTask);

module.exports = taskRoutes;
