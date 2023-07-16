import React from 'react'

const Img = ({data}) => {
    return (
        <div
            style={{ width: "100%", height: "118px" }} className='overflow-hidden'>
            <img src={data.imageUrl} className="img-thumbnail d-inline-block w-100" alt="..."></img>
        </div>
    )
}

export default Img