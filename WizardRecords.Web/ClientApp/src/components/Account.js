import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import '../styles/Login.css';

function Account() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const { username, password } = formData;

        try {
            const response = await axios.post(`http://localhost:3000/account/login/`, { Username: username, Password: password });
            // Gérer la réussite de la connexion (par exemple, rediriger l'utilisateur).
            console.log('Connexion réussie', response.data);
        } catch (error) {
            // Gérer l'échec de la connexion (par exemple, afficher un message d'erreur).
            console.error('Erreur de connexion', error);
        }
    };

    const { username, password } = formData;

    return (
        <section className="login-form">
            <Container>
                <h2>Login</h2>
                <br />
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
            </Container>
        </section>
    );
}

export default Account;
