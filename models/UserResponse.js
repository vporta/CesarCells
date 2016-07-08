'use strict';

var User = require('../models/User.js');
var Trial = require('../models/Trial.js');

module.exports = function(sequelize, DataTypes) {
  var UserResponse = sequelize.define("UserResponse", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    a1: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a2: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a3: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a4: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a5: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a6: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a7: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a8: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a9: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a10: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    a11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'user_responses',

    classMethods: {
      associate: function(models) {
        UserResponse.hasOne(models.User, {
          through: 'user_responses'
        });
      }
    }
  });
  return UserResponse;
};



