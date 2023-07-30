import React, { useState, useEffect } from 'react'
import CategoryBtns from '../categorybtn/CategoryBtns'
import axios from 'axios'
import Products from './Products'
import CurrenProductList from './CurrenProductList'
import Loader from '../reusecomponents/Loader'



const ProductList = () => {
  // Initialize state for dataList using useState hook, with an empty array as the initial value
  const [dataList, setDataList] = useState([]);

  // Initialize state for messageHandler using useState hook, with an object containing error, loading, and empty properties
  const [messageHandler, setMessageHandler] = useState({
    error: null,   // Holds any error message
    loading: false,   // Indicates if data is currently being loaded
    empty: false   // Indicates if the data list is empty
  });

  const getProductData = async () => {
    try {
      // Set loading state to true
      setMessageHandler({ ...messageHandler, loading: true });

      // Make HTTP GET request
      const response = await axios.get('http://localhost:5000/product-list');
      // Set the data list state with the response data
      console.log("resp: ", response);
      setDataList(response.data);
      // Set loading state to false
      setMessageHandler({ ...messageHandler, loading: false });

      // Check if response data is empty
      if (!(response.data.length > 0)) {
        // Set empty state to true
        setMessageHandler({ ...messageHandler, empty: true });
      }
    } catch (err) {
      // Handle error and loading state
      console.log("err: ", err)
      setMessageHandler({ ...messageHandler, loading: false, error: err.message });
    }
  }

  useEffect(() => {
    // Run the getProductData function when the component is mounted for handle HTTP Request
    getProductData();
    // react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='my-5 container-xl container-fluid user-select-none'>
      {/* <Carosel /> */}
      <CategoryBtns />
      <CurrenProductList />
      <h1 className='container-xl container-fluid h6 mb-3 text-primary'>GENERAL</h1>
      <hr />
      <div className='d-flex flex-wrap justify-content-around'>
        {dataList.length > 0 &&
          dataList.map((elem, index) => (
            <Products key={elem._id} data={elem} />
          ))
        }
        <div>
          {messageHandler.empty && <h5 className='text-center text-danger fw-bolder'> 😮Oops!</h5>}
          {messageHandler.empty && <h5 className='text-center text-danger fw-bolder'> Data Not Found</h5>}
        </div>
      </div>
      {messageHandler.error && <h5 className='text-center'> 😮Oops! {messageHandler.error}</h5>}
      {messageHandler.loading && <div className='text-center'><Loader /></div>}

    </div>
  )
}

export default ProductList