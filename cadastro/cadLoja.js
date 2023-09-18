//requisitando o pacote mongoose
const mongoose = require('mongoose');
//criar a chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/loja', 
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
    descricao : String,
    valor : String,
    estoque : Number,
});

//2 - criando a model
const Alunos = mongoose.model('Alunos', lojaSchema)


//colocar dados dentro desta collection

const carlos = new Alunos({
   descricao : 'rm501',
   valor : 'Carlos Silva',
   estoque : 18 
});

carlos.save();

const maria = new Alunos({
    descricao : 'rm510',
    valor : 'Maria José',
    estoque : 17 
 });

 maria.save();

 


