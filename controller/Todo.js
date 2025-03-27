const todo = require("../model/Todo");
// add new todo
exports.createTodo = async (req, res) => {
  try {
    const {  title,
    description,
    created_date, 
    due_date, 
      } = req.body;
    const newTodo = new todo({
      title,
      description,
     created_date,due_date
      
    });

    await newTodo.save();
    return res
      .status(200)
      .json({ data: newTodo, message: "todo added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message, message: "Server Error" });
  }
};
// get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await todo.find();
    return res.status(200).json({ data: todos });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
// update todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todo.findByIdAndUpdate(id, req.body);
    const newTodo = await todo.findOne({ _id: id });
    return res
      .status(200)
      .json({ data: newTodo, message: "todo updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error, message: "server error" });
  }
};
// delete todo
exports.removeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todo.findOne({ _id: id });
    await todo.findByIdAndDelete(id);
    res
      .status(200)
      .json({ data: todo, message: "todo deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

