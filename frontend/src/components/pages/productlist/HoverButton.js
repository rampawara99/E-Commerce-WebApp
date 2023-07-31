import React from 'react' 

const HoverButton = ({data, clickHandler}) => { 

    return (
        <div 
            className='hover-btn w-100 h-100 d-flex justify-content-center align-items-center'
            onClick={()=>clickHandler(data)}>
            <div className='cursor-pointer'>
                <span>{data.productName}</span>
                <i className="bi bi-arrow-up-right-square ms-2"></i>
            </div>
        </div>
    )
}

export default HoverButton