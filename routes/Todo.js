const express = require("express");
const {
 createTodo,removeTodo,updateTodo,getTodos
} = require("../controller/Todo");

const router = express.Router();

router.post("/todos", verifyToken, createTodo);

router.get("/todos", verifyToken, getTodos);

router.put("/todos/:id", verifyToken, updateTodo);

router.delete("/todos/:id", verifyToken, removeTodo);
module.exports = router;
