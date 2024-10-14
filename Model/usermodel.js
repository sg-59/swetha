const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
    username:String,
    place:String,
    job:String,
    mobile:Number,
    password:String
    },{timestamps:true}
)

module.exports=mongoose.model('usercollection',userSchema)