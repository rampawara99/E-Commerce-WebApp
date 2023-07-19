import React from 'react'
import ImageControler from './components/ImageControler'
import DetailsCompiler from './components/DetailsCompiler' 
import { useLocation } from 'react-router-dom'
import CloseBtn from './components/CloseBtn'

const ProductDetails = () => {
    // products details handler variable 
    const location = useLocation();
    const data = location.state;

    // console.log("view details: ", data);


    return (
        <div className="container my-5"> 
            <CloseBtn data={data}/>
            <div className="row p-sm-2">
                <ImageControler imgUrl={data.imageUrl} />
                <DetailsCompiler data={data} />
            </div>
        </div>
    )
}

export default ProductDetails