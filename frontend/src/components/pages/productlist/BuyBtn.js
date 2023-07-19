import React from 'react' 

const BuyBtn = ({ data, clickHandler }) => {
 
    return (
        <div
            className='buy-button'
            onClick={() => clickHandler(data)}>
            <span className='fw-bold text-light'>Add to cart</span>
            <span className='text-warning fw-bolder'> {data.price}$ </span>
        </div>
    )
}

export default BuyBtn