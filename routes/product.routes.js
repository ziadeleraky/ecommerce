const async = require('hbs/lib/async');
const { verify } = require('jsonwebtoken');
const product = require('../app/database/models/products.model');
const product=require('../app/database/models/products.model');
const { response } = require('../app/server');

const router=require('express').Router()

//create
router.post("/",verify,async(req,res)=>{
    const newProduct= new product(req.body)
    try{
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct)
    }
    catch(err){res.status(500).json(err)}

})
//update

router.put("/:id",verify,async (req,res)=>{
   
    try{
        const updateProduct=await product.findByIdAndUpdate(
            req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateProduct);

    }catch(err){
        res.status(500).json(err)
    }
})
///delete
router.delete("/:id",verify,async(req,res)=>{
    try{
        await product.findByIdAndDelete(req.params.id)
        res.status(200).json("product has been deleted.....")
    }
    catch(err){res.status(500).json(err)}
})

///get product
router.get("/find/:id",async(req,res)=>{
    try{
       const product= await product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch(err){res.status(500).json(err)}
})
///get all products
router.get("/",verify,async(req,res)=>{
    const qnew=req.query.new;
    const qCategory=req.query.category;
    try{
        if(qnew){
            let products=await product.find().sort({createdAt:-1}).limit(5)
        }else if(qCategory){
            products=await product.find({categories:{
                $in:[qCategory],
            },
            });
        }else{
            products=await product.find();
        }
        
           
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports=router;