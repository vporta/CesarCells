"use strict";

// var UserResponse = require('../models/UserResponse.js');
// var Trial = require('../models/Trial.js');
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
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    informed_consent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    country: {
      type: DataTypes.STRING,
    },
    created_at: { 
      type: Sequelize.DATETIME, 
      defaultValue: Sequelize.NOW, 
    },
    updated_at: { 
      type: Sequelize.DATETIME, 
      defaultValue: Sequelize.NOW, 
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
      }
    }
  });
  return User;
};



