import React from 'react'

const IncDecreaseBtn = ({data}) => {
    console.log("inc-dec: ", data)
    return (
        <div
            className='font-weight-bold mt-3 d-flex justify-content-between'>
            <span
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                className='border text-center pb-4 rounded-circle cursor-pointer d-inline-block'>-
            </span>
            <span
                style={{ width: "50px", height: "28px" }}
                className='border text-center ms-2 pb-4 rounded cursor-pointer d-inline-block'>1
            </span>
            <span
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                className='border text-center ms-2 pb-4 rounded-circle cursor-pointer d-inline-block'>+
            </span>
        </div>
    )
}

export default IncDecreaseBtn