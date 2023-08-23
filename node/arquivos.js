const {error} = require('console')
let {readFile, write, writeFile} = require('fs');

readFile("arquivos.txt","utf-8",(error,texto)=>{
    if(error){
        throw error;
    }else {
        console.log(texto)
    }
})

writeFile("arquivo.txt","Texto feito por write file", (error,texto)=>{
    if(error){
        throw error;
    }else{
        console.log("Escreveu de forma correta")
    }
})