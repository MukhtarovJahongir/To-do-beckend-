const Joi = require("joi");

const validateToDo = (todo) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    completed: Joi.boolean().optional(),
  });

  return schema.validate(todo);
};

module.exports = { validateToDo };
