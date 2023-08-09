//import product collection
const carsmodel = require('../models/carsSchema')

//Define logic to resolve client request 

//get all products
exports.getAllCars = async (req, res) => {
    try {
        const allCars = await  carsmodel.find();
        res.status(200).json(allCars);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//get particular cars from an Id
exports.viewCar = async (req,res) => {
    //get carsId from request
    const id = req.params.id
    //logic
    try{
        //check id is present in mongoDB
        const car = await carsmodel.findOne({id})
        if(car){
            res.status(200).json(car)
        }
        else{
            res.status(404).json("Car not found")
        }
    }
    catch(error){
        res.status(404).json(error)
    }
}