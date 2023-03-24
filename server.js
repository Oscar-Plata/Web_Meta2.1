const http = require('http');
const puerto = 3001;

http.createServer((req,res)=> {
    res.writeHead(200,{'content-type': 'text/html'});

    res.end(`
    <body bgcolor=black>
    <h1 style="color:rgb(158,12,57)">Request Headers</h1>
    <pre style="color:rgb(251,255,227)">${JSON.stringify(req.headers,undefined,3)}</pre> 
    <h1 style="color:rgb(158,12,57)">Metodo: <span style="color:rgb(251,255,227)">${req.method}</span></h1>
    <h1 style="color:rgb(158,12,57)">URL: <span style="color:rgb(251,255,227)">${req.url}</span></h1>
    `);

}).listen(puerto,(err)=>{
    if(err){
        console.log("Error: ",err);
        return;
    }else{
        console.log("Servidor Iniciado");
    }
})
