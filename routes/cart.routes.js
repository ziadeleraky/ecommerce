const { verify } = require('jsonwebtoken');
const cart = require('../app/database/models/cart.model');


const router=require('express').Router()

//create
router.post("/",verify,async(req,res)=>{
    const newCART= new cart(req.body)
    try{
        const savedCART=await newCART.save();
        res.status(200).json(savedCART)
    }
    catch(err){res.status(500).json(err)}

})
//update

router.put("/:id",verify,async (req,res)=>{
   
    try{
        const updateCart=await cart.findByIdAndUpdate(
            req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateCart);

    }catch(err){
        res.status(500).json(err)
    }
})
///delete
router.delete("/:id",verify,async(req,res)=>{
    try{
        await cart.findByIdAndDelete(req.params.id)
        res.status(200).json("cart has been deleted.....")
    }
    catch(err){res.status(500).json(err)}
})

///get user cart
router.get("/find/:id",async(req,res)=>{
    try{
       const cart= await cart.find({userId:req.params.userId})
        res.status(200).json(cart)
    }
    catch(err){res.status(500).json(err)}
})
///get all 
router.get("/",verify,async(req,res)=>{
    
    try{
        const carts=await cart.find()
        res.status(200).json(carts)

    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports=router;