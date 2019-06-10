const numbers = require('./list.js')

let total = numbers.reduce((accumulator, num) => accumulator + num, 0)

console.log(total)
