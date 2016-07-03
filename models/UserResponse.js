"use strict";

// var Fact = require('../models/Fact.js');
// var Category = require('../models/category.js');
module.exports = function(sequelize, DataTypes) {
  var UserResponse = sequelize.define("UserResponse", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    a1: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a2: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a3: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a4: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a5: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a6: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a7: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a8: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a9: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a10: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    a11: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    tableName: 'user_responses',

    classMethods: {
      associate: function(models) {
        UserResponse.belongsToMany(models.User, {
          through: 'user_trials'
        });
        UserResponse.belongsToMany(models.Trial, {
          through: "question_trials"
        });
      }
    }
  });
  return UserResponse;
};



