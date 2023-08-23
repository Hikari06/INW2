const {createServer} = require('http')

let server = createServer((request, response)=>{
    response.writeHead(200,{"Content-ty":"text/html"});
    response.write(`
    <h1>HHello World 2</h1>
    <p>Página Html usando node.js</p>
    `);
    response.end();
})

const port = 8000;
server.listen(port,()=>{
    console.log(`Usando a porta ${port} na URL https://localhost:${port}`)
})