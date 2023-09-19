function escreverNoConsole(){
    console.log("Escrevendo na tela usando função !!!")
}

//execução da função
escreverNoConsole();
const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console");
}
textoNoConsole();

const textoPorParametro = function(texto){
    console.log(texto)
}
textoPorParametro("Terceiro exemplo, este é o parametro !!!");

const textoUsandoArrow = (texto) => console.log(texto)

textoUsandoArrow("Quarto exemplo usando arrow function")

//funçõa arrow que recebe um numero e mostra na tela o número se diz der 
//par ou impar,negatico ou zerado

const mostrarParImpar = (numero) => (numero) => {
if(numero < 0){
    console.log(numero, numero,"o numero digitado é negativo")
        
}
else mostrarParImpar = (numero) => (numero) => {
    if(numero < 0){
        console.log(numero, numero,"o numero digitado é negativo é par")
            
    }
    const mostrarParImpar = (numero) => (numero) => {
       else if(numero < 0){
            console.log(numero, numero,"o numero digitado é negativo")
                
        }
}