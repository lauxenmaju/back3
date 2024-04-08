//criando o primeiro servidor http

const http=require("http");

const server=http.createServer((req,res)=>{
    console.log("Efetuando o pedido ");
    //header
    res.setHeader("content-type","text/html");
    res.write("<h1>Pedido aceito</h1>");
    res.write("<h2>Já entendi que o pedido foi aceito</h2>");
    res.end();
});

server.listen(3000,"localhost", ()=>{
    console.log ("Servidor iniciado");
});