import { ErrorMessage, Field } from 'formik'
import React from 'react'

const CheckBox = () => {
    return (
        <div className='mb-2 px-4'>
            <p className='mb-1 fw-bold text-primary'>Please comfirm that you are a Customer or Seller?</p>
            <div className="form-check">
                <Field className="form-check-input" type="radio" name='user' value="user" id="user" />
                <label className="form-check-label" htmlFor="user">
                    User
                </label>
            </div>
            <div className="form-check">
                <Field className="form-check-input" type="radio" name='user' value="seller" id="seller" />
                <label className="form-check-label" htmlFor="seller">
                    Seller
                </label>
            </div>
            <ErrorMessage name='user' component="div" className='text-danger'/>
        </div>
    )
}

export default CheckBox