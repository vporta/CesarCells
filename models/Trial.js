"use strict";

  q1 varchar(500) NOT NULL,
  q2 varchar(500) NOT NULL,
  q3 varchar(500) NOT NULL,
  q4 varchar(500) NOT NULL,
  q5 varchar(500) NOT NULL,
  q6 varchar(500) NOT NULL,
  q7 varchar(500) NOT NULL,
  q8 varchar(500) NOT NULL,
  q9 varchar(500) NOT NULL,
  q10 varchar(500) NOT NULL,
  q11 varchar(500) NOT NULL,
  desired_a1 char(1) NOT NULL,
  desired_a2 char(1) NOT NULL,
  desired_a3 char(1) NOT NULL,
  desired_a4 char(1) NOT NULL,
  desired_a5 char(1) NOT NULL,
  desired_a6 char(1) NOT NULL,
  desired_a7 char(1) NOT NULL,
  desired_a8 char(1) NOT NULL,
  desired_a9 char(1) NOT NULL,
  desired_a10 char(1) NOT NULL,
  desired_a11 char(1) NOT NULL,
  PRIMARY KEY(id)
);
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
      type: DataTypes.INTEGER,
    },
    max_age_req: {
      type: DataTypes.INTEGER,
    },
    q1: {
      type: DataTypes.STRING,
    },
    q2: {
      type: DataTypes.STRING,
    },
    q3: {
      type: DataTypes.STRING,
    },
    q4: {
      type: DataTypes.STRING,
    },
    q5: {
      type: DataTypes.STRING,
    },
    q6: {
      type: DataTypes.STRING,
    },
    q7: {
      type: DataTypes.STRING,
    },
    q8: {
      type: DataTypes.STRING,
    },
    q9: {
      type: DataTypes.STRING,
    },
    q10: {
      type: DataTypes.STRING,
    },
    q11: {
      type: DataTypes.STRING,
    },
    desired_a1: {
      type: DataTypes.STRING,
    },
    desired_a2: {
      type: DataTypes.STRING,
    },
    desired_a3: {
      type: DataTypes.STRING,
    },
    desired_a4: {
      type: DataTypes.STRING,
    },
    desired_a5: {
      type: DataTypes.STRING,
    },
    desired_a6: {
      type: DataTypes.STRING,
    },
    desired_a7: {
      type: DataTypes.STRING,
    },
    desired_a8: {
      type: DataTypes.STRING,
    },
    desired_a9: {
      type: DataTypes.STRING,
    },
    desired_a10: {
      type: DataTypes.STRING,
    },
    desired_a11: {
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



