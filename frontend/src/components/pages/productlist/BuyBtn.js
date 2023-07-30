import React from 'react' 

const BuyBtn = ({ data, clickHandler }) => {
 
    return (
        <div
            className='buy-button'
            onClick={() => clickHandler(data)}>
            <span className='fw-bold text-light'>Add to cart</span> 
        </div>
    )
}

export default BuyBtn