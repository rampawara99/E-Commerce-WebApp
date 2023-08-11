import React from 'react' 

const ReUsable = ({data, uniqValue}) => {
    // console.log("reUsable-------------: ", data._id)

    return (
        <div>
            <div
                className='overflow-hidden my-2 hover-effect cursor-pointer'
                style={{ width: "250px" }}>
                <img src={data.imageUrl} alt="..." className='d-inline-block w-100 img-scale-1' />
            </div>
            <div className='text-center shadow py-2 px-3'>
                <div className='fw-bolder my-3'>{data.productName}</div>
                <div>{data.productDetails.slice(0, 20)}...</div>
            </div>
        </div>
    )
}

export default ReUsable