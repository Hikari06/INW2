//0 Usuário vai digitar 3 números
//1 Mostrar o somatório destes números
//2 Mostrar qual o número maior digitado
//3 A quantidade de números digitados 
//4 O programa para de solicitar números, quando o usuário digitar um número negativo
//5 A soma dos números não deve considerar uma número negativo

const leia  = require("prompt-sync")()

let numero = 0
let contador = 0
let total = 0
let maiorNumero = 0

do {
    total = total +numero
    if (numero > maiorNumero){
        maiorNumero =numero
    }
    contador++
    numero = parseInt(leia ("Digite um número : "))
}
while(numero > 0)
console.log("Total : " +total)
console.log("Maior número : " +maiorNumero)
console.log("Quantidade de número : " +contador)
