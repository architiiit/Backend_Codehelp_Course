const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB ka connection is successful"))
    .catch((error)=>{
        console.log("Issue in DB Connection");
        console.error(error.message);
        //what is its meaning??
        process.exit(1);
    });
}

module.exports=dbConnect;