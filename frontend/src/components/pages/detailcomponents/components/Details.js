import React from 'react'

const Details = ({data}) => {
    return (
        <div className='my-2 d-flex'>
            <span
                style={{ width: "90px" }}
                className='fw-bold'>Details:</span>
            <span className='d-block'>{data.productDetails}</span>
        </div>

    )
}

export default Details