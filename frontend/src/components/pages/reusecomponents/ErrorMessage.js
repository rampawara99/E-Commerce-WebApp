// import React from 'react'
// import Title from './Title'
// import { useNavigate } from 'react-router-dom';

// const ErrorMessage = () => {

//     const navigate = useNavigate();

//     // onclick handlelr
//     const singInHandler = () => {
//         navigate('/signin')
//     }
//     const cancelHandler = () => {
//         navigate('/login')
//     }

//     return (
//         <div className='mt-5'>
//             <div className='w-50 h-50 m-auto border'>
//                 <Title name="Worning!" color="text-warning"/>
//                 <div className='d-flex justify-content-center flex-column align-item-center rounded p-5'>
//                     <div className=''>
//                         <p>Your data not found Please create new account</p>
//                     </div>
//                     <div className='my-4'>
//                         <span
//                             onClick={singInHandler}
//                             className='btn btn-danger'>Sign In</span>
//                         <span
//                             onClick={cancelHandler}
//                             className='btn btn-danger ms-4'>Cancel</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ErrorMessage