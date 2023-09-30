import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Product = ({ product }) => (
    <Col md={4} className="d-flex  mb-3">
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

const ProductList = ({ title, products }) => (
    <section className={`product-list section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <Container>
            <h1>{title}</h1>
            <Row>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Row>
        </Container>
    </section>
);

const FeaturedProducts = () => {
    const products = [
        { id: 1, artistName: 'Essenger', albumTitle: 'After Dark', price: '19.99', image: 'CDBase.png' },
        { id: 2, artistName: 'Aversions Crown', albumTitle: 'Tyrant', price: '24.99', image: 'VinylBase.png' },
        { id: 3, artistName: 'Make Them Suffer', albumTitle: 'How To Survive A Funeral', price: '29.99', image: 'VinylBase.png' }

    ];

    return <ProductList title="Featured products" products={products} />;
};

const NewVinyl = () => {
    const products = [
        { id: 1, artistName: 'Gojira', albumTitle: 'L\'Enfant Sauvage', price: '49.99', image: 'VinylBase.png' },
        { id: 2, artistName: 'Nirvana', albumTitle: 'In Utero', price: '24.99', image: 'VinylBase.png' },
        { id: 3, artistName: 'Norma Jean', albumTitle: 'All Hail', price: '49.99', image: 'VinylBase.png' }

    ];

    return <ProductList title="New vinyl" products={products} />;
};

const NewCDs = () => {
    const products = [
        { id: 1, artistName: 'Red Hot Chili Peppers', albumTitle: 'Californication', price: '19.99', image: 'CDBase.png' },
        { id: 2, artistName: 'Metallica', albumTitle: 'Masters Of Puppets', price: '14.99', image: 'CDBase.png' },
        { id: 3, artistName: 'The Killers', albumTitle: 'Hot Fuss', price: '24.99', image: 'CDBase.png' }

    ];

    return <ProductList title="New CDs" products={products} />;
};

const UsedVinyl = () => {
    const products = [
        { id: 1, artistName: 'Emarosa', albumTitle: '131', price: '39.99', image: 'VinylBase.png' },
        { id: 2, artistName: 'Bad Omens', albumTitle: 'Finding God Before God Finds Me', price: '34.99', image: 'VinylBase.png' },
        { id: 3, artistName: 'Bring Me The Horizon', albumTitle: 'Sempiternal', price: '39.99', image: 'VinylBase.png' }

    ];

    return <ProductList title="Used vinyl" products={products} />;
};

const UsedCDs = () => {
    const products = [
        { id: 1, artistName: 'Fushitsusha', albumTitle: '1st', price: '99.99', image: 'CDBase.png' },
        { id: 2, artistName: 'Three Days Grace', albumTitle: 'One-X', price: '19.99', image: 'CDBase.png' },
        { id: 3, artistName: 'Fall Out Boy', albumTitle: 'From Under The Cork Tree', price: '14.99', image: 'CDBase.png' }

    ];

    return <ProductList title="Used vinyl" products={products} />;
};

export { FeaturedProducts, NewVinyl, NewCDs, UsedVinyl, UsedCDs };