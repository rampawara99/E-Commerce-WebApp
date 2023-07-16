import express from 'express';
import { getUsers, userSignUp, userLogin } from '../controllers/users.js';
import { addProduct, deleteItem,productList,categoryApi,updateProudct, currentSellerProducts } from '../controllers/products.js'; 
import { addToBuyerItems, IncreaseQuantity, DecreaseQuantity} from '../controllers/buyerItems.js'; 

const Router = express.Router()

// It will only communicate with users details
// users
Router.get('/', getUsers);
Router.post('/register', userSignUp);
Router.post('/login', userLogin);

// It will communicate with products
// Products 
Router.post('/add-product', addProduct);
Router.get('/seller-products/:_id',currentSellerProducts);
Router.put('/updateProudct/:_id', updateProudct);
Router.delete('/deleteProduct/:_id',  deleteItem);
Router.get('/product-list',  productList);
Router.get('/categorysApi/:key', categoryApi);

// Buyers Items APIs
Router.post('/add-to-buyer-items', addToBuyerItems);
Router.put('/increase-items-quantity/:_id', IncreaseQuantity);
Router.put('/decrease-items-quantity/:_id', DecreaseQuantity);
// Router.get('/searchProudct/:key', searchProudct);
export default Router;


