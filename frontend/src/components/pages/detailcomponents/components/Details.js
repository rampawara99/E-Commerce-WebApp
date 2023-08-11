import React from 'react'

const Details = ({data}) => {
    return (
        <div className='my-2 d-flex'> 
            <b className='d-block'>{data.productDetails}</b>
        </div>

    )
}

export default Details