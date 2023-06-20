const leia = require("prompt-sync")()
let matriculas = ["MAT01","MAT02","MAT03","MAT04"]
let alunos = ["MARCOS","PEDRO","MARIA","PAULO"]
let notas = [0,0,0,0]

console.log("MAT\tALUNO\tNOTA")
console.log("-----------------------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("-----------------------------------------------------------")


console.log("Digitação de notas")
console.log("-----------------------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i])
    notas[i] = leia("Digite a nota do aluno : ")
}


console.log("COD\tPRODUTO\tPREÇOS")
console.log("-----------------------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    if(notas[i] > 5){
        situação ='Aprovado'
    }
    else{
        situação ='Rec'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("-----------------------------------------------------------")
console.log("ALTERAÇÃO DE DADOS")
let codigo = leia("Digite o codigo do produto que deseja troca o nome : ")
for(let i=0; i<matriculas.length; i++){
    if(codigo == matriculas[i]){
        console.log(alunos[i]+"Nome atual do aluno "+notas[i])
        alunos[i] = leia("Digite o nova nota do aluno : ")
    }
}
console.log("-----------------------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    if(notas[i] > 5){
        situação ='Aprovado'
    }
    else{
        situação ='Rec'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("-----------------------------------------------------------")

console.log("COD\tPRODUTO\tPREÇOS")
console.log("-----------------------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i])
}
console.log("-----------------------------------------------------------")
