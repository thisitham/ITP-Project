import React, { Component, component } from 'react'
import axios from 'axios'
import './admin.css'
import ReactToPrint from 'react-to-print';
// import App, { orderTable} from './App';



export default class orderTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    this.retriveOrders();
  }





  retriveOrders() {
    axios.get("http://localhost:8000/orders").then(res => {
      if (res.data.success) {
        this.setState({
          orders: res.data.existingOrders
        });

        console.log(this.state.orders);
      }

    })
  }


  onDelete = (id) => {

    axios.delete(`http://localhost:8000/orders/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retriveOrders();
    })

  }










  //search start

  filterData(orders, searchKey) {

    const result = orders.filter((orders) =>
      orders.email.toLowerCase().includes(searchKey) ||
      orders.email.toUpperCase().includes(searchKey) ||
      orders.fname.toLowerCase().includes(searchKey) ||
      orders.fname.toUpperCase().includes(searchKey) ||
      orders.lname.toLowerCase().includes(searchKey) ||
      orders.lname.toUpperCase().includes(searchKey) ||
      orders.address.toLowerCase().includes(searchKey) ||
      orders.address.toUpperCase().includes(searchKey)


    )

    this.setState({ orders: result })

  }






  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/orders").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingOrders, searchKey)

      }

    });

  }

  //search end











  render() {
    return (
      <div className="container">
        <br /><br /><br />

        {/* nav bar */}
        <table className="table1">
          <thead className="thead1">
            <th className="th1">DELIVERY MANAGEMENT</th>
            <th className="th2">
              <a name="report" id="reportGen" class="btn btn-primary" href="/" role="button">
                <i class=""></i>&nbsp;
                <i style={{ textDecoration: 'none' }}></i>Optional Details
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a name="addAdmin" id="addAdmin" class="btn btn-primary" href="/order" role="button">
                <i class=""></i>&nbsp;
                <i style={{ textDecoration: 'none' }}></i>Orders

              </a>
            </th>
          </thead>
        </table>
        {/* nav bar end */}




        {/* search bar start */}


        <div className="raw">
          <div className="col-lg-9 mt-2 mb-2">

            <h1 style={{ marginLeft: "30%" }}>ALL Orders</h1>
          </div>
          <div class="alg">
            <div className="col-lg-9 mt-2 mb-2">
              <input
                className="form-control "
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}>

              </input>
            </div>
          </div>

        </div>

        <br />
        {/* search bar end */}








        <div class="table-wrapper" ref={(el) => (this.componentRef = el)}>
          <table class="fl-table"  >  {/* className="table" */}
            <thead >
              <tr>
                <th scope="col">Number</th>
                <th scope="col">E-mail</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>

                <th scope="col">Sub Total</th>
                <th scope="col">Tax Price</th>
                <th scope="col">Shipping Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((orders, index) => (
                <tr key={index}>
                  <th scope="raw">{index + 1}</th>

                  <td>{orders.email}</td>
                  <td>{orders.fname}</td>
                  <td>{orders.lname}</td>
                  <td>{orders.tpnum}</td>
                  <td>{orders.address}</td>

                  <td>Rs.{orders.subTotal}</td>
                  <td>Rs.{orders.taxPrice}</td>
                  <td>Rs.{orders.shippingPrice}</td>
                  <td>Rs.{orders.totalPrice}</td>
                  <td>

                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(orders._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>

                  </td>
                </tr>
              ))}


            </tbody>

          </table>

        </div>

        <div>
          <br />
          <ReactToPrint

            trigger={() => <button style={{ marginRight:'auto' }} className="generateReport1 btn btn-info btn-lg" type="button"><i class="fas fa-redo pr-2" aria-hidden="true"></i> Generate Report

            </button>}

            content={() => this.componentRef}

          />

           <br /><br /><br />  

        </div>

      </div>
    )
  }
}


// export default class Print extends Component {

//   render() {

//     return (

//       <div>
//         <br /><br /><br /><br />
//         <ReactToPrint

//           trigger={() => <button className="generateReport1" type="button"><i class="fas fa-redo pr-2" aria-hidden="true"></i> Generate Report

//           </button>}

//           content={() => this.componentRef}

//         />

//         <orderTable ref={(el) => (this.componentRef = el)} />

//       </div>

//     )

//   }

// }

// export {
//   orderTable,
//   Print,
// }




