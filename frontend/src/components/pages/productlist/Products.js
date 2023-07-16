import React from 'react'
import HoverButton from './HoverButton'
import BuyBtn from './BuyBtn'

const Products = ({ data }) => {
    return (
        <div
            className='shoping-cart d-flex flex-column justify-content-between mx-2 my-2'>
            <div
                className='w-100 overflow-hidden bg-success position-relative'>
                <img
                    src={data.imageUrl}
                    className='d-inline-block w-100'
                    alt="..." />
                <HoverButton data={data} />
            </div>
            <BuyBtn data={data} />
        </div>
    )
}

export default Products