var exp=require("express")
var app=exp();
app.get("/",(req,res)=>{
    res.send("Running")
})
app.get("/div/:a/:b",(req,res)=>{
    var c=req.params.a/req.params.b;
    res.send(c)
})
app.listen(3500,()=>{
    console.log("Server is Running")
});
