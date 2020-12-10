const a = require('./a')()
const b = require('./b')()
const user = require('./models/user')
const userEmail = require('./models/userEmail')
const userNotification = require('./models/userNotification')

module.exports = ()=> {
  return a + b
}