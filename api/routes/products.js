const express= require('express');
const router= express.Router();
const mongoose=require('mongoose');
const Product=require('../models/product');

router.get('/',(req,res,next)=>{
    Product.find().exec().then(docs=>{
console.log(docs);
res.status(200).json(docs);

    }).catch(err=>{
        console.log(err);
        res.status(500).json
        {
            message:'500 Internal Server Error'

        }
    })


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
            createdProduct:result
            
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
                if(doc){
                    res.status(200).json(doc);
                }
                else{
                    res.status(404).json({
                        message:'Not Valid Entry Found',
                        status:404
                    });
                }
                
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
            // res.status(200).json({
            //     message:'Handling PATCH Request to /productId'
               
                
            //     });

            const id=req.param.productId;
            const updateOps={};
            for(const ops of req.body){
                updateOps[ops.propName]=ops.value;
            }
            Product.findByIdAndUpdate(id,{$set: updateOps}).exec().then(result=>{
                console.log(result); 
        res.status(200).json(result);


            }).catch(err=>{
                console.log(err);
                res.status(500).json({
                   error:err
                });    
            });
            
        });
        router.put('/:productId', (req, res) => {
            Product.findByIdAndUpdate(req.params.id, req.body.name, (err, user) => {
                if (err) {
                    return res
                        .status(500)
                        .send({error: "unsuccessful"})
                };
                res.send({success: "success"});
            });
        
        });
router.delete('/:productId',(req,res,next)=>{
const id=req.param.productId;
////Get Solution after searching statOverflow and hit and trial of defined methods
    Product.deleteOne(id)
    .exec().then(
        result=>{
        console.log(result); 
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
           error:err
        });

    });
                // res.status(200).json({
                //     message:'Handling DELETE Request to /productId',
                
                    
                //     });
 });
module.exports=router;