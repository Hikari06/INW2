var http = require ('http');
var server =http.createServer(function(request,response){
    response.writeHead("200", {"Content-type": "text/html"});
    if(request.url == "/"){
        response.write("<h1>Página Principal<h1>");
    }
    else if(request.url == "/bem vindo"){
        response.write("<h1>Bem Vindo!!!<h1>");
    }
    else{
        response.write("<h1>Página não encontrada!!!<h1>");
    }

    response.end();
});

const port = 3000;
server.listen(port, () =>{
    console.log(`Servidor executando em http://localhost:${port}/`);
})