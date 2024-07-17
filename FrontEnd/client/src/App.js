import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateDetails from './Component/CreateDetails';
import DisplayOpt from './Component/DisplayOpt';
import Details from './Component/Details';
import EditOpt from './Component/EditOpt';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import DisplayDelivery from './Component/DisplayDelivery';
import Open from './Component/Open';


export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <NavBar/>
      <div className="container">
          
          <Route path="/" exact component={Open}></Route>
          <Route path="/display/:id1/post/:id2" exact component={DisplayDelivery}></Route>
          
         {/* <Route path="/" exact component={DisplayOpt}></Route> */}
          <Route path="/add/:id"  component={CreateDetails}></Route>
          <Route path="/details/:id"  component={Details}></Route>
          <Route path="/edit/:id" component={EditOpt}></Route>
          
      </div>
      <Footer/>
      </BrowserRouter>
    )
  }
}