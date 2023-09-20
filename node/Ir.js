//fazer uma função arrow que recebe um valor esse valor corresponde ao salario
//função retorna uma informação ao usuário baseado em critérios 
//Se o valor for menor ou igual a 1.500 retorna 0
//Se o valor for maior que 1.500 e menor que 2.500 calcular15% e retornar (valor * 0,15)
//Se o valor for maior que 2.500 calcular 25% e retornar (valor *0,25)
//exibir na tela 
//no casos de isento a frase - Seu salário [valor], e você é isento.
//nos outros casos
//seu salário [valor ], o imposto é de [imposto] e seu salário final é [valor-imposto]

const calcularImposto = (salario) => {
    let imposto = 0;
  
    if (salario <= 1500) {
      return 0;
    } else if (salario > 1500 && salario < 2500) {
      imposto = salario * 0.15;
    } else {
      imposto = salario * 0.25;
    }
  
    const salarioFinal = salario - imposto;
  
    if (imposto === 0) {
      console.log(`Seu salário é R$ ${salario}, e você é isento.`);
    } else {
      console.log(`Seu salário é R$ ${salario}, o imposto é R$ ${imposto}, e seu salário final é R$ ${salarioFinal}.`);
    }
  };
  
  // Exemplos de uso
  calcularImposto(1200);  // Seu salário é R$ 1200, e você é isento.
  calcularImposto(2000);  // Seu salário é R$ 2000, o imposto é R$ 300, e seu salário final é R$ 1700.
  calcularImposto(3000);  // Seu salário é R$ 3000, o imposto é R$ 750, e seu salário final é R$ 2250.
  