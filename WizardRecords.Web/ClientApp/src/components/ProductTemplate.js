import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Product = ({ product }) => (
    <Col md={4} className="d-flex">
        <a href={`/product/${product.id}`} className="cardHREF h-100 card-width">
            <Card className="h-100 card-width">
                <CardImg top className="card-img-top" src={require(`./Images/CoverTemplate/${product.image}`)} alt={product.title} style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                <CardBody className="flex-grow-1">
                    <CardTitle className="card-title">{product.title}</CardTitle>
                    <CardSubtitle className="card-subtitle"><b>${product.price}</b></CardSubtitle>
                </CardBody>
            </Card>
        </a>
    </Col>
);

const FeaturedProducts = () => {
    const products = [
        { id: 1, title: 'Essenger - After Dark', price: '19.99', image: 'CDBase.png' },
        { id: 2, title: 'Aversions Crown - Tyrant', price: '24.99', image: 'VinylBase.png' },
        { id: 3, title: 'Make Them Suffer - How To Survive A Funeral', price: '29.99', image: 'VinylBase.png' }
    ];

    return (
        <section className="featured-products">
            <Container>
                <h1>Featured Products</h1>
                <Row>
                    {products.map(product => <Product key={product.id} product={product} />)}
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedProducts;