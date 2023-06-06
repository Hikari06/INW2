nome = leia("Digite seu nome  : ")
anoNascimento = parseInt(leia("Digite o ano de nascimento : "))

idade = 2023 -anoNascimento
if(idade <= 3){
    console.log("Não atendemos bebês")
}
else if(idade > 3 && idade <= 13){
    console.log(nome + "faixa infantil")
}
else if(idade > 13 && idade <= 17){
    console.log(nome + "faixa adolescentes")
}
else if(idade > 17 && idade <= 65){
    console.log(nome + "faixa adultos")
}
else {
    console.log("Não atendemos idosos")
}