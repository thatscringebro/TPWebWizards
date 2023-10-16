import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { API_BASE_URL } from '../config';
import Home from './Home';
import '../styles/Account.css';

function Account() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false); 
    const [formData, setFormData] = useState({
        UserName: '',
        Password: '',
        Email: '',
        FirstName: '',
        LastName: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        console.log("handleSubmit triggered!");
        e.preventDefault();

        try {
            let response;

            if (isLogin) {
                response = await axios.post(`${API_BASE_URL}/account/login`, {
                    UserName: formData.UserName,
                    Password: formData.Password
                });
            } else {
                response = await axios.post(`${API_BASE_URL}/account/register`, formData);
            }
            console.log("Response data:", response.data);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // LOWER FUCKING CASE!!!!
                alert('Authentication successful!');
                setLoggedIn(true);
            }

        } catch (error) {
            console.error("Authentication error:", error);
            alert('Authentication failed.');
        }
    };

    if (isLoggedIn) {
        return <Home />
    }

    return (
        <section className={isLogin ? "login-form" : "register-form"}>
            <Container className="account-container">
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                <Form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <FormGroup>
                                <Label for="FirstName">First Name</Label>
                                <Input
                                    type="text"
                                    name="FirstName"
                                    id="FirstName"
                                    placeholder="First Name"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="LastName">Last Name</Label>
                                <Input
                                    type="text"
                                    name="LastName"
                                    id="LastName"
                                    placeholder="Last Name"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                        </>
                    )}
                    <FormGroup>
                        <Label for="UserName">Username</Label>
                        <Input
                            type="text"
                            name="UserName"
                            id="UserName"
                            placeholder="Username"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input
                            type="password"
                            name="Password"
                            id="Password"
                            placeholder="Password"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
                </Form>
                <br />
                <Button onClick={() => setIsLogin(!isLogin)}>
                    Switch to {isLogin ? 'Register' : 'Login'}
                </Button>
            </Container>
        </section>
    );
}

export default Account;