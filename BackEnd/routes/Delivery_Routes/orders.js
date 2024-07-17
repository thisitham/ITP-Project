const express = require('express');
const orders = require('../../models/Delivery_Model/orders');

const router = express.Router();


//add table
router.post('/orders/add',(req,res)=>{

    let newOrder = new orders(req.body);

    newOrder.save((err) => {
        if(err){
            return res.status(400).json({
                Error:err
            });
        }
        return res.status(200).json({
            success:"Details added successfully",
            _id: newOrder._id
        });
    });

});



//all retrive
router.get('/orders',(req,res) =>{
    orders.find().exec((err,orders) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrders:orders
        });

    });
});


//delete

router.delete('/orders/delete/:id',(req,res) =>{
    orders.findByIdAndRemove(req.params.id).exec((err,deletedOrders) =>{

        if(err) return res.status(400).json({
              message:"Delete unsuccesfull",err
        });

        return res.json({
              message:"Delete succesfull",deletedOrders
        });
    });
});



//get a specific detail

router.get("/orders/:id",(req,res) =>{

    let detailID = req.params.id;
 
    orders.findById(detailID,(err,orders) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
 
        return res.status(200).json({
           success:true,
           orders
        });
 
    });
  
 });


module.exports = router;