const express = require('express');
//const optdetails = require('../models/optdetails');
//const Tests = require('../models/test');
const posts = require('../../models/Delivery_Model/posts');
const Cart = require('../../models/Delivery_Model/cartModel');


const router = express.Router();

router.get("/optdetails/:id1/post/:id2",(req,res) =>{

    let detailID = req.params.id1;
    let detailID2 = req.params.id2;
 
    posts.findById(detailID,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        Cart.findById(detailID2,(err,postd) =>{
            if(err){
                return res.status(400).json({success:false, err});
            }
     
            return res.status(200).json({
               success:true,
               post,
               postd
            });
     
        });
      
 
    });
  
 });

 module.exports = router;