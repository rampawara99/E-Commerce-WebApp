import { Field } from 'formik'
import React from 'react'
import FileInput from './FileInput'

const ImageUploader = () => {
    return (
        <div className="mt-3 px-4">
            <label
                htmlFor='image'
                className="form-label fw-bold text-primary">Image</label>
            <Field
                className="form-control rounded-0"
                type="file"
                id="image"
                name="imageUrl"
                component={FileInput} />
        </div>
    )
}

export default ImageUploader