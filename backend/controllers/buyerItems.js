import { response } from "express";
import BuyerProductsModel from "../model/buyerProductsModel.js";


// This api controller will save buyer items to database 
export const addToBuyerItems = async (req, res) => {
    try {
        // this request will check item is exist if yes it will delete that product item
        await BuyerProductsModel.deleteOne({
            itemID: req.body.itemID,
            userID: req.body.userID
        });

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
        // this will get all buyer added data 
        const results = await BuyerProductsModel.find({ userID: req.params._id });

        // Filter out objects with saveLater: 'saveLater' property
        const filteredResults = results.filter((item) => item.saveLater !== 'saveLater');

        res.status(200).send(filteredResults);
    } catch (err) {
        res.status(401).send({ message: "An error occurred 401!" });
    }
}


// This api controller will increase items quantity
export const IncreaseQuantity = async (req, res) => { 
    try {
        const data = await BuyerProductsModel.findById(req.params); 
        const result = await BuyerProductsModel.findOneAndUpdate(req.params, { quantity: data.quantity + 1 });
        res.send(result);
    } catch (err) {
        res.status(401).send({ messaage: "401 Server Error!" });
    }
}

// This api controller will decrease items quantity
export const DecreaseQuantity = async (req, res) => { 
    try {
        const data = await BuyerProductsModel.findById(req.params); 
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
    try { 
        const { _id, key } = req.params;
        const result = await BuyerProductsModel.deleteOne({ itemID: _id, userID: key })
        res.send(result);

    } catch (err) { 
        res.status(401).send({ messaage: "An Error Occurred 401" });
    }
}

// This api controller will control saveletater product's api request
export const saveLaterProducts = async (req, res) => {
    try {
        // It will delete items firstly which is stored in buyerItems collection then product will ready for to add save for later 
        const deletedItem = await BuyerProductsModel.deleteOne({
            itemID: req.body.itemID
        });
        // It will store new item after the delete item in database
        const result = new BuyerProductsModel(req.body);
        await result.save();
        res.send(result);
    } catch (err) { 
        res.status(401).send({ message: "Server Error 401!" });
    }
}

// This api controller will give all saved data which is added to save for later
export const getSaveForLaterItems = async (req, res) => {
    try {
        const { _id, key } = req.params;
        const result = await BuyerProductsModel.find({ userID: _id, saveLater: key });
        res.status(200).send(result);
    } catch (err) {
        res.status(401).send({ message: "An Error accurred 401" });
    }
}
