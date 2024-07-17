import React, { Component } from 'react'
import axios from 'axios';
import './Deliver.css';

export default class DisplayDelivery extends Component {

   constructor(props){
      super(props);
  
      this.state={
         //.to create order table
         
         email: "",
         fname: "",
         lname: "",
         tpnum: "",
         address: "",
        //  gender: "",
         subTotal:"",
         taxPrice:"",
         shippingPrice:"",
         totalPrice:"",
         //.....................
          post:{},
          postt:{}

      };
  
   }
      componentDidMount(){
 
         const id1 = this.props.match.params.id1;
         const id2 = this.props.match.params.id2;
    
         axios.get(`http://localhost:8000/optdetails/${id1}/post/${id2}`).then((res) =>{
             if(res.data.success){
                 this.setState({
                   email:res.data.post.email,
                   fname:res.data.post.fname,
                   lname:res.data.post.lname,
                   tpnum:res.data.post.tpnum,
                   address:res.data.post.address,
                  //  gender:res.data.post.gender,
                   subTotal:res.data.postd.subTotal,
                   taxPrice:res.data.postd.taxPrice,
                   shippingPrice:res.data.postd.shippingPrice,
                   totalPrice:res.data.postd.totalPrice

                   //  post:res.data.post,
                   //  postt:res.data.postd
                 });
    
                 console.log(this.state.post);
                 console.log(this.state.postt);
    
             }
         });
    
      }

      

       
       // to create order table.........................................................................


       handleInputchange = (e) => {
         const { name, value } = e.target;
     
         this.setState({
           ...this.state,
           [name]: value
         })
       }

       
       onSubmit = (e) => {
          
        

         e.preventDefault();
     
         const { email, fname, lname, tpnum, address, subTotal , taxPrice , shippingPrice, totalPrice} = this.state;
     
         const data = {
           email: email,
           fname: fname,
           lname: lname,
           tpnum: tpnum,
           address: address,
          //  gender: gender,
           subTotal:subTotal,
           taxPrice:taxPrice,
           shippingPrice:shippingPrice,
           totalPrice:totalPrice
         }
     
         console.log(data)
     
         axios.post("http://localhost:8000/orders/add", data).then((res) => {
           alert("Successfully added cart details to order");
           
         // toast.success('Admin Data Updated successfully',{position:toast.POSITION.TOP_CENTER})
            console.log('thisitha : ', res);
            window.location.href = `/add/${res.data._id}`;
         })
     
       }


        //...................................................................................................





