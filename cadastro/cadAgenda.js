//requisitando o pacote mongoose
const mongoose = require('mongoose');
//criar a chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/agenda', 
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);
//executando a conexão
const db = mongoose.connection;
//codigos de teste da conexão
db.on('error', console.error.bind(console, 'connection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao mongoDB")
})

//segunda - fase - usando o banco- C do CRUD

//1 - criando um Schema
const lojaSchema = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque : Number
});

//2 - criando a model
const Produtos = mongoose.model('Produtos', lojaSchema)


//colocar dados dentro desta collection

const Epaminondas = new Produtos({
   codigo : 'A01',
   descricao : 'Mouse',
   valor : 10,
   estoque : 100
});

Epaminondas.save();

const Carla = new Produtos({
    codigo : 'A02',
    descricao : 'Teclado',
    valor : 20,
    estoque : 20
 });

 Carla.save();

 const Carla = new Produtos({
    codigo : 'A02',
    descricao : 'Teclado',
    valor : 20,
    estoque : 20
 });

 Carla.save();

 const Maria = new Produtos({
    codigo : 'A03',
    descricao : 'Monitor',
    valor : 150,
    estoque : 10
 });

 Maria.save();

 const Joao = new Produtos({
    codigo : 'A04',
    descricao : 'CPU',
    valor : 700,
    estoque : 5
 });

 Joao.save();
