const product=require('../Model/productmodel')
const productInfo=async(req,res)=>{
    try{
const mongoProductdata=await product.create(req.body)
res.status(200).json({messgae:mongoProductdata})
    }catch(err){
res.status(500).json(err.message)
    }
}

module.exports=productInfo