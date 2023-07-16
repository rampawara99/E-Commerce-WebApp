import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Title from '../reusecomponents/Title';
import InputBox from '../reusecomponents/InputBox';
import SelectOption from './formcomponents/SelectOption';
// import ImageUploader from './formcomponents/ImageUploader';
import SubmitBtn from './formcomponents/SubmitBtn';
// import { productsSchema, onSubmitProduct } from '../../formikValidataion/ProductsValidation';
import TextArea from './formcomponents/TextArea';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageUploader from './formcomponents/ImageUploader';
import axios from 'axios';


// Yup Validation Schema
const productsSchema = Yup.object().shape({
    productName: Yup.string().required('Write your product name'),
    price: Yup.number().required('Add product price in $'),
    category: Yup.string().required('category is required'),
    companyName: Yup.string().required('Required'),
    productDetails: Yup.string()
        .min(10, "Product description length must be at least 10")
        .required('Product details is required'),
    imageUrl: Yup.mixed()
        .required('Image is required')
        .test('fileSize', 'Image size must be less than 5MB', (value) => {
            if (value) {
                return value.size <= 1024 * 1024 * 5; // 5MB limit
            }
            return true;
        })
        .test('fileType', 'Only JPEG, PNG, and GIF images are allowed', (value) => {
            if (value) {
                return (
                    value.type === 'image/jpeg' ||
                    value.type === 'image/png' ||
                    value.type === 'image/gif'
                );
            }
            return true;
        })
});


const UpdateProducts = () => {

    // form data 
    const { state } = useLocation();
    const navigate = useNavigate();

    // state variable for alert message
    const [alert, setAlert] = useState({ alert: false, message: "" });

    // Define the initial values for the form fields
    const initialValues = {
        productName: state.productName ? state.productName : "",
        companyName: state.companyName ? state.companyName : "",
        productDetails: state.productDetails ? state.productDetails : "",
        price: state.price ? state.price : "",
        category: state.category ? state.category : "",
        imageUrl: "",
    };

    // onSubmit handler function It will call when user will submit form
    const onSubmitProduct = (values, { resetForm }) => {
        // Use the FileReader API to read the uploaded image file and get its URL path
        const reader = new FileReader();
        reader.readAsDataURL(values.imageUrl);
        reader.onload = () => {
            // Add the image URL path to the form data object
            const formData = {
                ...values,
                imageUrl: reader.result,
                id: state._id
            };
            console.log(formData);
            // Reset the form after submitting it  
            updateData(formData, resetForm);
        };
    };

    // saving seller data to database using axios post
    const updateData = async (data, resetForm) => {
        console.log("updateData: ", data);
        try {
            const { id } = data;
            console.log(id);
            const response = await axios.put('http://localhost:5000/updateProudct/' + id, data);
            console.log("resp: ", response)

            // user will redirect to product page
            navigate('/sellerproducts');
            // console.warn("addproduct successful: ", response);
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
        }, 7000);
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
                        <Form className='container col-lg-6 col-12 bg-light px-0'>
                            <Title name="Update product" />
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
                            <ImageUploader />
                            <div className='mb-4 px-4 mt-4'>
                                {/* <SubmitBtn /> */}
                                <button
                                    type='submit'
                                    className='btn btn-danger me-2'>Submit</button>
                                <span
                                    className='btn btn-danger'
                                    onClick={()=>navigate('/sellerproducts')}>Cancel</span>
                            </div>

                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    );
};

export default UpdateProducts;
