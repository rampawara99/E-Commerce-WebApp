import React from 'react' 
import { useSelector } from 'react-redux'

const Alert = ({yesHandler, noHandler}) => {

    // state handler
    const state = useSelector((item)=> item.deletesData);
    console.log("alert: ", state);
 
    return (
        <> 
                <div
                    style={{ height: '100vh', width: "100vw", background: '#000000cc' }}
                    className='position-fixed top-0 start-0 d-flex justify-content-center'>
                    <div
                        className='form-control p-sm-3 mt-5 w-50 text-center align-self-start loading-element'>
                        <p
                            className='fw-bold'>Are you sure? You want to <strong className='text-danger'> delete </strong> this product.
                        </p>
                        <div className='mt-5'>
                            <span
                            onClick={()=> yesHandler(state)}
                                className='btn btn-info me-4 btn-sm'>Yes
                            </span>
                            <span
                            onClick={noHandler}
                                className='btn btn-danger btn-sm'>No
                            </span>
                        </div>
                    </div>
                </div> 
        </>
    )
}

export default Alert