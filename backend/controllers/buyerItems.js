import { response } from "express";
import BuyerProductsModel from "../model/buyerProductsModel.js";


// This api controller will save buyer items to database 
export const addToBuyerItems = async (req, res) => {
    try {
        // This line checks if the item already exists in the database. If it does, the code sends a response. Otherwise, the code creates a new item and saves it to the database.**
        const data = await BuyerProductsModel.find({
            itemID: req.body.itemID,
            userID: req.body.userID,
        });

        if (data.length > 0) {
            // This line checks if the `data` object has a length greater than 0. If it does, the item already exists in the database.
            res.send({ message: "This item is already added" });
            return;
        }
        // This line creates a new item in the database. The item is created using the `new BuyerProductsModel()` constructor.
        const result = new BuyerProductsModel(req.body);
        await result.save();
        res.status(200).send({ message: "Item Successfully Added" });
    } catch (err) {
        // This line catches any errors that occur.
        res.status(401).send({ message: "An error occurred 401!" });
    }
}

// This api controller will send data to the add-to-cart components which is added by buyer
export const buyerProducts = async (req, res) => {
    try {
        // console.log("buyer products: ", req.params);
        const result = await BuyerProductsModel.find({ userID: req.params._id });
        res.status(200).send(result);
    } catch (err) {
        res.status(401).send({ messaage: "An error occurred 401!" });
    }
}

// This api controller will increase items quantity
export const IncreaseQuantity = async (req, res) => {
    console.log(req.params._id);
    try {
        const data = await BuyerProductsModel.findById(req.params);
        // console.log(data.quantity);
        const result = await BuyerProductsModel.findOneAndUpdate(req.params, { quantity: data.quantity + 1 });
        res.send(result);
    } catch (err) {
        res.status(401).send({ messaage: "401 Server Error!" });
    }
}

// This api controller will decrease items quantity
export const DecreaseQuantity = async (req, res) => {
    console.log(req.params._id);
    try {
        const data = await BuyerProductsModel.findById(req.params);
        console.log(data.quantity);
        if (data.quantity === 1) {
            res.send({ message: "Your item value is all ready " + data.quantity })
        } else {
            await BuyerProductsModel.findOneAndUpdate(req.params, { quantity: data.quantity - 1 });
            res.send({ message: "successfully completed" });
        }
    } catch (err) {
        res.status(401).send({ messaage: "401 Server Error!" });
    }
}

// This api controller will delete buyer item from database
export const deteleBuyerItems = async (req, res) => {
    try{
        console.log(req.params);
        const result = await BuyerProductsModel.deleteOne(req.params)
        res.send(result);

    }catch(err){
        console.log("Error Occured 401");
        res.status(401).send({messaage: "An Error Occurred 401"});
    }
}
