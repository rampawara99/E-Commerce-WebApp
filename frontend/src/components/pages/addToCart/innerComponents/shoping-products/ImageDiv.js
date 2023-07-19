import React from 'react'
import IncDecreaseBtn from './IncDecreaseBtn'
import Img from './Img'

const ImageDiv = ({ data, itemsCountHandler }) => {
    return (
        <div style={{ width: "123px" }}>
            <Img data={data} />
            <IncDecreaseBtn data={data} itemsCountHandler={itemsCountHandler} />
        </div>
    )
}

export default ImageDiv