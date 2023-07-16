import React from 'react'
import { useNavigate } from 'react-router-dom' 
const Buttons = ({data, deleteHandler}) => {
 
  // navigation handler
  const navigate = useNavigate();
 
  // View details handler
  const viewDeatilsHandler = () => {
    const currentData = {from:"sellerproducts", ...data};
    // It will redirect to edit view details component
    navigate('/viewdetails', {state:currentData}); 
  }

  // Edit hanlder
  const editHandler = ()=>{ 
    // It will redirect to productupdater component
    navigate('/productupdater', {state: data});
  }

  return (
    <div>
      <span
        onClick={viewDeatilsHandler}
        className='btn btn-sm btn-primary mt-1'>View Detail</span>
      <span
      onClick={editHandler}
        className='btn btn-sm btn-success ms-1 mt-1'>Edit</span>
      <span
      onClick={()=>deleteHandler(data)}
        className='btn btn-sm btn-danger ms-1 mt-1'>Delete</span>
    </div>
  )
}

export default Buttons