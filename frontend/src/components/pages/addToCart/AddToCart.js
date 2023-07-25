import React, { useState, useEffect } from 'react'

import ProductsContainer from './ProductsContainer'
import PriceDetailContainer from './PriceDetailContainer' 

const AddToCart = () => {
    // initialized to the current width of the browser window.
    const [width, setWidth] = useState(window.innerWidth);

    // Use the `useEffect` hook to add an event listener for the `resize` event on the `window` object.
    useEffect(() => {
        // Define a function called `handleResize`, which updates the `width` state variable
        // to reflect the new width of the browser window.
        const handleResize = () => setWidth(window.innerWidth);

        // Add the `handleResize` function as an event listener for the `resize` event on the `window` object.
        window.addEventListener('resize', handleResize);

        // Return a cleanup function that removes the event listener when the component is unmounted.
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <> 
            <div className='container-xl container-fluid d-flex flex-column-reverse flex-lg-row justify-content-between'>
                <ProductsContainer width={width} />
                <PriceDetailContainer width={width} />
            </div>
        </>
    )
}

export default AddToCart