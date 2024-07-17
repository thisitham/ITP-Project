const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");



const app = express();

const detailsRoutes = require('./BackEnd/routes/Delivery_Routes/optdetails');
// const newdetailsRoutes = require('./BackEnd/routes/test');
const mixdetailsRoutes = require('./BackEnd/routes/Delivery_Routes/mix');
const ordersRoutes = require('./BackEnd/routes/Delivery_Routes/orders');


app.use(bodyParser.json());
app.use(cors());

app.use(detailsRoutes);
// app.use(newdetailsRoutes);
app.use(mixdetailsRoutes);
app.use(ordersRoutes);




//const DB_URL = 'mongodb+srv://Dmanaram:Dmgtm@cluster0.1vbrk.mongodb.net/OptDelivery_DB?retryWrites=true&w=majority'
const DB_URL = 'mongodb+srv://itpproject:projectpass@cluster0.ximc9.mongodb.net/customerdb?retryWrites=true&w=majority';


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})   
.then(() =>{
   console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


const PORT = 8000;


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});