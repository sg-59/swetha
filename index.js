const express=require('express')
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()

const userRouter=require('./Router/userrouter')
const productRouter=require('./Router/productRouter')

mongoose.connect(process.env.Mongourl).then((data)=>{
    console.log("database are connected");
    
}).catch((err)=>{
    console.log(err.message);
    
})

app.use(express.json())

app.use('/user',userRouter)
app.use('/product',productRouter)
       

app.listen(9000,()=>{  
    console.log("port 9000 is connected");
    
})

