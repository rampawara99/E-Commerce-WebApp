import React from 'react'

const DetailsDiv = ({data, removeHandler}) => {

    return (
        <div
            className='ms-4'>
            <h3 className='small'>Samsung Galaxy Pro new version</h3>
            <p className='small'>SELLER: <span>Unknown</span>
            </p>
            <p>
                <span className='text-muted text-decoration-line-through'>${data.price}</span>
                <span className='fw-bolder mx-2'>${data.price - (data.price*21/100)}</span>
                <span className='small text-success'>21% Off</span>
            </p>
            <div className='fw-bolder mt-5'>
                <span
                    style={{ cursor: "pointer", fontSize: "12px" }}
                    className='cursor-pointer'>SAVE FOR LATER</span>
                <span
                    style={{ cursor: "pointer", fontSize: "12px" }}
                    className='ms-4 cursor-pointer'
                    onClick={()=>(removeHandler(data._id))}> REMOVE</span>
            </div>
        </div>
    )
}

export default DetailsDiv