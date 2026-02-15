const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const ToDo = require("./todo.model")(sequelize, Sequelize);

module.exports = {sequelize, ToDo};
