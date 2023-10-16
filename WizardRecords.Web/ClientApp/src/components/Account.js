import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../styles/Account.css';

function Account() {
    const [isLogin, setIsLogin] = useState(true);
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

            if (response.data.Token) {
                localStorage.setItem('token', response.data.Token);
                alert('Authentication successful!');
            }

        } catch (error) {
            console.error("Authentication error:", error);
            alert('Authentication failed.');
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
                        <input type="text" name="FirstName" placeholder="First Name" onChange={handleInputChange} />
                        <input type="text" name="LastName" placeholder="Last Name" onChange={handleInputChange} />
                        <input type="email" name="Email" placeholder="Email" onChange={handleInputChange} />
                    </>
                )}
                <input type="text" name="UserName" placeholder="Username" onChange={handleInputChange} />
                <input type="password" name="Password" placeholder="Password" onChange={handleInputChange} />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
}

export default Account;