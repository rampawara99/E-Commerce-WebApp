import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const AboutPriceDiv = () => {

    // extracting redux store state using useSelector
    const {data} = useSelector((data) => data.addToCartUpdater);
    console.log("About Components: ", data);

    // creating an object state variable
    const [apiData, setApiData] = useState([]);
    // creating price and discount controller variable
    const [pricesHandler, setPricesHandler] = useState({});

    const detailsHandler = ()=>{
        console.log("details-handler: ", data);
    }

    useEffect(()=>{
        detailsHandler();
    }, [data]);

    return (
        <div
            className='px-4 small'>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Price ({apiData.length})</span>
                <span>${pricesHandler.total - pricesHandler.discountAmount}</span>
            </div>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Discount</span>
                <span className='text-success'>-${pricesHandler.discountAmount}</span>
            </div>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Delivery Charges</span>
                <span className='text-success'>Free</span>
            </div>
            <div
                className='py-4 fw-bolder border-top border-dashed border-bottom border-dashed d-flex justify-content-between'>
                <span>Total Amount</span>
                <span>${pricesHandler.total - pricesHandler.discountAmount}</span>
            </div>
            <div
                className='my-3 text-success fw-bold'>
                <span>You will save ${pricesHandler.discountAmount} on this order</span>
            </div>
        </div>
    )
}

export default AboutPriceDiv