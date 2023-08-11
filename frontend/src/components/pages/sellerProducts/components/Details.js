import React from 'react'

const Details = ({name, price, detail}) => {
 

  return (
    <div
      style={{ lineHeight: "40px" }}
      className=''>

      <div className='d-flex'>
        <span
          style={{ width: "100px" }}
          className='fw-bold'>Price:</span>

        <div>
          {/* <span className='fw-bold text-muted text-decoration-line-through'> $400</span> */}
          <span className='fw-bold'>${price}</span>
          {/* <span className='text-dangertext-success'>- 40% Off</span> */}
        </div>
      </div>

      <div className='d-flex'>
        <span
          style={{ width: "100px" }}
          className='fw-bold'>Name:</span>
        <span className='d-block'>{name}</span>
      </div>

      <div className='my-2 d-flex'>
        <span
          style={{ width: "100px" }}
          className='fw-bold'>Details:</span>
        <span className='d-block'>{detail.length < 32? detail: detail.slice(0, 31)+'...'}</span>
      </div>
    </div>
  )
}

export default Details