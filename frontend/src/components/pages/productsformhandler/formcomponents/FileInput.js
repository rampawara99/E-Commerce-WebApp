import React from "react";


const FileInput = ({ field, form, ...props }) => {
    const handleFileChange = (event) => {
        form.setFieldValue(field.name, event.currentTarget.files[0]);
    };
    return (
        <div>
            <input
                type="file"
                onChange={handleFileChange}
                {...props} />
            {form.errors[field.name] && form.touched[field.name] ? (
                <small className="text-danger">{form.errors[field.name]}</small>
            ) : null}
        </div>
    );
};

export default FileInput;
