var exp=require("express");
var app=exp();
var fs=require("fs");
var count=0;
app.get("/mul/:a/:b",(req,res)=>{
if(req.params.a*req.params.b){
    res.send(req.params.a*req.params.b)
}
else{
    res.send("Invalid")
}
})
app.get("/counter",(req,res)=>{
res.send(count)
})
app.get("/counter/inc",(req,res)=>{
    res.send(++count)
})
app.get("/counter/dec",(req,res)=>{
    res.send(--count)
})
app.get("/products",(req,res)=>{
    res.send("prod")
    var data=fs.readFileSync("products.txt");

})
app.listen(process.env.PORT,()=>{
    console.log("server is Running");
})