import React from 'react'

const DetailsDiv = ({data, removeHandler, saveLaterHandler}) => {

    return (
        <div
            className='ms-4'>
            <h3 className='small'>{data.productName}</h3>
            <p className='small'>Company: <span>{data.companyName}</span>
            </p>
            <p>
                <span className='text-muted text-decoration-line-through'>${data.price}</span>
                <span className='fw-bolder mx-2'>${data.price - (data.price*45/100)}</span>
                <span className='small text-success'>45% Off</span>
            </p>
            <div className='fw-bolder mt-5'>
                <span
                    style={{ cursor: "pointer", fontSize: "12px" }}
                    className='cursor-pointer'
                    onClick={()=>saveLaterHandler(data)}>SAVE FOR LATER</span>
                <span
                    style={{ cursor: "pointer", fontSize: "12px" }}
                    className='ms-4 cursor-pointer'
                    onClick={()=>(removeHandler(data))}> REMOVE</span>
            </div>
        </div>
    )
}

export default DetailsDiv