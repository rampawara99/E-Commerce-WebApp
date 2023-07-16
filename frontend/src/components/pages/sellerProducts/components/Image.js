import React from 'react'

const Image = ({ imagePath }) => {
  return (
    <div
      style={{ top: "12px" }}
      className='d-flex justify-content-center position-relative'>
      <div
        className='overflow-hidden form-control p-0' style={{ width: "170px", height: "100px" }}>
        <img
          className='w-100 object-fit-fill'
          src={imagePath} alt="..."></img>
      </div>
    </div>
  )
}

export default Image