    render() {

      const{email, fname, lname, tpnum, address} = this.state.post;
      const {subTotal,taxPrice,shippingPrice,totalPrice} = this.state.postt;

      


        return (
            <div>
                
                
         <br/><br/>
              {/**/}
              <div class="wrapper">    
              <div class="container">
                <div class="row p-3 mb-2 bg-light text-dark">
                <div class="col-sm">
                <br/>
                <h1 style={{color:"#3FD5AF"}}>Getting your order</h1>
                <br/>
                  
               
             {/**/}
             
      <div class="container border border-info" style={{backgroundColor: "#E9E2E2"}}>   {/*className="col-md-8 mt-4 mx-auto"*/}
         <br/> 

         {/*....................*/}
             
             
         <div class="container"  style={{marginTop:'20px'}}>

               {/* {this.state.post.map((poste) =>(   */}
                  
                   <dl className="raw" >
                     
                    <dt className="col-sm-9">Email Address</dt>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text"
                    className="input"
                    name="telno"
                    value={this.state.email}
                    readOnly/>


                    
                       <hr/>
                    <dt className="col-sm-9">First Name</dt>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text"
                    className="input"
                    name="telno"
                    value={this.state.fname}
                    readOnly/>



                      <hr/>
                    <dt className="col-sm-9">Last Name</dt>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text"
                    className="input"
                    name="telno"
                    value={this.state.lname}
                    readOnly/>



                      <hr/>
                    <dt className="col-sm-9">Phone Number</dt>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text"
                    className="input"
                    name="telno"
                    value={this.state.tpnum}
                    readOnly/>


                      <hr/>
                    <dt className="col-sm-9">Address</dt>
                    &nbsp;&nbsp;&nbsp;
                    <input style={{maxWidth:'5000px' , overflowWrap:'break-word'}}
                    type="text"
                    className="input"
                    name="address"
                    value={this.state.address}
                    readOnly/>


                      {/* <hr/>
                    <dt className="col-sm-9">City</dt>
                    &nbsp;&nbsp;&nbsp;
                    <input type="text"
                    className="input"
                    name="telno"                   
                    value={this.state.gender}                   
                    readOnly/> */}

                   
                      
               </dl>    
               
               {/* ))}*/}
               </div>
               <br/><br/>

         {/**/}
         
      
      </div>
      <br/><br/><br/><br/>
          {/**/}
          
          </div>

               <div class="col-1">
                   <br/>
                        <div class="vl"></div>
                        
               </div>
          
          <div class="col-sm">
                  
               
          {/*1 column s*/}
                <br/><br/>
               <h4 style={{color:"#3FD5AF"}}><i class="fas fa-cart-arrow-down" style={{color:"black"}}></i>&nbsp;Order Summary</h4>
               <br/>
               <div class="border border-info" style={{backgroundColor: "#E9E2E2"}}>
               <div class="row">
               <div class="col">
               
                    {/**/}

                     
                   <div class="container"  style={{marginTop:'20px'}}>
                       
                 {/*  {this.state.postt.map((postt) =>(  */}  
                  
                      <dl className="raw">
                       <dt className="col-sm-20">
                         
                       
                          <div class="row text-center">
                          <div class="col-sm-8 text-center">
                          &nbsp;&nbsp;Sub Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   =
                          </div>
                          <div class="col-sm-4 text-center">
                          
                          
                        
                       
                       <input type="text"
                       className="input"
                       name="telno"
                       value={this.state.subTotal}
                       readOnly/>
                       </div>
                        </div>
                        
                       </dt>

                          

                       <br/>
                       <dt className="col-sm-20">

                         <div class="row text-center">
                          <div class="col-sm-8 text-center">
                          &nbsp;&nbsp;Tax Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   =
                          </div>
                          <div class="col-sm-4 text-center">

                       
                       <input type="text"
                       className="input"
                       name="telno"
                       value={this.state.taxPrice}
                       readOnly/>
                        </div>
                        </div>

                       </dt>



                       <br/>
                       <dt className="col-sm-20">
                            
                       <div class="row text-center">
                          <div class="col-sm-8 text-center">
                          &nbsp;&nbsp;Shipping Price&nbsp;&nbsp;&nbsp;  =
                          </div>
                          <div class="col-sm-4 text-center">

                       
                       <input type="text"
                       className="input"
                       name="telno"
                       value={this.state.shippingPrice}
                       readOnly/>
                         </div>
                        </div>

                       </dt>
                       

                       <hr/>  
                       <dt className="col-sm-20">
                           
                       <div class="row text-center">
                          <div class="col-sm-8 text-center">
                          &nbsp;&nbsp;Total Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   =
                          </div>
                          <div class="col-sm-4 text-center">
                       
                       <input type="text"
                       className="input"
                       name="telno"
                       value={this.state.totalPrice}
                       readOnly/>
                       </div>
                        </div>

                       </dt>
                       <hr/> 
                   

                  </dl>    
                {/*    ))}   */}  

                  </div>
                  {/**/} 
                   
                  </div>
                  </div>
                  </div>  
                  

                  <br/><br/><br/>

                  <div class="d-grid gap-2 col-6 mx-auto">


                  <button className="btn btn-success" onClick={this.onSubmit}>
                        <i className="fas fa-arrow-alt-circle-right" ></i>&nbsp;Optional details
                     </button>
                  
                    {/*to create order table*/} 
                     <button className="btn btn-success" type="submit" style={{ marginTop: '15x' }} >
                  <i className="fas fa-arrow-alt-circle-right #3FD5AF"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp; Payment

                  </button>
                  {/*..................*/} 
                  
                  </div>

                  {/*1 column e*/} 
                  </div>
               </div>
               </div>
               </div>

             {/**/}
             <br/><br/><br/>

            </div>
        )
    }
}

// href={`/edit/${posts._id}`}
//()=>{this.onSubmit(post._id1,postt._id2)}
