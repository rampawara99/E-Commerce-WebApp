import { Form, Formik } from 'formik'
import React, { useState } from 'react'
// import { signInSchema, onsubmitSignInnHandler } from '../formikValidataion/SignInValidation'
import Title from '../pages/reusecomponents/Title'
import InputBox from '../pages/reusecomponents/InputBox'
import Button from '../pages/reusecomponents/Button'
import CheckBox from './CheckBox'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

// yup validation Schema
const signInSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 5 characters")
        .required("Password is required"),
    user: Yup.string().required("required")
});



const SignIn = () => {

    const navigate = useNavigate();
    const [alert, setAlert] = useState({ alert: false, message: "" });

    //Initial Values of form
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        user: ""
    }


    // onsubmit handler it will call when user will click to submit button
    const onsubmitSignInnHandler = (value, { resetForm }) => {
        saveData(value, resetForm);
    }

    // saving user data to database using axios post
    const saveData = async (data, resetForm) => {
        try {
            const response = await axios.post('http://localhost:5000/register', data);
            // saving user id to logalstorages "user" key
            // If user successfully login   
            localStorage.setItem('user', JSON.stringify(response.data.user));
            const alert = {
                alert: true,
                status: "success",
                message: "Successfully Sign In completed!"
            }
            resetForm();
            alertHandler(alert);
            navigate('/shop')
        } catch (error) {
            const alert = {
                alert: true,
                status: "warning",
                message: error.response.data.error
            }
            alertHandler(alert);
            // console.error("signin error: ", error);
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
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={onsubmitSignInnHandler}
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
                            <Title name="Sign In" />

                            <InputBox
                                name="First Name"
                                placehld="First name"
                                type="text"
                                label="firstName"
                                err={errors}
                                touch={touched} />

                            <InputBox
                                name="Last Name"
                                placehld="Last name"
                                type="text"
                                label="lastName"
                                err={errors}
                                touch={touched} />

                            <InputBox
                                name="Email"
                                placehld="example@gmail.com"
                                type="mail"
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

                            <CheckBox />

                            <Button name="Sign In" />
                        </Form>
                    </div>
                </div>
            )}

        </Formik>
    )
}

export default SignIn