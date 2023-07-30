import React, { useEffect, useState } from 'react'
import Compiler from './components/Compiler'
import Alert from './Alert';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteData } from '../../../redux/action/action';
import Loader from '../reusecomponents/Loader';

const SelerProducts = () => {

    const dispatch = useDispatch();

    // state variables
    // const [notFoundMessage, setNotFoundMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState(undefined);
    const [successMessage, setSuccessMessage] = useState(false);
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [messageHandler, setMessageHandler] = useState({
        error: null,   // Holds any error message
        loading: false,   // Indicates if data is currently being loaded
        empty: false   // Indicates if the data list is empty
    });


    // api data handler function
    async function ApiHandler(id) {
        try {
            // Set loading state to true
            setMessageHandler({ ...messageHandler, loading: true });
            const url = 'http://localhost:5000/seller-products/' + id;
            const response = await axios.get(url);
            // console.log("resP: ", response.data);
            setData(response.data);
            // Set loading state to false
            setMessageHandler({ ...messageHandler, loading: false });
            // Check if response data is empty
            if (!(response.data.length > 0)) {
                // Set empty state to true
                setMessageHandler({ ...messageHandler, empty: true });
            }
        } catch (err) {
            // Handle error and loading state
            setMessageHandler({ ...messageHandler, loading: false, error: err.message });
        }
    }

    useEffect(() => {
        // Check if the user is logged in
        let isUserLogin = localStorage.getItem('user');
        // If the user is logged in, invoke the ApiHandler function with the user ID
        if (isUserLogin) {
            ApiHandler(JSON.parse(isUserLogin)._id);
        }
    }, []);
    // Yes alert handler
    const yesHandler = async (data) => {
        // Clear alert message
        setAlertMessage(undefined);

        try {
            // Make DELETE request to delete the product
            await axios.delete('http://localhost:5000/deleteProduct/' + data._id);

            // Call ApiHandler to update the data
            ApiHandler(data.sellerID);
            console.log('delete item: ', data);

            // Show success message for delete
            setSuccessMessage(true);
            setTimeout(() => {
                setSuccessMessage(false);
            }, 3000);
        } catch (err) {
            console.log(err);
        }
    }

    // No alert handler
    const noHandler = () => {
        setAlertMessage(undefined);
    }

    // Alert Handler
    const deleteHandler = (value) => {
        // Set alert message with the ID of the item to be deleted
        setAlertMessage(value._id);

        // Dispatch deleteData action (assuming it's a Redux action)
        dispatch(deleteData(value));
    }


    return (
        <>
            <div className='container-xl container-fluid my-4 position-relative'>
                <div className='row'>
                    {successMessage &&
                        <div className='alert alert-success' role="alert">
                            Successfully Deleted
                        </div>
                    }
                    <div className='col-sm-12'>
                        <div className='d-flex justify-content-center flex-wrap'>
                            {data.length > 0 ?
                                data.map((elem, num) => {
                                    return (
                                        <Compiler
                                            key={num}
                                            data={elem}
                                            deleteHandler={deleteHandler} />
                                    )
                                })
                                :
                                ""
                            }
                        </div>

                    </div>
                    {alertMessage &&
                        <Alert
                            yesHandler={yesHandler}
                            noHandler={noHandler} />
                    }
                    {messageHandler.loading && <Loader/>}
                    {messageHandler.error && <p className='text-center'>😮Oops!  {messageHandler.error}</p>}
                    <div className='text-center'>
                        {messageHandler.empty && <p className='text-danger fw-bolder'> 😮Oops!</p>}
                        {messageHandler.empty && <p className='text-danger fw-bolder'> You don't have products</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelerProducts 