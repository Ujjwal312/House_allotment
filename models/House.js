const mongoose=require("mongoose");
const houseSchema=new mongoose.Schema({
    category:{
 type:String,
required:true,
    },
    housename:{
        type:String,
  required:true,
           },
           createdAt:{
            type:Date,
            default:Date.now(),
        },
})
module.exports=mongoose.model("House",houseSchema);