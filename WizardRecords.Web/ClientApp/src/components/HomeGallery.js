import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Home.css';
import '../styles/Fonts.css';

const Product = ({ product }) => {
    let coverImageSrc, formatImageSrc;
    console.log("Product cover:", product.cover); console.log("Product format:", product.format);

    try {
        formatImageSrc = require(`./Images/CoverTemplate/${product.format}`);
    } catch (err) {
        console.error(`Error requiring format image for ${product.format}`, err);
        formatImageSrc = './Images/SkullOops.png'; // default image or some placeholder
    }

    try {
        coverImageSrc = require(`./Images/AlbumCovers/${product.cover}`);
    } catch (err) {
        console.error(`Error requiring cover image for ${product.cover}`, err);
        coverImageSrc = './Images/SkullOops.png'; // default image or some placeholder
    }

    return (
        <Col md={4} className="d-flex mb-4">
            <Link to={`/detail/${product.id}`} className="cardHREF card-width">
                <Card className="h-100">
                    <CardImg top className="card-img-format" src={formatImageSrc} alt={product.format} />
                    <CardImg top className="card-img-cover" src={coverImageSrc} alt={product.cover} />
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
            </Link>
        </Col>
    );
};

//const Product = ({ product }) => 
//    <Col md={4} className="d-flex mb-4">
//        <Link to={`/detail/${product.id}`} className="cardHREF card-width">
//            <Card className="h-100">
//                <CardImg top className="card-img-format" src={require(`./Images/CoverTemplate/${product.format}`)} alt={product.format} />
//                <CardImg top className="card-img-cover" src={require(`./Images/AlbumCovers/${product.cover}`)} alt={product.cover} />
//                <CardBody className="card-body">
//                    <div className="card-info">
//                        <CardTitle className="card-artist">{product.artistName}</CardTitle>
//                        <CardSubtitle className="card-album">{product.albumTitle}</CardSubtitle>
//                    </div>
//                    <div className="card-divider"></div>
//                    <div className="card-purchase">
//                        <CardTitle className="card-price"><b>${product.price}</b></CardTitle>
//                        <CardSubtitle className="card-basket">Add to basket</CardSubtitle>
//                    </div>
//                </CardBody>
//            </Card>
//        </Link>
//    </Col>
//);

const ProductList = ({ title, products = [] }) => (
    <section className={`product-list section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <Container>
            <div className="section-category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>{title}</h1>
                <h3><Link href={`/product/all`}>Click for more {'->'}</Link></h3>
            </div>
            <Row>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Row>
        </Container>
    </section>
);

const API_BASE_URL = 'https://localhost:44415';

function HomeGallery() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newVinyl, setNewVinyl] = useState([]);
    const [newCDs, setNewCDs] = useState([]);
    const [usedVinyl, setUsedVinyl] = useState([]);
    const [usedCDs, setUsedCDs] = useState([]);

    const fetchDataForCategory = (category, albumIds) => {
        const apiUrl = `${API_BASE_URL}/album`;

        console.log('API URL:', apiUrl);

        const albumPromises = albumIds.map((albumId) =>
            axios.get(`${apiUrl}/${albumId}`)
                .then((response) => {
                    console.log(`Response for album ${albumId}:`, response.data);
                    if (response.status === 200) {
                        const album = response.data;
                        return {
                            id: album.albumId,
                            cover: album.imgPath,
                            format: album.mediaType === 0 ? "VinylBase.png" : "CDBase.png",  // Assuming mediaType 1 is for vinyl
                            artistName: album.artistId.toString(), // Just using the ArtistId as a string for now
                            albumTitle: album.title,
                            price: album.price.toFixed(2)  // Format price to 2 decimal places
                        };
                    } else {
                        throw new Error(`Request for album ${albumId} failed with status: ${response.status}`);
                    }
                })
                .catch((error) => {
                    console.error(`Error fetching album ${albumId}:`, error);
                    return null;
                })
        );

        return Promise.all(albumPromises);
    };

    useEffect(() => {
        fetchDataForCategory('featuredProducts', [1, 2, 3])
            .then((data) => setFeaturedProducts(data.filter(Boolean)));

        fetchDataForCategory('newVinyl', [4, 5, 6])
            .then((data) => setNewVinyl(data.filter(Boolean)));

        fetchDataForCategory('newCDs', [7, 8, 9])
            .then((data) => setNewCDs(data.filter(Boolean)));

        fetchDataForCategory('usedVinyl', [10, 11, 12])
            .then((data) => setUsedVinyl(data.filter(Boolean)));

        fetchDataForCategory('usedCDs', [13, 14, 15])
            .then((data) => setUsedCDs(data.filter(Boolean)));
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
        </div>
    );
}

export default HomeGallery;