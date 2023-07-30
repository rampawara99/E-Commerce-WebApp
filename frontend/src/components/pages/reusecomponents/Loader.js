import React from 'react'
import loadericon from '../detailcomponents/components/spinner.svg';

const Loader = () => {
    return (
        <div className='text-center'>
            <img
                className='d-inline-blockF'
                src={loadericon}
                alt='...'
                width="100px" />
        </div>
    )
}

export default Loader