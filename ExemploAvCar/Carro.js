let carro ={

    marca:"Chevrolet",
    
    modelo:"Onix",
    
    ano: 2018,
    
    preco: 45000,
    
    motor: {
    
        cilindradas: 1.4,
    
        potencia: 100
    
    },
    
    acelerar: function(){
    
    console.log("acelerando...")
    
    }
    
    }
    
    
    
    
    console.log("Tempo de fabricação :"+(2023-carro.ano))

    let pessoa = {

        Nome: "Yuzuru",
        
        reside: "Brasil",
        
        Nasc: {
        
            dia:26,
        
            mes:12,
        
            ano:2004,
        
            cidade: "Fukui"
        
        },
        
        mostraidade: function(){
        
            console.log("Sua idade é"+ 2023-this.Nasc.ano)
        
        }
        
              
        
        }

        console.log(pessoa.Nome.toUpperCase())
        
        pessoa.mostraidade();
        
        carro.acelerar()