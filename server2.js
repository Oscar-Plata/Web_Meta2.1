const http = require('http');
const puerto = 3001;
const archivos = require('fs');
//se crea el servidor
http.createServer((req,res)=> {
    //Se obtiene el metodo
    var metodo=req.method;
    switch(metodo){

         //Si entramos al server con un metodo GET , nos mostrara un HTML
        case 'GET':    
            res.writeHead(200,{'content-type': 'text/html'}); 
            archivos.createReadStream('./index.html','UTF-8').pipe(res);
            break;

        //Si entramos al server con un metodo POST , nos mostrara el request
        case 'POST':
            let datos = '';
            req.on('data', dataInfo => {datos += dataInfo;})
            req.on('end', () => {res.writeHead(200, {"Content-Type": "text/html"});
            res.end(
                    `
                    <body bgcolor=black>
                    <h1 style="color:rgb(158,12,57)">Request Headers</h1>
                    <pre style="color:rgb(251,255,227)">${JSON.stringify(req.headers,undefined,3)}</pre> 
                    <h1 style="color:rgb(158,12,57)">Metodo: <span style="color:rgb(251,255,227)">${req.method}</span></h1>
                    <h1 style="color:rgb(158,12,57)">URL: <span style="color:rgb(251,255,227)">${req.url}</span></h1>
                    <h1 style="color:rgb(158,12,57)">Datos enviados: <span style="color:rgb(251,255,227)">${datos}</span></h1>
                    `
                );
            });
            break;
    }
}).listen(puerto,(err)=>{
    //abre el puerto e inicia el servidor
    if(err){
        console.log("Error: ",err);
        return;
    }else{
        console.log("Servidor Iniciado");
    }
})
