import React, { useEffect, useState } from 'react'
import ImageDiv from './innerComponents/shoping-products/ImageDiv';
import DetailsDiv from './innerComponents/shoping-products/DetailsDiv';
import HeadingDiv from './innerComponents/shoping-products/HeadingDiv';
import OrderBtn from './innerComponents/OrderBtn';

const ProductsContainer = ({ width }) => {

    // state management variables 
    const [userData, setUserData] = useState([]);

    // styles it will change width of container as device change
    width = width < 992 ? "100%" : "68%";

    // selected data handle
    const dataHandler = () => {
        // returning selected data, If localstorage will be empty that time return empty array
        const data = JSON.parse(localStorage.getItem('products')) || [];
        console.log("selected data: ", data);
        setUserData(data);
    }

    useEffect(() => {
        dataHandler();
    }, [])

    return (
        <div
            className='border my-5'
            style={{ width: width }}>
            <HeadingDiv data={userData} />

            <div
                className='bg-light p-4 mt-3'>
                {userData.length > 0 ?
                    userData.map((item, index) => (
                        <div
                            key={index}
                            className='d-flex my-4 border-bottom py-2'>
                            <ImageDiv data={item} />
                            <DetailsDiv data={item} index={index} setUserData={setUserData}/>
                        </div>
                    ))
                :
                <div>You have not choosen any item for buy!</div>
                }
            </div>

            <OrderBtn />
        </div>
    )
}

export default ProductsContainer