import React from 'react'
import {useNavigate} from 'react-router-dom';

const HoverButton = ({data, clickHandler}) => {

    const navigate = useNavigate();
    // const clickHandler = ()=>{
    //     const value = { 
    //         from:"shop",
    //         ...data
    //     }
    //     navigate('/viewdetails',  {state: value});
    // }

    return (
        <div 
            className='hover-btn w-100 h-100 d-flex justify-content-center align-items-center'
            onClick={()=>clickHandler(data)}>
            <div className='cursor-pointer'>
                <span>View Details</span>
                <i className="bi bi-arrow-up-right-square ms-2"></i>
            </div>
        </div>
    )
}

export default HoverButton