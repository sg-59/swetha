const  postedDatas  = require('../Controller/usercontroller')

const router=require('express').Router()




router.post('/postdata',postedDatas)


module.exports=router