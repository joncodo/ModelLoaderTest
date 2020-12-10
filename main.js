// const a = require('./a')
// const b = require('./b')
// const c = require('./c')


// console.log('a', a())
// console.log('b', b())
// console.log('c', c())

const connection = require('./models/connection')

let main = async ()=>{
  await connection.test()
}

main()
