//import mongoose
const mongoose = require('mongoose');

//define schema for product collection to store data
const orderSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required: true,
        unique: true
    },

    image: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    quantity:{
        type:Number,
        required:true, 
    },

    grandTotal:{
        type:Number,
        required:true,
    }

});

//create a model to store car orders
const myorder = new mongoose.model('myorder', orderSchema) 

//export model
module.exports = myorder