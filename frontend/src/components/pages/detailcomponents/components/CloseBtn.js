import React from 'react'
import { useNavigate } from 'react-router-dom';

const CloseBtn = ({data}) => {
    const navigate = useNavigate();

    const {from} = data;
    // click handler to navigate current page
    const clickHandler = ()=>{
        navigate('/'+from);
    }

    return (
        <div
            className='text-end px-5 pt-2'>
            <span
                className='btn btn-sm bg-danger text-light'
                onClick={clickHandler}>Close
            </span>
        </div>
    )
}

export default CloseBtn