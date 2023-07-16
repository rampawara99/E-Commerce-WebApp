import { Field, ErrorMessage } from 'formik';
import React from 'react'


const categories = ['Ladies', 'Mens', 'Childrens', 'General'];


const SelectOption = () => {
    return (
        <div className='px-4'>
            <label
                htmlFor="category"
                className="form-label fw-bold text-primary">
                Category</label>
            <Field
                className="form-select rounded-0"
                as="select"
                id="category"
                name="category">
                <option
                    value=""
                    disabled>
                    Select a category
                </option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </Field>
            <span
                className='text-danger'>
                <ErrorMessage
                    name="category" />
            </span>
        </div>
    )
}

export default SelectOption