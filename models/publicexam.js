
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/sdbconnection');

const PublicExams = sequelize.define('PublicExams', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.STRING,
    foreignKey: true,
    allowNull: false,
  },
  numberOfAttempts: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numberOfLikes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  averageScore: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});
module.exports = PublicExams;
 