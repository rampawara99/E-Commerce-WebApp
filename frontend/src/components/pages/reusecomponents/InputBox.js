import { Field } from 'formik'
import React from 'react'

const InputBox = ({ name, placehld, type, label, err, touch, min }) => {
    return (
        <React.Fragment>
            {!min ?
                <div className="mb-2 px-4">
                    <label
                        htmlFor={label}
                        className="form-label fw-bold text-primary">
                        {name}</label>
                    <Field
                        className="form-control rounded-0"
                        type={type}
                        id={label}
                        name={label}
                        placeholder={placehld} />
                    {err[label] && touch[label] ? (
                        <small
                            className='text-danger'>
                            {err[label]}
                        </small>
                    ) : null}
                </div>
                :
                <div className="mb-2 px-4">
                    <label
                        htmlFor={label}
                        className="form-label fw-bold text-primary">
                        {name} in $</label>
                    <Field
                        className="form-control rounded-0"
                        type={type}
                        min={min}
                        id={label}
                        name={label}
                        placeholder={placehld} />
                    {err[label] && touch[label] ? (
                        <small
                            className='text-danger'>
                            {err[label]}
                        </small>
                    ) : null}
                </div>
            }
        </React.Fragment>
    )
}

export default InputBox