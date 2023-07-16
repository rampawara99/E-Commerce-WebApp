import BuyerProductsModel from "../model/buyerProductsModel.js";


// This api controller will save buyer items to database
export const addToBuyerItems = async (req, res) => {
    try {
        // getting all buyer items from data base for check dublicate items
        const data = await BuyerProductsModel.find({});
        // check if an item is added duplicate else it will return false
        const isProductInCart = data.some((item) => item.itemsID === req.body.itemsID);
        // console.log(isProductInCart);
        if (isProductInCart) {
            res.status(200).send({ message: "this item all ready added" });
        } else {
            const result = new BuyerProductsModel(req.body);
            await result.save();
            res.status(200).send({ message: "Item Successfully Added" });
        }
    } catch (err) {
        res.status(401).send({ message: "401 Server Error!" });
    }
}

// It will increase items quantity
export const IncreaseQuantity = async (req, res) => {
    // console.log(req.params._id);
    try {
        const data = await BuyerProductsModel.findById(req.params);
        // console.log(data.quantity);
        await BuyerProductsModel.findOneAndUpdate(req.params, { quantity: data.quantity + 1 });
        res.send({ message: "successfully completed" });
    } catch (err) {
        res.status(401).send({ messaage: "401 Server Error!" });
    }
}

// It will decrease items quantity
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

