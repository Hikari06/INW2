const leia = require("prompt-sync")()

let numero
let total = 0

numero = parseInt(leia("Digite um número inteiro positivo : "))

for (let x=1; x<=numero; x++){
    if((x%2)==0){
        console.log(x)
        total =total + x
    }
}
console.log("total : "+total)