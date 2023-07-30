import ProductModel from "../model/productsModel.js"; 


// Add Product
export const addProduct = async (req, res) => {
    const { companyName, productName, price, productDetails, category, sellerID, imageUrl } = req.body;

    // console.log(req.body);
    if (!companyName || !productName || !price || !productDetails || !category || !sellerID || !imageUrl) {
        return res.status(500).json({ error: "Something is empty, please check the form!" });
    }
    try {
        const product = new ProductModel(req.body);
        await product.save();
        return res.status(201).json(product);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
};

// current seller products api
export const currentSellerProducts = async (req, res) => {
    console.log("current seller: ");
    console.log(req.params);
    try {
        const response = await ProductModel.find({ sellerID: req.params._id });
        res.status(200).send(response)
    } catch (err) {
        // console.log("")
        req.status(500).send({ message: "Server Error! ", err });
    }
}


// put request for products update
export const updateProudct = async (req, res) => {
    // Get the product id from the request
    const id = req.params._id;

    // Update the product with the values from the request
    ProductModel.updateOne({ _id: id }, { $set: req.body }, (err, product) => {
        if (err) {
            res.send(err);
        } else {
            res.send(product);
        }
    });
}

// delete data api handler
export const deleteItem = async (req, res) => {
    try {
        const data = await ProductModel.findById(req.params);

        if (data) {
            await data.deleteOne();
            res.send({ message: 'Data deleted successfully' });
        }
    } catch (err) {
        res.status(500).send({ message: "Something is wrong in the server!" });
    }
}


export const productList = async (req, res) => {
    try {
        const result = await ProductModel.find();
        // console.log(result)
        // console.log('productList...', result);
        res.status(201).json(result);
    } catch (err) {
        res.status(401).json({ message: "Server Problem 401!" });
    }
}

export const categoryApi = async (req, res) => {
    try {
        // Extract the category key from the request parameters
        const { key } = req.params;

        // Perform validation to ensure the category key is provided and valid
        if (!key) {
            return res.status(400).send('Not Found!');
        }

        // Retrieve products from the database based on the category key
        const result = await ProductModel.find({ category: key });

        // Send the retrieved products as the API response
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};


