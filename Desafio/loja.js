const leia = require("prompt-sync")()

let codigos = ["P01","P02","P03","P04"]
let produtos = ["Camisa","Calça","Saia","Short"]
let precos = [0,0,0,0]

console.log("COD\tPRODUTO\tPREÇOS")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}
console.log("Digitação de valores")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i])
    precos[i] = leia ("Digite o valor do produto : ")
}

console.log("COD\tPRODUTO\tPREÇOS")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])
}

console.log("Ateração de dados")
let codigo =leia ("Digite o códigodo produto que deseja trocar o nome : ")
for(let i=0; i<codigos.length; i++){
    if(codigo == codigos[i]){
    console.log("Nome atual do produto : " +produtos[i])
    produtos[i] = leia ("Digite o novo nome : ")
    }
}

