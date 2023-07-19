import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Title from '../reusecomponents/Title';
import InputBox from '../reusecomponents/InputBox';
import SelectOption from './formcomponents/SelectOption';
import ImageUploader from './formcomponents/ImageUploader';
import SubmitBtn from './formcomponents/SubmitBtn';
import { productsSchema } from '../../formikValidataion/ProductsValidation';
import TextArea from './formcomponents/TextArea';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';





const AddProducts = () => {

    // const navigate = useNavigate();
    const [alert, setAlert] = useState({ alert: false, message: "" });


    // Define the initial values for the form fields
    const initialValues = {
        productName: '',
        price: '',
        companyName: '',
        productDetails: "",
        category: '',
        imageUrl: null
    };

    // Function to handle image upload and update form field value
    const handleImageUpload = (event, setFieldValue) => {
        const file = event.target.files[0];
        setFieldValue('image', file);
    };




    // onSubmit handler function It will call when user will submit form
    const onSubmitProduct = (values, { resetForm }) => {
        // Use the FileReader API to read the uploaded image file and get its URL path
        const reader = new FileReader();
        reader.readAsDataURL(values.imageUrl);
        const sellerID = JSON.parse(localStorage.getItem('user'))._id; 
        
        reader.onload = () => {
            // Add the image URL path to the form data object
            const formData = {
                ...values,
                imageUrl: reader.result,
                sellerID: sellerID
            };
            console.log("form data: ", formData);
            // Reset the form after submitting it  
            saveData(formData, resetForm)
        };
    };

    // saving seller data to database using axios post
    const saveData = async (data, resetForm) => {
        try {
            const response = await axios.post('http://localhost:5000/add-product', data);
            const alert = {
                alert: true,
                status: "success",
                message: "Successfully added!",
                imageUrl: response.data.imageUrl
            }
            // reset form
            resetForm();
            // alert handler
            alertHandler(alert);
            console.warn("addproduct successful: ", response);
        } catch (error) {
            const alert = {
                alert: true,
                status: "warning",
                message: "Error!"
            }
            alertHandler(alert);
            console.error("addproduct error: ", error);
        }
    }

    // alert handler for alert
    const alertHandler = (data) => {
        setAlert({ ...alert, ...data })
        setTimeout(() => {
            setAlert({ ...alert, alert: false });
        }, 3000);
    }

    return (

        // Render the form using Formik
        <Formik
            initialValues={initialValues}
            validationSchema={productsSchema}
            onSubmit={onSubmitProduct}
        >
            {({ values, errors, touched, setFieldValue }) => (
                <div className='container-xl container-fluid p-4'>
                    <div className='row my-5'>
                        {alert.alert &&
                            <div className={`alert alert-${alert.status}`} role="alert">
                                {alert.message}
                            </div>
                        }
                        <Form className='container col-lg-6 col-12 bg-light px-0'>
                            <Title name="Add New Product" />
                            <InputBox
                                type="text"
                                label="productName"
                                name="Product Name"
                                placehld="Enter product name"
                                err={errors}
                                touch={touched} />

                            <InputBox
                                type="text"
                                label="companyName"
                                name="Company Name"
                                placehld="Add company name"
                                err={errors}
                                touch={touched} />

                            <InputBox
                                type="number"
                                label="price"
                                name="Price"
                                placehld="Add Price in $"
                                min="0"
                                err={errors}
                                touch={touched} />

                            <TextArea />
                            <SelectOption />
                            <ImageUploader
                                handleImageUpload={handleImageUpload}
                                setFieldValue={setFieldValue} />
                            <SubmitBtn />

                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    );
};

export default AddProducts;
