import React from 'react'
import Image from './Image'
import Details from './Details'
import Buttons from './Buttons'

const Compiler = ({ data, deleteHandler }) => {

  // console.log("compiler: ", data)

  return (
    <div className='shadows rounded ms-1 mt-2'
      style={{ width: "400px" }}>
      <Image imagePath={data.imageUrl} />

      <div className='p-3 form-control'>
        <Details
          price={data.price}
          name={data.productName}
          detail={data.productDetails} />
        <Buttons
          deleteHandler={deleteHandler}
          data={data} />
      </div>
    </div>
  )
}

export default Compiler