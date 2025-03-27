const express = require("express");
const {
 createTodo,removeTodo,updateTodo,getTodos
} = require("../controller/Todo");

const router = express.Router();

router.post("/todos", createTodo);

router.get("/todos", getTodos);

router.put("/todos/:id", updateTodo);

router.delete("/todos/:id", removeTodo);
module.exports = router;
