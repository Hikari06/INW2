class Animal {
        construtor(especie,peso,porte,anoNascimento){
            super(especie);
        this.peso = peso;
        this.porte = porte
        this.anoNascimento = anoNascimento;
        }
            fazBarulho(){
            console.log("fazendo barulho ....")
            }

            voltaIdade(anoAtual){
                return (anoAtual - this.anoNascimento)
                }
    }

    class Gato extends Animal{
        construtor(especie,cor,raca){
        super(especie);
        this.cor = cor;
        this.raca = raca   
        }
        miar(){
            console.log("miiiiiiiiiiiaaaaaaaaaaaaaaauuuuuuuuuuuu......")
        }
    }

    //programa principal

    let animal1 = new Animal ("felino",200,"grande",2000)
    let animal2 = new Animal ("Galinaceo",2,"pequeno",2022)
    let animal3 =  new Gato("felino","preto","persa")

    console.log(animal1.raca)
    animal1.fazBarulho()
    console.log(animal1.voltaIdade(2023))
    console.log(animal3.especie)
    animal3.fazBarulho()
    animal3.miar()
    animal3.anoNascimento = 2020
    console.log =(animal3.voltaIdade(2023))