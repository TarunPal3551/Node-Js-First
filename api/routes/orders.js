const express= require('express');
const router= express.Router();
const mongoose=require('mongoose');
const Order=require('../models/order');
const Product=require('../models/product');
router.get('/',(req,res,next)=>{
    Order.find().select('product quantity _id').populate('product').exec().then(docs=>{
         res.status(200).json({
count:docs.length,
orders:docs.map(doc=>{
        return{
            _id:doc._id,
            product:doc.product,
            quantity:doc.quantity,
            request:{
                type:'GET',
                url:'http://localhost:3000/orders/'+doc._id
            }
        }

})
});
    }).catch(err=>{
        res.status(500).json({

            error:err
        });
    });
// res.status(200).json({
// message:'Handling GET Request to /orders'
// });

});
router.post('/',(req,res,next)=>{
    Product.findById(req.body.productId)
    .then(products=>{
        if(!products){
            return res.status(404).json({
message:"Product not found"
            });
        }
        const order=new Order({
            _id:mongoose.Types.ObjectId(),
            quantity:req.body.quantity,
            product:req.body.productId
        
        });
        return order.save()
        

    }).then(result=>{
        
        console.log(result);
        res.status(201).json({
            message:'Order Created Succesfully',
            createdOrder:{
                _id:result._id,
                productId:result.product
                ,quantity:result.quantity
            },
            request:{
                type:'GET',
                url:'http://localhost:3000/orders/'+result._id
            }
    
    
    
        });
    }).catch(err=>{
    console.log(err);
    res.status(500).json({
    message:"Error 500",
    error:err
    
    });
    });

});
    // const order={
    //     productId:req.body.productId,
    //     quantity:req.body.quantity,
    // }
    // res.status(201).json({
    // message:'Handling POST Request to /orders',
    // order:order
    
    // });
router.get("/:orderId",(req,res,next)=>{
    const id=req.params.orderId;
    Order.findById(id).select('product quantity _id')
    .populate('product')
    .exec()
    .then(orders=>{
        if(orders){
            res.status(200).json({
                order:orders,
                request:{
                    type:'GET',
                    url:'http://localhost:3000/orders/'
                }
            });
        }
        else{
            res.status(404).json({
                message:'Not Valid Entry Found',
                status:404
            });
        }
       
    }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
        
        
});
router.patch('/:orderId',(req,res,next)=>{
            res.status(200).json({
                message:'Handling PATCH Request to /orderId',
               
                
                });
            
            
            });
router.delete('/:orderId',(req,res,next)=>{
    Order.remove({_id:req.params.orderId}).exec().then(result=>{

       res.status(200).json({

        message:'Order Deleted',
        request:{
            type:'DELETE'

        }
       }); 
    });        
                
    });
module.exports=router;