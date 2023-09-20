function somaDois(num1, num2){
    return (num1 + num2);
}

console.log("O resultado da soma é " +somaDois(5,7))
console.log("O resultado da soma é " ,somaDois(5,7))

const parImpar = (num) => {
    if(num < 0){
        return'Negativo'
    }
    else if(num ==0){
        return'Neutro'
    }
    else if(num%2==0){
        return'Par'
    }
    else{
        return'Impar'
    }
}

console.log(parImpar(5))
console.log(parImpar(2))
console.log(parImpar(0))
console.log(parImpar(-1))