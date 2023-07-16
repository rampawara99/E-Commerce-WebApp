import React from 'react'

const HeadingDiv = ({data}) => {

    return (
        <div
            className='py-4 px-4 bg-light'>
            <span
                className='border-bottom border-4 border-primary px-5 pb-2 small'>
                ShopNow({data.length})
            </span>
        </div>
    )
}

export default HeadingDiv