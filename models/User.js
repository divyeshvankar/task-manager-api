// // // src/models/User.js
// // const { DataTypes } = require('sequelize');
// // const bcrypt = require('bcryptjs');
// // const sequelize = require('./index');

// // const User = sequelize.define('User', {
// //     username: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //         unique: true,
// //     },
// //     password: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //     },
// // });

// // User.beforeCreate(async (user) => {
// //     const salt = await bcrypt.genSalt(10);
// //     user.password = await bcrypt.hash(user.password, salt);
// // });

// // module.exports = User;
// // src/models/User.js
// // models/User.js
// // module.exports = (sequelize, DataTypes) => {
// //   const User = sequelize.define('User', {
// //     username: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //       unique: true,
// //     },
// //     password: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //   });

// //   User.associate = function(models) {
// //     // associations can be defined here
// //     User.hasMany(models.Task, {
// //       onDelete: "cascade"
// //     });
// //   };

// //   User.beforeCreate(async (user, options) => {
// //     const salt = await bcrypt.genSalt(10);
// //     user.password = await bcrypt.hash(user.password, salt);
// //   });

// //   return User;
// // };


// // models/User.js

// const bcrypt = require('bcrypt');

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });

//   User.beforeCreate(async (user, options) => {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//   });

//   User.prototype.validPassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
//   };

//   return User;
// };

// models/User.js
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  return User;
};
