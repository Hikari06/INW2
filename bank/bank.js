class Conta {
 constructor(numero, cpf, saldo, ativo) {
  this.numero = numero;
  this.cpf = cpf;
  this.saldo = saldo;
  this.ativo = ativo;
  this.limite = 1000; // Limite de R$ 1.000
 }



 ativar() {
  this.ativo = true;
 }



 credito(valor) {
  if (this.ativo) {
     if (valor < 0) {
         console.log("Impossível realizar, valor negativo");
     }
      else if (valor === 0) {
         console.log("Impossível realizar, valor zerado...");
     }
      else {
         this.saldo += valor;
     }
  } 
     else {
     console.log("Conta inativa...");
  }
 }



 debito(valor) {
  if (this.ativo) {
     if (valor < 0) {
         console.log("Impossível realizar, valor negativo...");
     } else if (valor === 0) {
         console.log("Impossível realizar, valor zerado...");
     } else if (valor > this.saldo + this.limite) {
         console.log("Impossível realizar, saldo indisponível...");
     } else {
         if (valor > this.saldo) {
          const limiteUtilizado = valor - this.saldo;
          this.saldo = 0;
          this.limite -= limiteUtilizado;
         } else {
          this.saldo -= valor;
         }
     }
  } else {
     console.log("Conta inativa...");
  }
 }
}

class poupança extends Conta{
    constructor(numero, cpf, saldo, ativo,diaAniversarioConta){
        super(numero,cpf,saldo,ativo);
        this.diaAniversarioConta = diaAniversarioConta
    }
    correcao(dia){
        console.log("aplicando correção")
    }
    }

// Sub-classe conta poupança
class poupança extends Conta{
    constructor(numero, cpf, saldo, ativo,contadorTalao){
        super(numero,cpf,saldo,ativo);
        this.contadorTlao = contadorTalao

    }
    pedirTalao(qtde){
        console.log("pedindo talão")
    }
}

class Especial extends Conta{
    constructor(numero, cpf, saldo, ativo,limite){
        super(numero,cpf,saldo,ativo);
        this.limite = limite

    }
    usarlimite(valor){
        console.log("usando limite")
    }
}


// Sub-classe estudantil

class Estudantil extends Conta{
    constructor(numero, cpf, saldo, ativo,limiteEstudantil){
        super(numero,cpf,saldo,ativo);
        this.limiteEstudantil = limiteEstudantil
    }
    usarEstudantil(valor){
        if(valor <= 0){
            console.log("Impossível realizar, valor negativo...");
        }
        if(valor <= 0){
            console.log("Impossível realizar, valor zerado...");
        }
        if(valor > (this.saldo + this.limiteEstudantil)){
            console.log("Impossível realizar, sem valor no limite e...");
        }
        else{//  <=conta especial
            this.limiteEstudantil = this.limiteEstudantil - valor
            credito(valor)
        }
    }
}

// PROGRAMA PRINCIPAL
const leia = require("prompt-sync")()
let opcao =""

//montando menu

do{
    console.log("")
console.log("1 - conta poupança")
console.log("2 - conta corrente")
console.log("3 - conta especial")
console.log("4 - conta estudante")
console.log("5 - Sair")
console.log("Digiteo numero da sua opiniao : ")
if (opcao  =="1"){
    //console.log("Testando conta poupança")
    console.log("Conta poupança")
    let numero = leia ("Digite numero da conta : ")
    let  cpf =leia ("Digite o cpf da conta : ")
    let diaAniversarioConta = leia("digite o dia de anoversário da conta ")
    let cp1 = new poupança(numero,cpf,0,false,diaAniversarioConta)
    let ceel =  new Estudantil(numero,cpf,0,false, 5000)
    //10 movimentos
    let op=""
    let valor = 0
    for (let  x=1; x<=10; x++){
        valor =leia("Digite o valor : ")
        op =  ("Digite D débito ou C de crédito : ")
        if (op=="D"){
            ceel.debito(valor)
        }else if (op=="C"){
            cp1.credito(valor)
        }
        console.log("Saldo atual R$ : "+ceel.saldo)
    }
}


else if (opcao  =="2"){
    console.log("Testando conta corrente")
}
else if (opcao  =="3"){
    console.log("Testando conta especial")
}
else if (opcao  =="4"){
    //console.log("Testando conta estudantil")
    console.log("Conta Estudantil")
    let numero = leia ("Digite  o número conta : ")
    let cpf = leia("Digite o cpf : ")
    //0, false, 5000 
    let ceel =  new Estudantil(numero,cpf,0,false, 5000)
    //10 movimentos
    let op=""
    let valor = 0
    for (let  x=1; x<=10; x++){
        valor =leia("Digite o valor : ")
        op =  ("Digite D débito ou C de crédito : ")
        if (op=="D"){
            ceel.debito(valor)
        }else if (op=="C"){
            cp1.credito(valor)
        }
        console.log("Saldo atualR$ : "+ceel.saldo)
    }
    valor = parseInt (leia ("Usar limite ? Valor : "))
    ceel.usarEstudantil(valor)
    console.log("Saldo Final : " +ceel.saldo)
}
else if (opcao  =="5"){
    console.log("Saindo do programa...")
}
else {
    console.log("Digitação inválida")
    }
}while (opcao != "5")
console.log("Fim de programa volte sempre")












/*
let numero = parseInt(leia("Digite o número da conta: "));
let cpf = leia("Digite o CPF da conta: ");
let c1 = new Conta(numero, cpf, 0, false);
let op = "";
let valor = 0;
c1.ativar();
for (let x = 1; x <= 10; x++) {
 console.log("Movimento: " + x);
 console.log("Saldo atual da conta: " + c1.saldo);
 op = leia("Digite D - débito ou C para crédito: ");


 if (op === "D") {
  valor = parseInt(leia("Digite o valor para débito: "));
  c1.debito(valor);
 } else if (op === "C") {
  valor = parseInt(leia("Digite o valor para crédito: "));
  c1.credito(valor);
 }
}

console.log("Saldo final da conta: " + c1.saldo);/*
