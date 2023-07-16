import React from 'react'

const Company = ({data}) => {
    return (
        <div className='my-2 d-flex'>
            <span
                style={{ width: "90px" }}
                className='fw-bold'>Company:</span>
            <span className='d-block'>{data.companyName}</span>
        </div>
    )
}

export default Company