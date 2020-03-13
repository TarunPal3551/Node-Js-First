const express= require('express');
const router= express.Router();
router.get('/',(req,res,next)=>{
res.status(200).json({
message:'Handling GET Request to /products'
});

});
router.post('/',(req,res,next)=>{
    const product={
        name:req.body.name,
        price:req.body.price 

    };
    res.status(201).json({
    message:'Handling POST Request to /products',
    createdProduct:product
    
    });
    
    });
router.post('/:productId',(req,res,next)=>{
        const id=req.params.productId;
        if(id==='t'){
            res.status(201).json({
                message:'Handling POST Request to /productId',
                id: id
                
                });
        }
        else
        {
            res.status(201).json({
                message:'Handling ID',
                id: id
                
                });
        }
        
        
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