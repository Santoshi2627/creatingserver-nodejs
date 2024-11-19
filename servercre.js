var http=require("http");
var server=http.createServer((req,res)=>{
    res.end("hello world")
})
var port=3000;
server.listen(port,()=>{
    console.log("u r server is running "+port)
})
