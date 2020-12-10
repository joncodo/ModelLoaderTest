'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('./connection').sequelize()
const UserEmail = require('./userEmail')(sequelize, DataTypes)

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {

    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    photo: DataTypes.STRING,
    displayName: DataTypes.STRING,
    gitlabUsername: DataTypes.STRING,
    githubUsername: DataTypes.STRING,
    githubApiUrl: DataTypes.STRING,
    githubAccessToken: DataTypes.STRING,
    githubRefreshToken: DataTypes.STRING,
    gitlabAccessToken: DataTypes.STRING,
    gitlabRefreshToken: DataTypes.STRING,
    website: DataTypes.STRING,
    isOnboarded: DataTypes.BOOLEAN,
    primaryEmail: DataTypes.STRING,
    isBaseDataSet: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.hasMany(UserEmail)
  return User;
};
