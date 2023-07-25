import React from 'react'

const Details = ({ data, removeFunc, addToCartFunc }) => {

    return (
        <div
            className='ms-4'>
            <h3 className='small'>{data.productName}</h3>
            <p className='small'>Company: <span>{data.companyName}</span>
            </p>
            <p>
                <span className='text-muted text-decoration-line-through'>${data.price}</span>
                <span className='fw-bolder mx-2'>${data.price - (data.price * 21 / 100)}</span>
                <span className='small text-success'>21% Off</span>
            </p>
            <div className='fw-bolder mt-5'>
                <span
                    style={{ cursor: "pointer", fontSize: "12px" }}
                    className='cursor-pointer'
                    onClick={() => addToCartFunc(data)}>ADD TO CART</span>
                <span
                    style={{ cursor: "pointer", fontSize: "12px" }}
                    className='ms-4 cursor-pointer'
                    onClick={() => (removeFunc(data))}> REMOVE</span>
            </div>
        </div>
    )
}

export default Details