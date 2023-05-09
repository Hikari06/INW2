class conta {
    constructor(numero, saldo, ativa){
    this.numero = numero;
    this.saldo = saldo;
    this.ativa = ativa
    }
    credito(valor){
        if(valor < 0){
            console.log("Impossível fazer, número negativo ...")
        }
        else if (this.saldo < valor){
            console.log("Impossível realizar . saldo indisponível ...")
        }
        else {
            this.saldo = this.saldo = valor
        }
    }
}

//programa principal

let c1 = new conta(15,0,true)
console.log("Saldo atual conta :"  +c1.saldo)
c1.credito(100)
console.log("Saldo atual conta :"  +c1.saldo)
c1.debito(50)
console.log("Saldo atual conta :"  +c1.saldo)
c1debito(60)
console.log("Saldo atual conta :"  +c1.saldo)
