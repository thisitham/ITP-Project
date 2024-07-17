const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        require:true
    },
    tpnum:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    subTotal:{
        type:String,
        require:true
    },
    taxPrice:{
        type:String,
        require:true
    },
    shippingPrice:{
        type:String,
        require:true
    },
    totalPrice: {
        type: String,
        require:true
    }

    


        
})

module.exports = mongoose.model('orders',orderSchema);