import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Carosel from './Carousel';

const Home = () => {
    // get dispatch function
    const dispatch = useDispatch();
    // check old user's items selected or not 
    const checkOldUserItems = async () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            const result = await axios.get('http://localhost:5000/buyer-items/' + userData._id);
            console.log("app result: ", result);
            const { data } = result;
            dispatch({ type: "ADD_TO_CART_DATA", payload: { data } });
        }
    }

    // it will call to checkOldUserItems function
    useEffect(() => {
        checkOldUserItems();
        // react-hooks/exhaustive-deps
    }, []);


    return (
        <div id='#'>
            <Carosel/>
        </div>
    )
}

export default Home