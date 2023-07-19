import React, { useEffect, useState } from 'react'
import ImageDiv from './innerComponents/shoping-products/ImageDiv';
import DetailsDiv from './innerComponents/shoping-products/DetailsDiv';
import HeadingDiv from './innerComponents/shoping-products/HeadingDiv';
import OrderBtn from './innerComponents/OrderBtn';
import axios from 'axios';
import Loader from './Loader';

const ProductsContainer = ({ width }) => {

    // state management variables 
    const [userData, setUserData] = useState([]);
    // state variable for the loader icon handle
    const [loaderHandler, setLoaderHandler] = useState(true);
    // styles it will change width of container as device change
    width = width < 992 ? "100%" : "68%";

    // buyer data handler as get request
    const apiHandler = async () => {
        try {
            setLoaderHandler(true);
            console.log("before: ", loaderHandler);
            // extracting user id to get all buyer items from database
            const { _id } = JSON.parse(localStorage.getItem('user'));

            // get requests for the get all selected items by buyer
            const response = await axios.get('http://localhost:5000/buyer-items/' + _id);
            console.log("resp: ", response.data);
            // adding response to the userData state variable for the display data
            setUserData(response.data);
            setLoaderHandler(false);
            console.log("after: ", loaderHandler);
        } catch (err) {
            // It will catch error 
            console.log("Error: ", err);
        }
    }

    // items increase and decrease handler function
    const itemsCountHandler = async (endpoint, data) => {
        try {
            const response = await axios.put("http://localhost:5000" + endpoint + data._id);
            console.log("items counter response: ", response);
            apiHandler();
        } catch (err) {
            console.log("err: ", err);
        }
    }

    // click handler, when user will click to remove button that product will remove
    const removeHandler = async (id) => {
        try {
            // delete request to the delete item from addtocart section
            const resp = await axios.delete('http://localhost:5000/delete-items/' + id);
            apiHandler();
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        apiHandler();
    }, [])

    return (
        <div
            className='border my-5'
            style={{ width: width }}>
            <HeadingDiv data={userData} />

            {loaderHandler && <Loader />}
            <div
                style={loaderHandler ? { display: "none" } : { display: "block" }}
                className='bg-light p-4 mt-3'>
                {userData.length > 0 ?
                    userData.map((item, index) => (
                        <div
                            key={index}
                            className='d-flex my-4 border-bottom py-2'>
                            <ImageDiv data={item} itemsCountHandler={itemsCountHandler} />
                            <DetailsDiv data={item} removeHandler={removeHandler} />
                        </div>
                    ))
                    :
                    <div>You don't have any items!</div>
                }
            </div>
            {userData.length > 0 && <OrderBtn />}
        </div>
    )
}

export default ProductsContainer