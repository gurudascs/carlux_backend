//Inside router.js file, import express
const express = require('express')

//import cars controller
const carsController = require('../controllers/carsController')

//import order controller
const orderController = require('../controllers/orderController')

//Using express, create an object for router class in order to setup path
const router = new express.Router()

//Resolve client request in various server routes
//all aAPI call will be resolved

//get all cars
router.get('/cars/all-cars', carsController.getAllCars);

//get particular car details
router.get('/cars/viewcars/:id', carsController.viewCar)

//add to my orders
router.post('/cars/booking', orderController.addToOrder )

//get my orders
router.get('/cars/getorder', orderController.getOrder)

//delete my orders
router.delete('/cars/deleteorder/:id', orderController.removeOrderItem)

//export router
module.exports = router
