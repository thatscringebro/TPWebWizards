import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import { Footer } from './Footer';
import '../styles/Layout.css'

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div class="bg">
                <NavMenu />
                <Container tag="main">
                    {this.props.children}
                </Container>
                <Footer />
            </div>
        );
    }
}