import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from './utils/config';
import '../styles/Home.css';
import '../styles/Fonts.css';

const Product = ({ product }) => {
    let coverImageSrc, formatImageSrc;
    try {
        formatImageSrc = require(`../assets/images/format/${product.media}`);
    } catch (err) {
        console.error(`Error requiring format image for ${product.media}`, err);
    }

    try {
        coverImageSrc = require(`../assets/images/covers/${product.cover}`);
    } catch (err) {
        console.error(`Error requiring cover image for ${product.cover}`, err);
    }

    return (
        <Col md={4} className="d-flex mb-4">
            <Link to={`/detail/${product.id}`} className="card-href card-width">
                <Card className="h-100">
                    <CardImg top className="card-img-format" src={formatImageSrc} alt={product.media} />
                    <CardImg top className="card-img-cover" src={coverImageSrc} alt={product.cover} />
                    <CardBody className="card-body">
                        <div className="card-info">
                            <CardTitle className="card-artist">{product.artistName}</CardTitle>
                            <CardSubtitle className="card-album">{product.albumTitle}</CardSubtitle>
                        </div>
                        <div className="card-divider"></div>
                        <div className="card-purchase">
                            <CardTitle className="card-price"><b>${product.price}</b></CardTitle>
                            <CardSubtitle className="card-basket">Add to cart</CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    );
};
//Chercher avec product mediatype et category pour retourner celui de la liste.. 
const ProductList = ({ title, products = [] }) => {
    const SplitSearch = title.split(' ');
    return (
        <section className={`product-list section-${SplitSearch[0]}`}>
            <Container>
                <div className="section-category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>{title}</h1>
                    <h3>
                        <Link
                            to={`/products?category=${SplitSearch[0]}&mediatype=${SplitSearch[1]}`} > Click for more {'->'} </Link>
                    </h3>
                </div>
                <Row>
                    {products.map(product => <Product key={product.id} product={product} />)}
                </Row>
            </Container>
        </section>
    );
};

function HomeGallery() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newVinyl, setNewVinyl] = useState([]);
    const [newCDs, setNewCDs] = useState([]);
    const [usedVinyl, setUsedVinyl] = useState([]);
    const [usedCDs, setUsedCDs] = useState([]);

    const fetchDataForCategory = (count, media = null, isUsed = null) => {
        const params = {};
        if (media !== null) params.media = media;
        if (isUsed !== null) params.isUsed = isUsed;

        const albumPromises = Array.from({ length: count }).map(() =>
        axios.get(`${API_BASE_URL}/album/random`, { params })
                .then((response) => {
                        if (response.status === 200) {
                            const album = response.data;
    
                            return {
                                id: album.albumId,
                                cover: album.imageFilePath,
                                media: album.media === 0 ? "VinylBase.png" : "CDBase.png",
                                artistName: album.artistName,
                                albumTitle: album.title,
                                price: album.price.toFixed(2),
                                category : album.category,
                            };
                        }
                        else {
                            throw new Error(`Failed to fetch random album with status: ${response.status}`);
                        }
                    })
        );
    
        return Promise.all(albumPromises);
    };


    useEffect(() => {
        fetchDataForCategory(3)
            .then((data) => setFeaturedProducts(data));
        fetchDataForCategory(3, 'Vinyl', false)
            .then((data) => setNewVinyl(data));
        fetchDataForCategory(3, 'CD', false)
            .then((data) => setNewCDs(data));
        fetchDataForCategory(3, 'Vinyl', true)
            .then((data) => setUsedVinyl(data));
        fetchDataForCategory(3, 'CD', true)
            .then((data) => setUsedCDs(data));
    }, []);


    return (
        <div>
            <hr className="divider" />
            <ProductList title="Featured Products" products={featuredProducts} />
            <hr className="divider" />
            <ProductList title="New Vinyl" products={newVinyl} />
            <hr className="divider" />
            <ProductList title="New CDs" products={newCDs} />
            <hr className="divider" />
            <ProductList title="Used Vinyl" products={usedVinyl} />
            <hr className="divider" />
            <ProductList title="Used CDs" products={usedCDs} />
            <hr className="divider" />
        </div>
    );
}

export default HomeGallery;