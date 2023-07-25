import React, { useEffect, useState } from 'react';
import ImageDiv from './innerComponents/shoping-products/ImageDiv';
import DetailsDiv from './innerComponents/shoping-products/DetailsDiv';
import HeadingDiv from './innerComponents/shoping-products/HeadingDiv';
import OrderBtn from './innerComponents/OrderBtn';
import axios from 'axios';
import Loader from './Loader';
import { alertMessageAction } from '../../../redux/action/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SaveLater from './SaveLater';

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
    // extracting navigate function for navigate
    const navigate = useNavigate();
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
            const { _id } = JSON.parse(localStorage.getItem('user'));

            // get requests for the get all selected items by buyer
            const response = await axios.get('http://localhost:5000/buyer-items/' + _id);
            // adding response to the userData state variable for the display data
            setUserData(response.data);
            setLoaderHandler(false);
        } catch (err) {
            // It will catch error 
            console.log("Error: ", err);
            alert(err);
        }
    }

    // items increase and decrease handler function
    const itemsCountHandler = async (endpoint, data) => {
        try {
            const response = await axios.put("http://localhost:5000" + endpoint + data._id);
            apiHandler();
        } catch (err) {
            console.log("err: ", err);
            alert(err);
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
                apiHandler();
                const alertData = {
                    isRemove: true,
                    message: "Successfully removed!"
                }
                dispatchHandler(alertData, dispatch);
            }
        } catch (err) {
            alert(err);
        }
    }

    // savelater button's function handler
    const saveLaterHandler = async (currentItem) => {
        try {
            // creating new properties name is saveLater
            currentItem.saveLater = "saveLater";
            delete currentItem._id;
            await axios.post("http://localhost:5000/save-later-products", currentItem);
            apiHandler();
            const alertData = {
                isRemove: true,
                message: "Successfully Added!"
            }
            dispatchHandler(alertData, dispatch);
            saveLaterApiHandler();
        } catch (err) {
            alert(err);
        }
    }

    // get api it will fetch all data which is saved for save for later
    const saveLaterApiHandler = async () => {
        try {
            let userData = JSON.parse(localStorage.getItem("user"));
            // here will check user is login or not
            if (userData) {
                // then api request will send for the items save to save for later list
                const result = await axios.get('http://localhost:5000/savelater-items/' + userData._id + '/saveLater');
                setSaveLaterArr(result.data);
            } else { // if user is not login then user will redirect to the login page
                alert("Please create a account or LogIn!");
                navigate('/login');
            }
        } catch (err) {
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
            const alertData = {
                isRemove: true,
                message: "Successfully Added!"
            }
            dispatchHandler(alertData, dispatch);
            apiHandler();
            saveLaterApiHandler();
        } catch (err) {
            alert(err);
        }
    }

    // This api request function delete data from 'save for later' list
    const removeFunc = async (data) => {
        try {
            const { userID, itemID } = data;
            await axios.delete('http://localhost:5000/delete-items/' + itemID + "/" + userID);
            const alertData = {
                isRemove: true,
                message: "Successfully removed!"
            }
            dispatchHandler(alertData, dispatch);
            saveLaterApiHandler();
        } catch (err) {
            alert(err);
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
            <SaveLater saveLaterArr={saveLaterArr} addToCartFunc={addToCartFunc} removeFunc={removeFunc} />
        </div>
    )
}

export default ProductsContainer