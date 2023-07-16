import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Products from './Products';

const CurrenProductList = () => {

    // useSelector for state management
    const state = useSelector((data) => data.categoryData); 
    
    return (
        <div className='mb-2 container-xl container-fluid'>
            {state.length >0&& <h1 className='h4 mb-3 text-primary'>{state[0].category} Clothes</h1>}
            {/* <h1 className='h4 mb-3 text-primary'>Current List:</h1> */}
            <div className='d-flex flex-wrap justify-content-around'>
                {state.length > 0 &&
                    state.map((elem, index) => (
                        <Products key={elem._id} data={elem} />
                    ))
                }
            </div>
        </div>
    )
}

export default CurrenProductList