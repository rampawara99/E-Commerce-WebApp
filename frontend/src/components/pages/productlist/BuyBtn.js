import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// import { buyProducts } from '../../../redux/action/action';
import axios from 'axios';

const BuyBtn = ({ data }) => {

    const [newArray, setNewArray] = useState([]);
    const dispatch = useDispatch();

    // console.log(data)

    // post api request for adding buyer item to the database
    const handleAddToCart = async (product) => {
        // checking user is login or not
        console.log("products: ", product);
        const isLogin = localStorage.getItem('user');
        if (isLogin) {
            const response = await axios.post('http://localhost:5000/add-to-buyer-items', product);
            console.log("response: ", response);
        } else {
            alert("Please Login or Create a Account!");
        }
    };

    useEffect(() => {
        // const existingArray = JSON.parse(localStorage.getItem('products')) || [];
        // dispatch(buyProducts(existingArray));
    }, []); 

    return (
        <div
            className='buy-button'
            onClick={() => handleAddToCart(data)}>
            <span className='fw-bold text-light'>Add to cart</span>
            <span className='text-warning fw-bolder'> {data.price}$ </span>
        </div>
    )
}

export default BuyBtn