const async = require('hbs/lib/async');
const { verify } = require('jsonwebtoken');
const order = require('../app/database/models/order.model');


const router=require('express').Router()

//create
router.post("/",verify,async(req,res)=>{
    const newOrder= new order(req.body)
    try{
        const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder)
    }
    catch(err){res.status(500).json(err)}

})
//update

router.put("/:id",verify,async (req,res)=>{
   
    try{
        const updateOrder=await order.findByIdAndUpdate(
            req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateOrder);

    }catch(err){
        res.status(500).json(err)
    }
})
///delete
router.delete("/:id",verify,async(req,res)=>{
    try{
        await order.findByIdAndDelete(req.params.id)
        res.status(200).json("order has been deleted.....")
    }
    catch(err){res.status(500).json(err)}
})

///get user orders
router.get("/find/:id",async(req,res)=>{
    try{
       const orders= await order.find({userId:req.params.userId})
        res.status(200).json(orders)
    }
    catch(err){res.status(500).json(err)}
})
///get all 
router.get("/",verify,async(req,res)=>{
    
    try{
        const orders=await order.find()
        res.status(200).json(orders)

    }
    catch(err){
        res.status(500).json(err);
    }
})
///get monthly income
router.get("/",verify, async(req,res)=>{
    const data=new Date();
    const lastMonth=new Date(date.setMonth(date.getMonth()-1))
    const previousMonth=new Date(date.setMonth(date.getMonth()-1))
    try{
        const data=await user.aggregate([
            {$match :{createdAt:{$gte:previousMonth}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount"
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"},
                }
            }
        ])
        res.status(200).json(income);
    }
    catch(err){
        res.status(500).json(err)

    }
})


module.exports=router;
