import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { API_BASE_URL } from './utils/config';
import { Province } from './utils/constants';
import AddProductForm from './AddProductForm';
import axios from 'axios';
import '../styles/Account.css';

const loginSchema = Yup.object().shape({
    Email: Yup.string().required('Email is required'),
    Password: Yup.string().required('Password is required')
});

const registerSchema = Yup.object().shape({
    UserName: Yup.string().required('Username is required'),
    FirstName: Yup.string().required('First name is required'),
    LastName: Yup.string().required('Last name is required'),
    Email: Yup.string().email('Invalid email').required('Email is required'),
    Password: Yup.string().required('Password is required'),
    Confirm: Yup.string()
        .oneOf([Yup.ref('Password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
    PhoneNumber: Yup.string().required('Phone number is required'),
    AddressNum: Yup.number().required('Address number is required'),
    StreetName: Yup.string().required('Street name is required'),
    City: Yup.string().required('City is required'),
    Province: Yup.number()
      .oneOf(Province.map((_, index) => index), 'Invalid province')
      .required('Province is required'),
    PostalCode: Yup.string().required('Postal code is required'),
});

function Account() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const initLoginValues = {
        Email: '',
        Password: '',
      };
    
    const initRegisterValues = {
        UserName: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        Confirm: '',
        PhoneNumber: '',
        AddressNum: '',
        StreetName: '',
        City: '',
        PostalCode: '',
        Province: ''
    };

    const handleLogout = async () => {     
        try {
          const response = await axios.post(`${API_BASE_URL}/account/logout`);
          if (response.status === 200) {
            setIsLogin(false);
            sessionStorage.removeItem('userToken');
            alert("You have been successfully logged out");
            navigate('/');
          } else {
            alert("An error has occurred during the logout process... please try again.\n\nIf the error persists, you can close this window to disconnect this person.");
          }
        } catch (error) {
          console.error("Logout error:", error);
          alert("An error has occurred during the logout process... please try again.\n\nIf the error persists, you can close this window to disconnect this person.");
        }
      };

    const handleSubmit = async (e) => {
        console.log("handleSubmit triggered!");
        console.log("Form values:", values);
        try {
            let response;

            if (isLogin) {
                response = await axios.post(`${API_BASE_URL}/account/login`, {
                    Email: values.Email,
                    Password: values.Password
                });
            } else {
              const { Confirm, ...rest } = values;
              const registrationData = {
                ...rest,
                Province: parseInt(rest.Province, 10)
              };

              response = await axios.post(`${API_BASE_URL}/account/register`, registrationData);
              alert(response.status);
              if (response.status === 200){
                  alert('Registration successful!');
                  setIsLogin(true);
              }
            }
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
              {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit=
                {handleSubmit}>
                  {!isLogin && (
                    <>
                      <FormGroup>
                        <Label for="UserName">Username</Label>
                        <Field name="UserName" as={Input} placeholder="Username" className="field"/>
                        <ErrorMessage name="UserName" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="FirstName">First Name</Label>
                        <Field name="FirstName" as={Input} placeholder="First Name" className="field"/>
                        <ErrorMessage name="FirstName" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="LastName">Last Name</Label>
                        <Field name="LastName" as={Input} placeholder="Last Name" className="field"/>
                        <ErrorMessage name="LastName" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Email">Email</Label>
                        <Field name="Email" type="email" as={Input} placeholder="Email" className="field"/>
                        <ErrorMessage name="Email" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Password">Password</Label>
                        <Field name="Password" type="password" as={Input} placeholder="Password" className="field"/>
                        <ErrorMessage name="Password" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Confirm">Confirm password</Label>
                        <Field name="Confirm" type="password" as={Input} placeholder="Confirm password" className="field"/>
                        <ErrorMessage name="Confirm" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="PhoneNumber">Phone number</Label>
                        <Field name="PhoneNumber" type="string" as={Input} placeholder="Phone number" className="field"/>
                        <ErrorMessage name="PhoneNumber" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="AddressNum">Civic address number</Label>
                        <Field name="AddressNum" type="number" as={Input} placeholder="Civic address number" className="field"/>
                        <ErrorMessage name="AddressNum" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="StreetName">Street name</Label>
                        <Field name="StreetName" type="string" as={Input} placeholder="Street name" className="field"/>
                        <ErrorMessage name="StreetName" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="City">City</Label>
                        <Field name="City" type="string" as={Input} placeholder="City, town, etc." className="field"/>
                        <ErrorMessage name="City" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="PostalCode">Postal code</Label>
                        <Field name="PostalCode" type="string" as={Input} placeholder="Postal code" className="field"/>
                        <ErrorMessage name="PostalCode" component="div" className="error-message"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Province">Province</Label><br />
                        <Field name="Province" as="select" className="field" id="provMenu">
                          <option value="">Select a Province</option>
                          {Province.map((province, index) => (
                            <option key={index} value={index}>
                              {province.value}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="Province" component="div" className="error-message"/>
                      </FormGroup>
                    </>
                  )}
                  {isLogin && (
                    <>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Field name="Email" type={isLogin ? "text" : "email"} as={Input} placeholder="Email" className="field"/>
                            <ErrorMessage name="Email" component="div" className="error-message"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Field name="Password" type="password" as={Input} placeholder="Password" className="field"/>
                            <ErrorMessage name="Password" component="div" className="error-message"/>
                        </FormGroup>
                    </>
                  )}
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