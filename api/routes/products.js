const express= require('express');
const router= express.Router();
const mongoose=require('mongoose');
const Product=require('../models/product');

router.get('/',(req,res,next)=>{
res.status(200).json({
message:'Handling GET Request to /products'
});

});
router.post('/',(req,res,next)=>{
    const product=new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price

    });
    product.save().then(result=>{
        console.log(result);
        res.status(201).json({
    
            message:'Handling POST Request to /products',
            createdProduct:product
            
            });
    }).catch(err=>{console.log(err); 
    res.status(500).json({
        error:err
    })});

    
    
    });
router.get('/:productId',(req,res,next)=>{
        const id=req.params.productId;
        Product.findById(id).exec().then(
            doc=>{
                console.log("From Database",doc);
                res.status(200).json(doc);
            }
        ).catch(err=>{console.log(err);
        res.status(500).json({
            error:err
        })
    
    });


        // if(id==='t'){
        //     res.status(201).json({
        //         message:'Handling POST Request to /productId',
        //         id: id
                
        //         });
        // }
        // else
        // {
        //     res.status(201).json({
        //         message:'Handling ID',
        //         id: id
                
        //         });
        // }
        
        
        });
router.patch('/:productId',(req,res,next)=>{
            res.status(200).json({
                message:'Handling PATCH Request to /productId',
               
                
                });
            
            
            });
router.delete('/:productId',(req,res,next)=>{
                res.status(200).json({
                    message:'Handling DELETE Request to /productId',
                
                    
                    });
                
        
            
            });
module.exports=router;