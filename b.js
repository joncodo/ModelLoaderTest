const a = require('./a')
const { DataTypes } = require('sequelize');
const sequelize = require('./originalModels/connection').sequelize()
const user = require('./originalModels/user')(sequelize, DataTypes)
const userEmail = require('./originalModels/userEmail')(sequelize, DataTypes)
const userNotification = require('./originalModels/userNotification')(sequelize, DataTypes)

module.exports = ()=>{
  return 'b'
}