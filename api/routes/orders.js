const express= require('express');
const router= express.Router();
router.get('/',(req,res,next)=>{
res.status(200).json({
message:'Handling GET Request to /orders'
});

});
router.post('/',(req,res,next)=>{
    const order={
        productId:req.body.productId,
        quantity:req.body.quantity,
    }
    res.status(201).json({
    message:'Handling POST Request to /orders',
    order:order
    
    });
    
    });
router.post('/:orderId',(req,res,next)=>{
        const id=req.params.orderId;
        if(id==='t'){
            res.status(201).json({
                message:'Handling POST Request to /orderId',
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
router.patch('/:orderId',(req,res,next)=>{
            res.status(200).json({
                message:'Handling PATCH Request to /orderId',
               
                
                });
            
            
            });
router.delete('/:orderId',(req,res,next)=>{
                res.status(200).json({
                    message:'Handling DELETE Request to /orderId',
                
                    
                    });
                
        
            
            });
module.exports=router;