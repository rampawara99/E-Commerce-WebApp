import React, { useEffect, useState } from 'react';
import ImageDiv from './innerComponents/shoping-products/ImageDiv';
import DetailsDiv from './innerComponents/shoping-products/DetailsDiv';
import HeadingDiv from './innerComponents/shoping-products/HeadingDiv';
import OrderBtn from './innerComponents/OrderBtn';
import axios from 'axios';
import Loader from '../reusecomponents/Loader';
import { alertMessageAction } from '../../../redux/action/action';
import { useDispatch } from 'react-redux'; 
import SaveLater from './SaveLater';
import { fetchApiHandler } from './PriceDetailContainer';

// this function takes alert message data and dispatch function as parameter
export const dispatchHandler = (data, dispatch) => {
    // calling dispatch function
    dispatch(alertMessageAction(data));
    const removeAlert = {
        isRemove: false,
    };
    setTimeout(() => {
        dispatch(alertMessageAction(removeAlert));
    }, 1500);
}

const ProductsContainer = ({ width }) => {

    // get dispatch funtion from useDispatch
    const dispatch = useDispatch() 
    // state management variables 
    const [userData, setUserData] = useState([]);
    // state variable for the loader icon handle
    const [loaderHandler, setLoaderHandler] = useState(true);
    // styles it will change width of container as device change
    width = width < 992 ? "100%" : "68%";
    // It will store data for the SaveLater components
    const [saveLaterArr, setSaveLaterArr] = useState([]);
    // buyer data handler as get request
    const apiHandler = async () => {
        try {
            setLoaderHandler(true);
            // extracting user id to get all buyer items from database
            const userData = JSON.parse(localStorage.getItem('user'));

            if (userData) {
                // get requests for the get all selected items by buyer
                const response = await axios.get('http://localhost:5000/buyer-items/' + userData._id);
                // adding response to the userData state variable for the display data
                setUserData(response.data);
                setLoaderHandler(false);
            } else {
                setLoaderHandler(false);
            }
        } catch (err) {
            // It will catch error  
            alert("apiHand:-" + err);
            setLoaderHandler(false);
        }
    }

    // items increase and decrease handler function
    const itemsCountHandler = async (endpoint, data) => {
        try {
            await axios.put("http://localhost:5000" + endpoint + data._id);
            // this function will call and reload the data
            apiHandler();
            // this function will call and reload the priceDetailContainer component's data
            fetchApiHandler(dispatch);
        } catch (err) {
            console.log("err: ", err);
            alert("itemsCounterHandler: ", err);
        }
    }

    // click handler, when user will click to remove button that product will remove
    const removeHandler = async (data) => {
        try {
            // Extracting itemsID, and userID for delete item
            const { itemID, userID } = data;
            // Api delete request
            const result = await axios.delete('http://localhost:5000/delete-items/' + itemID + "/" + userID);
            if (result.status === 200) {
                // this function will call and reload the data
                apiHandler();
                // creating message and calling dipatchHandler function for show message 
                const alertData = {
                    isRemove: true,
                    message: "Successfully removed!"
                }
                dispatchHandler(alertData, dispatch);
                // this function will call and reload the priceDetailContainer component's data
                fetchApiHandler(dispatch);
                // this function calling for get all data which is kept for 'save for later' in database
                saveLaterApiHandler();
            }
        } catch (err) {
            alert(err);
        }
    }

    // savelater button's function handler
    const saveLaterHandler = async (currentItem) => {
        try {
            // creating new properties name is saveLater and removing _id key
            currentItem.saveLater = "saveLater";
            delete currentItem._id;
            await axios.post("http://localhost:5000/save-later-products", currentItem);
            // this function will call and reload the data
            apiHandler();
            // creating message and calling dipatchHandler function for show message 
            const alertData = {
                isRemove: true,
                message: "Successfully Added!"
            }
            dispatchHandler(alertData, dispatch);
            // this function will call and reload the priceDetailContainer component's data
            fetchApiHandler(dispatch);
            // this function calling for get all data which is kept for 'save for later' in database
            saveLaterApiHandler();
        } catch (err) {
            console.log("saveLaterHandler: ", err);
        }
    }

    // This function will fetch all data which is saved for save for later
    const saveLaterApiHandler = async () => {
        try {
            let userData = JSON.parse(localStorage.getItem("user"));
            // here will check user is login or not
            if (userData) {
                // then api request will send for the items save to save for later list
                const result = await axios.get('http://localhost:5000/savelater-items/' + userData._id + '/saveLater');
                setSaveLaterArr(result.data);
            }
        } catch (err) {
            console.log("SaveLaterApiHandler: ", err);
            alert(err);
        }
    }

    // It will store saveLater list to buyeritems list
    const addToCartFunc = async (data) => {
        try {
            delete data._id
            delete data.__v
            delete data.saveLater
            await axios.post('http://localhost:5000/add-to-buyer-items/', data);
            // this function will call and reload the data
            apiHandler();
            // creating message and calling dipatchHandler function for show message 
            const alertData = {
                isRemove: true,
                message: "Successfully Added!"
            }
            dispatchHandler(alertData, dispatch);
            // this function will call and reload the priceDetailContainer component's data
            fetchApiHandler(dispatch);
            // this function calling for get all data which is kept for 'save for later' in database
            saveLaterApiHandler();
        } catch (err) {
            alert("addToCartFunc: ", err);
        }
    }

    // calling to the apiHandler function
    useEffect(() => {
        apiHandler();
        saveLaterApiHandler();
        // eslint-disable-next-line
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
                            <DetailsDiv data={item} removeHandler={removeHandler} saveLaterHandler={saveLaterHandler} />
                        </div>
                    ))
                    :
                    <div> <strong>Items not found!</strong></div>
                }
            </div>
            {userData.length > 0 && <OrderBtn />}
            <SaveLater saveLaterArr={saveLaterArr} addToCartFunc={addToCartFunc} removeFunc={removeHandler} />
        </div>
    )
}

export default ProductsContainer