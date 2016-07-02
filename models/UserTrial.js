"use strict";

// var Fact = require('../models/Fact.js');
// var Category = require('../models/category.js');
module.exports = function(sequelize, DataTypes) {
  var UserTrial = sequelize.define("UserTrial", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    qualification: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    tableName: 'trials',

    classMethods: {
        associate: function(models) {
          UserTrial.Many(models.User, {
            through: 'user_trials'
          });
          UserTrial.hasMany(models.Question, {
            through: "question_trials"
          });
          UserTrial.hasMany(models.Condition, {
            through: "condition_trials"
          });
        }
    }
  });
  return UserTrial;
};



