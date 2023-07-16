import React from 'react'
import { ErrorMessage, Field } from 'formik'

const TextArea = () => {
    return (
        <div className="mb-3 px-4">
            <label
                htmlFor="textarea"
                className="form-label fw-bold text-primary">Product Details
            </label>
            <Field  
                as='textarea'
                name='productDetails'
                className='form-control'
                id='textarea'
                rows='3'
                placeholder='Add product details'
            />
            <ErrorMessage
                name='productDetails'
                component='div'
                className='text-danger' />
        </div>
    )
}

export default TextArea