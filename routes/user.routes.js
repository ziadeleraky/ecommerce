const async = require('hbs/lib/async');
const { verify } = require('jsonwebtoken');

const router=require('express').Router()


router.put("/:id",verify,async (req,res)=>{
    if(req.user.id===req.params.id||req.user.isAdmin){
        next()
    }else{
        res.status(403).json("you are not allowed to do that ")
    }
    if(req.body.password){
        req.body.password=cryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try{
        const updateUser=await user.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateUser);

    }catch(err){
        res.status(500).json(err)
    }
})
///get user
router.get("/find/:id",verify,async(req,res)=>{
    try{
       const user= await user.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){res.status(500).json(err)}
})
///delete
router.delete("/:id",verify,async(req,res)=>{
    try{
        await user.findByIdAndUpdate(req.params.id)
        res.status(200).json("user has been deleted.....")
    }
    catch(err){res.status(500).json(err)}
})

module.exports=router;