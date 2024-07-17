import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import OptTable from './Component/OptTable';
import Footer from './Component/Footer';
import AdminPanel from './Component/AdminPanel';
import orderTable from './Component/orderTable';
import DisplayOrder from './Component/DisplayOrder';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
       <AdminPanel/> 
      <div className="container">
          
          <Route path="/" exact component={orderTable}></Route>
          <Route path="/order" component={OptTable}></Route>
          
          {/* <Route path="/orders/:id" component={DisplayOrder}></Route> */}
          
          
      </div>
      <Footer/>
      </BrowserRouter>
    )
  }
}