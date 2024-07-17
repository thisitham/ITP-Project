const express = require('express');
const optdetails = require('../../models/Delivery_Model/optdetails');
// const posts = require('../models/test');

const router = express.Router();

//add details

router.post('/optdetails/add',(req,res)=>{

    let newDetails = new optdetails(req.body);

    newDetails.save((err) => {
        if(err){
            return res.status(400).json({
                Error:err
            });
        }
        return res.status(200).json({
            success:"Details added successfully",
            _id: newDetails._id
        });
    });

});


//all retrive
router.get('/optdetails',(req,res) =>{
    optdetails.find().exec((err,optdetails) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDetails:optdetails
        });

    });
});



/*router.get('/optdetailsx',(req,res) =>{
    optdetails.find().exec((err,optdetails) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        posts.find().exec((err,postsDetails) =>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:true,
                existingDetails:optdetails,
                postsDetails: postsDetails,
            });
    
        });
    });
});*/





//get a specific detail

router.get("/optdetails/:id",(req,res) =>{

    let detailID = req.params.id;
 
    optdetails.findById(detailID,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
 
        return res.status(200).json({
           success:true,
           post
        });
 
    });
  
 });


  //get a specific detail test

/* router.get("/optdetails/:id1/post/:id2",(req,res) =>{

    let detailID = req.params.id1;
    let detailID2 = req.params.id2;
 
    optdetails.findById(detailID,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        posts.findById(detailID2,(err,postd) =>{
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
  
 });*/





//update

router.put('/optdetails/update/:id',(req,res)=>{
    optdetails.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,optdetails)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
               success:"updated Succesfully",
               _id: optdetails._id
            });
        }

    );
});

//delete

router.delete('/optdetails/delete/:id',(req,res) =>{
    optdetails.findByIdAndRemove(req.params.id).exec((err,deletedDetails) =>{

        if(err) return res.status(400).json({
              message:"Delete unsuccesfull",err
        });

        return res.json({
              message:"Delete succesfull",deletedDetails
        });
    });
});

module.exports = router;