//1 - configuração do acesso 
const mongoose  = require ('mongoose');

mongoose.connect('mongodb://127.0.0.1:127017/escola', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Falha na conexão!!!'))
db.once('open',())=>