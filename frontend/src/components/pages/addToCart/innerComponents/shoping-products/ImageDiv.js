import React from 'react'
import IncDecreaseBtn from './IncDecreaseBtn'
import Img from './Img'

const ImageDiv = ({ data }) => {
    return (
        <div style={{ width: "123px" }}>
            <Img data={data} />
            <IncDecreaseBtn data={data} />
        </div>
    )
}

export default ImageDiv