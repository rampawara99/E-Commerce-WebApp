import React from 'react'
import HoverButton from './HoverButton'
import BuyBtn from './BuyBtn'
import { useNavigate } from 'react-router-dom';

const Products = ({ data }) => {
    const navigate = useNavigate();
    // navigation handler function, It will redirect to the detailcomponents
    const clickHandler = (item) => {
        const value = {
            from: "shop",
            ...item
        }
        // navigating to detailcomponents
        navigate('/viewdetails', { state: value });
    }

    return (
        <div
            className='shoping-cart d-flex flex-column justify-content-between mx-2 my-2 cursor-pointer'>
            <div
                className='w-100 overflow-hidden bg-success position-relative'>
                <img
                    src={data.imageUrl}
                    className='d-inline-block w-100'
                    alt="..." />
                <HoverButton data={data} clickHandler={clickHandler} />
            </div>
            <BuyBtn data={data} clickHandler={clickHandler} />
        </div>
    )
}

export default Products