import React from 'react'

const AboutPriceDiv = () => {
    return (
        <div
            className='px-4 small'>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Price (2 items)</span>
                <span>₹32,200</span>
            </div>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Discount</span>
                <span className='text-success'>-₹9,200</span>
            </div>
            <div
                className='my-4 d-flex justify-content-between'>
                <span>Delivery Charges</span>
                <span className='text-success'>Free</span>
            </div>
            <div
                className='py-4 fw-bolder border-top border-dashed border-bottom border-dashed d-flex justify-content-between'>
                <span>Total Amount</span>
                <span>₹34,000</span>
            </div>
            <div
                className='my-3 text-success fw-bold'>
                <span>You will save ₹179,806 on this order</span>
            </div>
        </div>
    )
}

export default AboutPriceDiv