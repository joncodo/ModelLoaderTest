// const a = require('./a')
// const b = require('./b')
// const c = require('./c')
const d = require('./d')

const connection = require('./originalModels/connection')

let main = async ()=>{
  await connection.test()
}

main()
