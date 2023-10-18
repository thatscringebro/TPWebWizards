import React, { Component } from 'react';
//import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../styles/Fonts.css';
import ProductsGallery from './ProductGallery';

class Products extends Component {
    render() {
        return (
            <div>
                <ProductsGallery />
            </div>
        );
    }
}

export default Products;