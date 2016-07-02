"use strict";

// var Fact = require('../models/Fact.js');
// var Category = require('../models/category.js');
module.exports = function(sequelize, DataTypes) {
  var Trial = sequelize.define("Trial", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    interventions: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.DATE,
      isUrl: true,
    },
    min_age_req: {
      type: DataTypes.STRING,
    },
    max_age_req: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    tableName: 'trials',

    classMethods: {
        associate: function(models) {
          Trial.belongsToMany(models.User, {
            through: 'user_trials'
          });
          Trial.hasMany(models.Question, {
            through: "question_trials"
          });
          Trial.hasMany(models.Condition, {
            through: "condition_trials"
          });
        }
    }
  });
  return Trial;
};



