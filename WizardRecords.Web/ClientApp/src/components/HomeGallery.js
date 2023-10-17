import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../styles/Home.css';
import '../styles/Fonts.css';

const Product = ({ product }) => {
    let coverImageSrc, formatImageSrc;
    try {
        formatImageSrc = require(`./Images/CoverTemplate/${product.mediaType}`);
    } catch (err) {
        console.error(`Error requiring format image for ${product.mediaType}`, err);
    }

    try {
        coverImageSrc = require(`./Images/AlbumCovers/${product.cover}`);
    } catch (err) {
        console.error(`Error requiring cover image for ${product.cover}`, err);
    }

    return (
        <Col md={4} className="d-flex mb-4">
            <Link to={`/detail/${product.id}`} className="card-href card-width">
                <Card className="h-100">
                    <CardImg top className="card-img-format" src={formatImageSrc} alt={product.mediaType} />
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

    const fetchDataForCategory = (category, count, mediaType = null) => {
        const getArtistNameById = (artistId) => {
            return axios.get(`${API_BASE_URL}/artist/${artistId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.data.artistName;
                    }
                    throw new Error(`Failed to fetch artist name for id ${artistId}`);
                });
        };

        const albumPromises = Array.from({ length: count }).map(() => 
                axios.get(`${API_BASE_URL}/album/random`, {
                    params: mediaType !== null ? { mediaType } : {} })
                    .then(async (response) => {
                        if (response.status === 200) {
                            const album = response.data;
                            const artistName = await getArtistNameById(album.artistId);

                            return {
                                id: album.albumId,
                                cover: album.imageFilePath,
                                mediaType: album.media === 0 ? "VinylBase.png" : "CDBase.png",
                                artistName: artistName,
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
        fetchDataForCategory('featuredProducts', 3)
            .then((data) => setFeaturedProducts(data));
        fetchDataForCategory('newVinyl', 3, 0)
            .then((data) => setNewVinyl(data));
        fetchDataForCategory('newCDs', 3, 1)
            .then((data) => setNewCDs(data));
        fetchDataForCategory('usedVinyl', 3, 0)
            .then((data) => setUsedVinyl(data));
        fetchDataForCategory('usedCDs', 3, 1)
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