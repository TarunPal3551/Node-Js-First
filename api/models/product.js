const mongoose=require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const productSchema=new Schema({
      _id:ObjectId,
      name:String,
      price:Number,



});
module.exports=mongoose.model('Product',productSchema);