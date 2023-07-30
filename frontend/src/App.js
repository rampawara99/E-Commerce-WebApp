import React from "react";
// import Nav from "./components/navbar/Nav";
import ProductList from "./components/pages/productlist/ProductList";

import Nav from './components/navbar/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login_signin_pages/Login";
import SignIn from "./components/login_signin_pages/SignIn";
import SelerProducts from "./components/pages/sellerProducts/SellerProducts";
import UpdaterProduct from "./components/pages/productsformhandler/UpdateProducts";
import AddProducts from "./components/pages/productsformhandler/AddProducts";
import AddToCart from './components/pages/addToCart/AddToCart';
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/pages/detailcomponents/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PrivateComponents from "./components/pages/privateComponents/PrivateComponents";
import Footer from "./components/pages/footer/Footer";


function App() {

  return (
    <Provider store={store}>
      <Router basename='/'>
        <Nav />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path='/addproduct' element={<AddProducts />} />
            <Route path='/sellerproducts' element={<SelerProducts />} />
            <Route path='/productupdater' element={<UpdaterProduct />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path='/addtocart' element={<AddToCart />} />
          <Route path='/viewdetails' element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </Provider >
  );
}

export default App;
