class conta{
    constructor(numero, cpf, saldo, ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo
    }
    ativar(){
        this.ativo = true; 
    }

    credito(valor){
        if (this.ativo){
            if (valor<0)
            console.log("Impossível, realizar, valor negativo ...")
        }

        else if  (valor ==0){
            console.log("Impossível, realizar valor zerado ...")
        }

        else if{
        console.log("conta inativa ...")
        }

        else{
            this.saldo += valor
        }
        
        
    }

    debito(valor){
        
        if (this.ativo){
            if (valor<0){
            console.log("Impossível, realizar, valor negativo ...")
            }
            else if  (valor ==0){
                console.log("Impossível, realizar valor zerado ...")
            }
            else if (valor>this.saldo){
                console.log("Impossível, realizar valor zerado ...")
            }
            else{
                this.saldo -= valor
            }
    }

    else {
        console.log("conta inativa ...")
    }
}
}

//Programa Principal//
const leia = require("prompt-sync")()
let numero = parseInt (leia("Digite o numero da conta : "))
let cpf = leia("Digite o cpf da conta : ")
let c1 = new conta(numero,cpf,0,false)
let op=""
let valor = 0
c1.ativar()
for (let x=1; x<=10; x++){
    op = leia("Digite D débito ou C para crédito :")
    if(op=="D"){
        valor = leia ("Digite o valor para débito : ")
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = leia ("Digite o valor para crédito : ")
        c1.credito(valor)
    }
}
console.log("Saldo final da conta " +c1.saldo)