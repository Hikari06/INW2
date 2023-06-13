const leia  = require("prompt-sync")()

let number =0

number = parseInt(leia ("Digite números entre 5 e 9 : "))

console.log(number)
do {
    number = number * 3
    console.log(number)
}
while(number < 100)