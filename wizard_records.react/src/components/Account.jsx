import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { API_BASE_URL } from './utils/config';
import AddProductForm from './AddProductForm';
import axios from 'axios';
import '../styles/Account.css';

const loginSchema = Yup.object().shape({
    Email: Yup.string().required('Email is required'),
    Password: Yup.string().required('Password is required')
});

const registerSchema = Yup.object().shape({
    FirstName: Yup.string().required('First name is required'),
    LastName: Yup.string().required('Last name is required'),
    Email: Yup.string().email('Invalid email').required('Email is required'),
    UserName: Yup.string().required('Username is required'),
    Password: Yup.string().required('Password is required'),
});

function Account() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const initLoginValues = {
        Email: '',
        Password: '',
      };
    
    const initRegisterValues = {
        FirstName: '',
        LastName: '',
        Email: '',
        UserName: '',
        Password: '',
    };

    const handleSubmit = async (values, actions) => {
        console.log("handleSubmit triggered!");

        try {
            let response;

            if (isLogin) {
                response = await axios.post(`${API_BASE_URL}/account/login`, {
                    Email: values.Email,
                    Password: values.Password
                });
            } else {
                response = await axios.post(`${API_BASE_URL}/account/register`, values);
                alert(response.status)
                if (response.status === 200){
                    setIsLogin(true)
                }
            }
            console.log("Response data:", response.data);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                alert('Authentication successful!');
                setLoggedIn(true);
            }

        } catch (error) {
            console.error("Authentication error:", error);
            alert('Authentication failed.');
            actions.setErrors({ general: 'Authentication failed. Please try again.' });
        }

        actions.setSubmitting(false);
    };

    if (isLoggedIn) {
        return <AddProductForm />
    }

    return (
        <section className={isLogin ? "login-form" : "register-form"}>
            <Container className="account-container">
                <h1>{isLogin ? 'Login' : 'Register'}</h1>
                <Formik
                    initialValues={isLogin ? initLoginValues : initRegisterValues}
                    validationSchema={isLogin ? loginSchema : registerSchema}
                    onSubmit={handleSubmit}
                >
                    
                {({ handleSubmit, isSubmitting  }) => (
                    <Form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <FormGroup>
                                    <Label for="FirstName">First Name</Label>
                                    <Field name="FirstName" as={Input} placeholder="First Name" className="field"/>
                                    <ErrorMessage name="FirstName" component="div" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="LastName">Last Name</Label>
                                    <Field name="LastName" as={Input} placeholder="Last Name" className="field"/>
                                    <ErrorMessage name="LastName" component="div" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Email">Email</Label>
                                    <Field name="Email" type="email" as={Input} placeholder="Email" className="field"/>
                                    <ErrorMessage name="Email" component="div" />
                                </FormGroup>
                            </>
                        )}
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Field name="Email" as={Input} placeholder="Email" className="field"/>
                            <ErrorMessage name="Email" component="div" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Field name="Password" type="password" as={Input} placeholder="Password" className="field"/>
                            <ErrorMessage name="Password" component="div" />
                        </FormGroup>
                        <Button className="btn-submit" type="submit" disabled={isSubmitting}>
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                        <Button type="button" onClick={() => setIsLogin(!isLogin)}>
                            Switch to {isLogin ? 'Register' : 'Login'}
                        </Button>
                    </Form>
                )}  
                </Formik>
            </Container>
        </section>
    );
}

export default Account;