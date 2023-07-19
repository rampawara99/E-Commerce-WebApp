import React from 'react' 

const IncDecreaseBtn = ({ data, itemsCountHandler }) => { 

    return (
        <div
            className='font-weight-bold mt-3 d-flex justify-content-between user-select-none'>
            <span
                onClick={() => itemsCountHandler('/decrease-items-quantity/', data)}
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                className='border text-center pb-4 rounded-circle cursor-pointer d-inline-block'>-
            </span>
            <span
                style={{ width: "50px", height: "28px" }}
                className='border text-center ms-2 pb-4 rounded cursor-pointer d-inline-block'>{data.quantity}
            </span>
            <span
                onClick={() => itemsCountHandler('/increase-items-quantity/', data)}
                style={{ width: "28px", height: "28px", cursor: "pointer" }}
                className='border text-center ms-2 pb-4 rounded-circle cursor-pointer d-inline-block'>+
            </span>
        </div>
    )
}

export default IncDecreaseBtn