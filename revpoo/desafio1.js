const leia  = require("prompt-sync")()


//let usuario = leia ("Digite o nome do usuário : ")
//let salario = leia ("Digite o valor do salário : ")

//variaveis
let usuario
let salario
let imposto
//entradas
usuario = leia ("Digite o nome do usuário : ")
salario = leia ("Digite o valor do salário : ")

if(salario <= 2500){
    console.log(usuario + "Você é isento!!!")
}
else if(salario > 2500 && salario <= 5000){
    imposto = salario * 0.15
    console.log("Oi Sr."+usuario+" seu imposto é "+imposto)
    console.log("Seu salário liquido é "+(salario-imposto))
}
else{
    imposto = salario * 0.25
    console.log("Oi Sr."+usuario+" seu imposto é "+imposto)
    console.log("Seu salário liquido é "+(salario-imposto))
}
console.log("Fim d e programa")