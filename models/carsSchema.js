//import mongoose
const mongoose = require('mongoose');

//define schema for product collection to store data
const carsSchema = new mongoose.Schema({
    
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

    description: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    }

});

//Create a model to store products
const carsmodel = new mongoose.model('carsmodel', carsSchema);

//export model
module.exports =  carsmodel;

