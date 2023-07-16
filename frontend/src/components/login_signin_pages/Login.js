import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import React, { useState } from 'react' 
import Title from '../pages/reusecomponents/Title'
import InputBox from '../pages/reusecomponents/InputBox'
import Button from '../pages/reusecomponents/Button'
import { useNavigate } from 'react-router-dom'; 


// yup validation Schema
const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),
});


const Login = () => {

    // Initial values
    const navigate = useNavigate(); 
    const [alert, setAlert] = useState({ alert: false, message: "" });


    const initialValues = {
        email: "",
        password: ""
    }

    // saving data to database using axios-----------------
    // This function makes a POST request to the specified URL using the provided data
    const saveData = async (data, resetForm) => {
        try {
            // Make the POST request using axios
            const response = await axios.post('http://localhost:5000/login', data);
            // If the request is successful, reset the form 
            resetForm();
            // saving user id to logalstorages "user" key
            // If user successfully login   
            localStorage.setItem('user', JSON.stringify(response.data)); 
            const alert = {
                alert: true,
                status: "success",
                message: "Successefully login!"
            }
            alertHandler(alert);
            navigate('/shop'); 
        } catch (error) {
            const alert = {
                alert: true,
                status: "warning",
                message: error.response.data.result
            } 
            alertHandler(alert);
            // console.error(error);
        }
    };


    // onsubmit handler it will call when user will click to submit button
    const onsubmitLoginHandler = (value, { resetForm }) => {
        saveData(value, resetForm);
    }

    // alert handler for alert
    const alertHandler = (data) => {
        setAlert({ ...alert, ...data })
        setTimeout(() => {
            setAlert({ ...alert, alert: false });
        }, 7000);
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={onsubmitLoginHandler}
        >
            {({ values, errors, touched, setFieldValue }) => (
                <div className='container-xl container-fluid p-4'>
                    {alert.alert &&
                        <div className={`alert alert-${alert.status}`} role="alert">
                            {alert.message}
                        </div>
                    }

                    <div className='row my-5'>
                        <Form className='container col-lg-6 col-12 bg-light px-0'>
                            <Title name="Login" />

                            <InputBox
                                name="Email"
                                placehld="example@gmail.com"
                                type="email"
                                label="email"
                                err={errors}
                                touch={touched} />

                            <InputBox
                                name="Password"
                                placehld="password"
                                type="password"
                                label="password"
                                err={errors}
                                touch={touched} />

                            <Button name="Login" />
                        </Form>
                    </div>
                </div>
            )}

        </Formik>
    )
}

export default Login