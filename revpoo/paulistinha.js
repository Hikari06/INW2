let equipe1 = "SFC"
let equipe2 = "SPFC"
let equipe3 = "SCCP"
let equipe4 = "SEP"

let pontos1 = 3
let pontos2 = 3
let pontos3 = 3
let pontos4 = 3


const leia  = require("prompt-sync")()
//arrays ou vetores
let equipes = ['SFC','SPFC','SCCP','SEP']
let pontos = [0,0,0,0]

for (let x=0; x<equipes.length; x++){
    console.log(equipes[x])
    pontos[x] = parseInt(leia("Digite quantos pontos : "))
}

console.log("Tabela")
console.log("TIME\tPontos")
for(let x=0;  x<equipes.length; x++){
    console.log(equipes[x] +'\t' +pontos[x])
}

//console.log("TIME\tPontos")
//for(let i=0; i<4 ; i++){
//    console.log(equipes[i]+'\t'+pontos[i])
//}
//console.log(equipe1[0]+'\t'+pontos1[0])
//console.log(equipe2[1]+'\t'+pontos2[1])
//console.log(equipe3[2]+'\t'+pontos3[2])
//console.log(equipe4[3]+'\t'+pontos4[3])