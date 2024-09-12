//step1:create a folder
//step2:move into that folder
//step3:npm init -y
//step4:npm i express
//step5:create server.js


//server initialise
const express=require('express');
const app=express();

//used to parse req.body in express->PUT or POST
const bodyParser=require('body-parser');

//specifically parse JSON data & add it to request.Body object
app.use(bodyParser.json());

//activate server at 3000 port
app.listen(3000,()=>{
    console.log('Server started at port number 3000');
});

//Routes
app.get('/',(request,response)=>{
    response.send('Hello kaise ho');
})

app.post('/api/cars',(request,response)=>{
    const {name,brand}=request.body;
    console.log(name)
    console.log(brand)
    response.send("car submitted successfully");    
})
 
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Cars')
.then(()=>{
    console.log("Connection successful")
})
.catch((error)=>{
    console.log("Received an error")
});