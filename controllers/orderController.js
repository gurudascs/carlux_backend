//import order collection
const myorder = require('../models/orderSchema')

//add to my orders
exports.addToOrder = async (req, res) => {
    //get car details from the request

    const { id, image, brand, price, type, quantity, grandTotal } = req.body

    //logic
    try {
        //check if car is alraedy in my orders collection
        const car = await myorder.findOne({ id })

        if (car) {
            //car is in the my orders collection, so increment order quantity
            car.quantity += 1
            //update order grand total
            car.grandTotal += price * quantity
            //to update order grand total in mongodb collection
            car.save()
            //to send response back to client
            res.status(200).json("Your dream car added to my orders")
        }
        else {
            //car is not in the collection
            //add order to my orders
            const newCar = new myorder({ id, image, brand, price, type, quantity, grandTotal: price })
            //save new order in my orders
            await newCar.save()
            //to send response back to client
            res.status(200).json("Your dream car added successfully")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}

//get my orders
exports.getOrder = async (req, res) => {
    //get all orders from my orders
    //logic
    try {
        const allorders = await myorder.find()
        res.status(200).json(allorders)
    }
    catch (error) {
        res.status(404).json(error)
    }
}

//my orders deletion
exports.removeOrderItem = async (req, res) => {
    //get id from the request
    const { id } = req.params
    //product remove from the my orders collection
    try {
        //logic
        const removeorder = await myorder.deleteOne({ id })
        if (removeorder.deleteCount != 0) {
            //remaining orders from the my orders displayed to frontend 
            const allorders = await myorder.find()
            res.status(200).json(allorders)
        }
        else {
            res.status(404).json("Order not found")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}