import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Product = ({ product }) => (
    <Col md={4} className="d-flex  mb-4">
        <a href={`/product/${product.id}`} className="cardHREF card-width">
            <Card className="h-100">
                <CardImg top className="card-img-top" src={require(`./Images/CoverTemplate/${product.image}`)} alt={product.title} />
                <CardBody className="card-body">
                    <div className="card-info">
                        <CardTitle className="card-artist">{product.artistName}</CardTitle>
                        <CardSubtitle className="card-album">{product.albumTitle}</CardSubtitle>
                    </div>
                    <div className="card-divider"></div>
                    <div className="card-purchase">
                        <CardTitle className="card-price"><b>${product.price}</b></CardTitle>
                        <CardSubtitle className="card-basket">Add to basket</CardSubtitle>
                    </div>
                </CardBody>
            </Card>
        </a>
    </Col>
);

const FeaturedProducts = () => {
    const products = [
        { id: 1, artistName: 'Essenger', albumTitle: 'After Dark', price: '19.99', image: 'CDBase.png' },
        { id: 2, artistName: 'Aversions Crown', albumTitle: 'Tyrant', price: '24.99', image: 'VinylBase.png' },
        { id: 3, artistName: 'King Gizzard And The Lizard Wizard', albumTitle: 'How To Survive A Funeral How To Survive A Funeral', price: '2229.99', image: 'VinylBase.png' }
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