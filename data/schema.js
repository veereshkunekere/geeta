const mongoose=require("mongoose");

const dataSchema=new mongoose.Schema({
    language:String,
    chapter:Number,
    verse:Number,
    line1:String,
    line2:String,
    line3:String,
    meaning:String,
    image:String,
    audio:String
});

const Geeta=mongoose.model("Geeta",dataSchema);

module.exports=Geeta;