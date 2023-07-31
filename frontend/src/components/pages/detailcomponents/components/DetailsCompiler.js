import React, { useState } from 'react'
import Title from '../../reusecomponents/Title'
import Name from './Name'
import Price from './Price'
import Company from './Company'
import Details from './Details'
import axios from 'axios'
import spinner from './spinner.svg'
import { useNavigate } from 'react-router-dom'

const DetailsCompiler = ({ data }) => {
    // extracting navigate function for navigate 
    const navigate = useNavigate();

    // loading icon controller
    const [isloading, setIsLoading] = useState(false);

    // post api request for adding buyer item to the database
    const handleAddToCart = (item) => {
        // extracting login user data fro localStorage
        const isLogin = JSON.parse(localStorage.getItem('user'));
        // cheking user is login or not
        if (isLogin) {
            // adding new properties to the current item object
            item.itemID = item._id;
            item.userID = isLogin._id
            item.quantity = 1;
            delete item._id
            // isLoading true when user will click buy button
            setIsLoading(!isloading);
            // post request for add to cart
            axios.post('http://localhost:5000/add-to-buyer-items', item)
                .then((res) => {
                    // it will add true if first it will be false
                    setIsLoading(!isloading);
                    navigate('/addtocart');
                })
                .catch((err) => {
                    setIsLoading(!isloading);
                    console.log("err: ", err);
                    navigate('/addtocart');
                });
        } else {
            alert("Please first Login or Create a Account!");
            navigate('/login');
        }
    };

    return (

        <div className='col-lg-5 my-3 ps-4'>
            <Title name="About" />
            <div className='lh-lg'>
                <Name data={data} />
                <Price data={data} />
                <Company data={data} />
                <Details data={data} />

                {data.from === "shop" &&
                    <div className='w-50 rounded-5px-overflow-hidden-margin-top-45px'>
                        <span
                            onClick={() => handleAddToCart(data)}
                            className='btn btn-primary'>
                            {
                                isloading &&
                                <img src={spinner} id="buy-loader-icon" alt='spn' />
                            }
                            Buy Now</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default DetailsCompiler