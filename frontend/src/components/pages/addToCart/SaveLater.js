import React, { useEffect, useState } from 'react'
import Img from './savelatter/Img'
import Details from './savelatter/Details' 


const SaveLater = ({saveLaterArr, addToCartFunc, removeFunc}) => { 
    return (
        <div className='my-4'>
            {
                saveLaterArr.length > 0 &&
                saveLaterArr.map((data, ind) => (
                    <div
                        key={ind}
                        className='d-flex border-bottom p-4 my-2  bg-light'>
                        <Img data={data} />
                        <Details data={data} addToCartFunc={addToCartFunc} removeFunc={removeFunc} />
                    </div>
                ))

            }
        </div>
    )
}

export default SaveLater