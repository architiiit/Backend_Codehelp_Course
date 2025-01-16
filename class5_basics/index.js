
const express=require("express");
const app=express();
const port=3000;

app.use(express.json());
app.listen(port,()=>{
    console.log("App started");
})

//get request
app.get("/",(req,res)=>{
    res.send(`<h1>This is heading</h1>`)
})

app.post("/car",(req,res)=>{
    res.send("Received a post request")
})