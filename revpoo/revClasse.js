class Pessoa {
    construtor(cpf,nome,anoNascimento){
    this.cpf = cpf;
    this.nome = nome;
    this.anoNascimento = anoNascimento
    }
    mostraIdade(){
     console.log(2023-this.anoNascimento)
    }
}

class Aluno extends Pessoa {
    constructor(cpf,nome,anoNascimento,matricula, nota){
        super(cpf,nome,anoNascimento);
        this.matricula = matricula;
        this.nota = nota
    }
}

    //Programa Principal
const leia = require("prompt-sync")()
let p1 = new Aluno ("111.222.333-44","Marcos", 2008,"MAT01")
let p2 = new Aluno ("333.444.555-66","Maria", 2004,"MAT02")
let p3 = new Aluno ("444.555.666-77","Marcos", 2007,"MAT03")
let p4 = new Aluno ("888.999.111-22","Marcos", 2006,"MAT04")

console.log("MAT\tALUNO\tNOTA")
console.log("--------------------------------------------------------------------------")
console.log("p1.matricula+\t+p1.nome+\t+p1.nota")
console.log("p2.matricula+\t+p2.nome+\t+p2.nota")
console.log("p3.matricula+\t+p3.nome+\t+p3.nota")
console.log("p4.matricula+\t+p4.nome+\t+p4.nota")
console.log("--------------------------------------------------------------------------")
console.log("Digita a nota")
console.log(p1.nome)
p1.nome = parseInt(leia("Digite a nota do aluno : "))
console.log(p2.nome)
p2.nome = parseInt(leia("Digite a nota do aluno : "))
console.log(p3.nome)
p3.nome = parseInt(leia("Digite a nota do aluno : "))
console.log(p4.nome)
p4.nome = parseInt(leia("Digite a nota do aluno : "))
console.log("MAT\tALUNO\tNOTA")
console.log("--------------------------------------------------------------------------")
console.log("p1.matricula+\t+p1.nome+\t+p1.nota")
console.log("p2.matricula+\t+p2.nome+\t+p2.nota")
console.log("p3.matricula+\t+p3.nome+\t+p3.nota")
console.log("p4.matricula+\t+p4.nome+\t+p4.nota")
console.log("--------------------------------------------------------------------------")


console.log("\t")
//let p1 = new Pessoa ("111.222.333-44","Marcos", 2008)
//let p2 = new Pessoa ("333.444.555-66","Maria", 2004)
//let p3 = new Pessoa ("444.555.666-77","Marcos", 2007)
//let p4 = new Pessoa ("888.999.111-22","Marcos", 2006)


    //console.log(p1.nome)
    //p1.mostraIdade()
    
    //console.log(p2.nome)
    //p2.mostraIdade()

    //console.log(p3.nome)
    //p3.mostraIdade()

    //console.log(p4.nome)
    //p4.mostraIdade()