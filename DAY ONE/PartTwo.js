const numbers = require('./list.js')
// Part One

// Part Two
let frequencies = [0]
let notRepeat = []
let accumulator = 0
let on = true

while (on) {
  numbers.forEach(num => {
    accumulator += num
    if (frequencies.includes(accumulator)) {
      notRepeat.push(accumulator)
      on = false
    }
    frequencies.push(accumulator)
  })
}

console.log(notRepeat[0])
