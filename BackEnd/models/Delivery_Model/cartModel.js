const mongoose = require('mongoose');

const cartItemsModelSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },


    productId: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    productImage: {
        type: String,
        required: false
    },
    productPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    subTotal: {
        type: String,
    },
    taxPrice: {
        type: String,
    },
    shippingPrice: {
        type: String,
    },
    totalPrice: {
        type: String,
    },



    // cartProducts: [{

    //     productId: {
    //         type: String,

    //     },
    //     productName: {
    //         type: String,

    //     },

    //     productPrice: {
    //         type: String,

    //     },
    //     quantity: {
    //         type: String,

    //     },
    //     subTotal: {
    //         type: String,
    //     }
    // }],





    // itemsPrice: {
    //     type: String,
    //     require: true
    // },
    // taxPrice: {
    //     type: String,
    //     require: true
    // },
    // shippingPrice: {
    //     type: String,
    //     require: true
    // },

    // totalPrice: {
    //     type: String,
    //     required: true
    // }





});

module.exports = mongoose.model('Cart', cartItemsModelSchema);