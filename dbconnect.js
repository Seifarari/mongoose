const mongoose=require('mongoose');
const dbconnect=async()=>{
    try{
        let result=await mongoose.connect('mongodb+srv://Seif:arariseif@newcluster.zutvx.mongodb.net/test');
        console.log("database connected");

    }catch(error){
        console.log(error)
    }
};
module.exports=dbconnect;
