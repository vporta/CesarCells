'use strict';

var User = require('../models/User.js');

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
      allowNull: true,

    },
    q2: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q3: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q4: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q5: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q6: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q7: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q8: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q9: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q10: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    q11: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a1: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a2: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a3: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a4: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a5: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a6: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a7: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a8: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a9: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a10: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    desired_a11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'trials',

    classMethods: {
      associate: function(models) {
        Trial.belongsToMany(models.User, {
          through: 'user_trials'
        });
      }
    }
  });
  return Trial;
};



