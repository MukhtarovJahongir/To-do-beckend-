const { ToDo } = require("../models/index");
const { validateToDo } = require("../validation/todo.validation");

// Post To-do
exports.createToDo = async (req, res) => {
  const { error } = validateToDo(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const todo = await ToDo.create(req.body);
    res.status(201).send(todo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get All to-do
exports.getToDo = async (req, res) => {
  try {
    const todo = await ToDo.findAll();
    res.status(200).send(todo);
  } catch (err) {
    res.status(500).send(error.message);
  }
};

// Get to-do by ID
exports.getToDoById = async (req, res) => {
  try {
    const todo = await ToDo.findByPk(req.params.id);
    if (!todo) return res.status(404).send("Iteam not found");
    res.status(200).send(todo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update to-do
exports.updateToDo = async (req, res) => {
  const { error } = validateToDo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const todo = await ToDo.findByPk(req.params.id);
    if (!todo) return res.status(404).send("To-do not found");
    await todo.update(req.body);
    res.status(200).send(todo);
  } catch (err) {
    res.stastus(500).send(err.message);
  }
};

// Delete to-do

exports.deleteToDo = async (req,res) => {
  try {
    const todo = await ToDo.findByPk(req.params.id);
    if (!todo) return res.status(404).send("To-do not found");

    const deletedData = todo.toJSON();
    await todo.destroy();
    res.status(200).send(deletedData);
  } catch (err) {
    res.status(500).send(err.message)
  }
};
