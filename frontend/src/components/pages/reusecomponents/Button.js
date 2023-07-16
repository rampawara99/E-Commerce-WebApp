import React from 'react'

const Button = ({ name }) => {
  return (
    <div className='mb-4 px-4'>
      <button type="submit" className="mt-2 btn btn-primary">{name}</button>
    </div>
  )
}

export default Button