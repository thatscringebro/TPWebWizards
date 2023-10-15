import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import '../styles/Login.css';
import axios from 'axios';

class Account extends Component {
    state = {
        username: '',
        password: ''
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleLogin = async (event) => {
        event.preventDefault();

        const { username, password } = this.state;

        try {
            const response = await axios.post('/account/login', { username, password });
            // Gérer la réussite de la connexion (par exemple, rediriger l'utilisateur).
        } catch (error) {
            // Gérer l'échec de la connexion (par exemple, afficher un message d'erreur).
        }
    };

    render() {
        const { username, password } = this.state;

        return (
            <section className="login-form">
                <Container>
                    <h2>Login</h2>
                    <br />
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </Form>
                </Container>
            </section>
        );
    }
}

export default Account;