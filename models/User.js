"use strict";

// var Fact = require('../models/Fact.js');
// var Category = require('../models/category.js');
id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password_hash varchar(255) NOT NULL,
  birth_day int NOT NULL,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  sex varchar(255) NOT NULL,
  stargardts_diagnosis varchar(255) NOT NULL,
  country varchar(255) NOT NULL,
  PRIMARY KEY(id)
);
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
    },
    password_hash: {
      type: DataTypes.STRING,
    },
    birth_day: {
      type: DataTypes.DATE,
      isDate: true,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.STRING,
    },
    stargardts_diagnosis: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    myDate: { 
      type: Sequelize.DATE, 
      defaultValue: Sequelize.NOW 
    },
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    tableName: 'users',

    classMethods: {
        associate: function(models) {
          User.belongsToMany(models.Trial, {
            through: 'user_trials'
          });
          User.belongsToMany(models.Condition, {
            through: "user_conditions"
          });
        }
    }
  });
  return User;
};



