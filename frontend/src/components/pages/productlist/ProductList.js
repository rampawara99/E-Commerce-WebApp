import React, { useState, useEffect } from 'react'
import CategoryBtns from '../categorybtn/CategoryBtns'
import Title from '../reusecomponents/Title'
import axios from 'axios'
import HoverButton from './HoverButton'
import Products from './Products'
import CurrenProductList from './CurrenProductList'



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
      setMessageHandler({ ...messageHandler, loading: false, error: err.message });
    }
  }

  useEffect(() => {
    // Run the getProductData function when the component is mounted for handle HTTP Request
    getProductData();
  }, []);



  return (
    <div className='my-5 container-xl container-fluid'>
      {/* <Carosel /> */}
      <Title name="Shop Now" />
      <CategoryBtns />
      <CurrenProductList/>
      <h1 className='container-xl container-fluid h4 mb-3 text-primary'>General List :</h1>
      {/* <div className='d-flex flex-wrap justify-content-around'> */}
      <div className='d-flex flex-wrap justify-content-around'>
        {dataList.length > 0 &&
          dataList.map((elem, index) => (
            <Products key={elem._id} data={elem} />
          ))
        }
        {messageHandler.loading && <h5 className='text-center'>Loading...</h5>}
        {messageHandler.error && <h5 className='text-center'>{messageHandler.error}</h5>}
        <div>
          {messageHandler.empty && <h5 className='text-center text-danger fw-bolder'> 😮Oops!</h5>}
          {messageHandler.empty && <h5 className='text-center text-danger fw-bolder'> Data Not Found</h5>}
        </div>
      </div>

    </div>
  )
}

export default ProductList