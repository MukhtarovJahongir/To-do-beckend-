
module.exports = (sequelize , DataTypes) => {
  const ToDo = sequelize.define("ToDo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    }
  })

  return ToDo;
}