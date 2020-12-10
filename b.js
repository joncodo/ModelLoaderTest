const a = require('./a')
const user = require('./models/user')({}, {})
const userEmail = require('./models/userEmail')({}, {})
const userNotification = require('./models/userNotification')({}, {})

module.exports = ()=>{
  console.log('JON >>> a', a)
  return 'b'
}