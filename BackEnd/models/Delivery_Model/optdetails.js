const mongoose = require('mongoose');


const optdetailsSchema = new mongoose.Schema({

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
    telno:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
    


        
})

module.exports = mongoose.model('OptDetails',optdetailsSchema);