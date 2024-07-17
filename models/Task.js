// models/Task.js
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['pending', 'in-progress', 'completed']],
      },
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Task;
};
