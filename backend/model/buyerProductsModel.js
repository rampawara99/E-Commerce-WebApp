import mongoose from "mongoose";

const Schema = mongoose.Schema({
    productName: {
        type: String, 
    },
    price: {
        type: Number, 
    },
    category: {
        type: String, 
    },
    quantity: {
        type: Number, 
    },
    companyName: {
        type: String, 
    },
    userID: {
        type: String,
        require: true
    },
    productDetails: {
        type: String, 
    },
    imageUrl: {
        type: String
    },
    itemID: {
        type: String
    },
    sellerID: {
        type: String
    },
    saveLater:{
        type: String
    }
});

const BuyerProductsModel = mongoose.model('buyerItems', Schema);
export default BuyerProductsModel;