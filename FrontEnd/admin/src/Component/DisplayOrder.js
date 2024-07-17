import React, { Component } from 'react'
import axios from 'axios'
import './admin.css'

export default class DisplayOrder extends Component {
    
    constructor(props){
        super(props);
 
        this.state={
            orders:{}
        };
 
    }
     
 
      componentDidMount(){
     
         const id = this.props.match.params.id;
 
         axios.get(`http://localhost:8000/orders/${id}`).then((res) =>{
             if(res.data.success){
                 this.setState({
                     orders:res.data.orders
                 });
 
                 console.log(this.state.orders);
             }
         });
 
      }
 






    render() {

        const{email, fname, lname, tpnum, address, subTotal, taxPrice, shippingPrice, totalPrice} = this.state.orders;

        return (
          <div>
              <br/><br/><br/><br/>
              <div class="">
              
             <div class="error-page"  >

                    
                <dl className="raw">
                    

                <dd className="">{email}</dd>

                <dd className="">{fname} {lname}</dd>

                <dd className="">{tpnum}</dd>

                <dd className="">{address}</dd>
                
                <dd className="">{subTotal}</dd>

                <dd className="">{taxPrice}</dd>

                <dd className="">{shippingPrice}</dd>

                <dd className="">{totalPrice}</dd>
                </dl>

                </div>
                <br/>
               </div> 
               <br/>
         </div>
        )
    }
}
