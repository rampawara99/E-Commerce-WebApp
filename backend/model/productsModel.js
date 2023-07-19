import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    sellerID: {
        type: String,
        require: true
    },
    productDetails:{
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                try {
                    new URL(v);
                    return true;
                } catch (err) {
                    return false;
                }
            },
            message: (props) => `${props.value} is not a valid URL`,
        },
    },
});

const ProductModel = mongoose.model('products', productSchema);
export default ProductModel;