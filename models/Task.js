// // // src/models/Task.js
// // const { DataTypes } = require('sequelize');
// // const sequelize = require('./index');

// // const Task = sequelize.define('Task', {
// //     title: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //     },
// //     description: {
// //         type: DataTypes.STRING,
// //         allowNull: true,
// //     },
// //     status: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //         validate: {
// //             isIn: [['pending', 'in-progress', 'completed']],
// //         },
// //     },
// //     dueDate: {
// //         type: DataTypes.DATE,
// //         allowNull: true,
// //     },
// // });

// // module.exports = Task;

// // src/models/Task.js
// // models/Task.js
// module.exports = (sequelize, DataTypes) => {
//   const Task = sequelize.define('Task', {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     status: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isIn: [['pending', 'in-progress', 'completed']],
//       },
//     },
//     dueDate: {
//       type: DataTypes.DATE,
//       allowNull: true,
//     },
//   });

//   Task.associate = function(models) {
//     // associations can be defined here
//     Task.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Task;
// };
// src/models/Task.js

// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   const Task = sequelize.define('Task', {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     status: {
//       type: DataTypes.ENUM('pending', 'in-progress', 'completed'),
//       allowNull: false,
//     },
//     dueDate: {
//       type: DataTypes.DATE,
//       allowNull: true,
//     },
//   });

//   Task.associate = function(models) {
//     // Define associations here, if any
//     Task.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false,
//       },
//     });
//   };

//   return Task;
// };

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
