const user=require('../Model/usermodel')


const postedDatas=async(req,res)=>{
    console.log(req.body);
    
try{
const mongoData=await user.create(req.body)
res.status(200).json({response:mongoData})
}catch(err){
res.status(500).json(err.message)
}
}




module.exports=postedDatas