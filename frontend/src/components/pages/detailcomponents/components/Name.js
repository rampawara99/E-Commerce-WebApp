import React from 'react'

const Name = ({data}) => {
    return (
        <div className='d-flex'>
            <span
                style={{ width: "90px" }}
                className='fw-bold'>Name:</span>
            <span className='d-block'>{data.productName}</span>
        </div>
    )
}

export default Name