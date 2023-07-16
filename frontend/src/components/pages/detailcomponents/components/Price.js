import React from 'react'

const Price = ({ data }) => {
    return (
        <div className='d-flex'>
            <span
                style={{ width: "90px" }}
                className='fw-bold'>Price:</span>

            <div>
                {/* <span className='text-muted text-decoration-line-through'>$5000 </span> */}
                <span className='fw-bold'>${data.price}</span>
                {/* <span className='text-success'>-40% Off</span> */}
            </div>
        </div>
    )
}

export default Price