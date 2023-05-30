class OticaProduto {
    construtor(id,descricao,ativo,estoque,preco,cor,modelo){
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
    this.estoque = estoque;
    this.preco =preco;
    this.cor = cor;
    this.modelo = modelo;
    }
   
   
    ativar() {
     this.ativo = true;
    }
   
   
   
retirarEstoque(qtd) {
    if (qtd <= this.estoque) {
      this.estoque -= qtd;
      console.log(`Retirada de estoque: ${qtd} unidades do produto ${this.descricao}`);
    } else {
      console.log(`Estoque insuficiente para retirada de ${qtd} unidades do produto ${this.descricao}`);
    }
    console.log(`Saldo atual de estoque do produto ${this.descricao}: ${this.estoque}`);
  }
   
   
incluirEstoque(qtd) {
    const estoqueTotal = this.estoque + qtd;
    if (estoqueTotal <= 10) {
      this.estoque += qtd;
      console.log(`Inclusão de estoque: ${qtd} unidades do produto ${this.descricao}`);
    } else {
      console.log(`Erro: limite máximo de estoque atingido para o produto ${this.descricao}`);
    }
    console.log(`Saldo atual de estoque do produto ${this.descricao}: ${this.estoque}`);
    }
}
   
const produto = new OticaProduto(1, "Óculos de Sol", true, 10, 50.0, "Vermelha", "Aviador", "Oakley");

for (let i = 0; i < 5; i++) {
    const quantidadeCompra = Math.floor(Math.random() * 5) + 1; 
    const valorTotalCompra = quantidadeCompra * produto.preco;
    console.log(`Movimento de compra ${i+1}:`);
    console.log(`Produto: ${produto.descricao}`);
    console.log(`Quantidade comprada: ${quantidadeCompra}`);
    console.log(`Valor total da compra: R$ ${valorTotalCompra.toFixed(2)}`);
    produto.retirarEstoque(quantidadeCompra);
    console.log("------------------");
  }

  const estoqueFinal = 10 - produto.estoque;
  if (estoqueFinal > 0) {
    console.log(`Solicitação de inclusão de estoque: ${estoqueFinal} unidades do produto ${produto.descricao}`);
    produto.incluirEstoque(estoqueFinal);
  }

  console.log("Compra Finalizada.");










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
   
   
   
   
   
   
   
   
   
   
