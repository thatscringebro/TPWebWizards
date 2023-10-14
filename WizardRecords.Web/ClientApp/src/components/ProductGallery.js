﻿
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Home.css';
import '../styles/Fonts.css';


const API_BASE_URL = 'https://localhost:44415';

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

const ProductList = ({ title, products = [] }) => (
    <section className={`product-list section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <Container>
            <div className="section-category" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>{title}</h1>
                <h3><Link to={`/request/all`}>Click for more {'->'}</Link></h3>
            </div>
            <Row>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Row>
        </Container>
    </section>
);

function ProductsGallery() {

    const [product, setProducts] = useState([]);
    const fetchDataForCategory = (_category, count, mediaType = null) => {

        const getArtistNameById = (artistId) => {
            console.log('Artist data:', artistId);
            return axios.get(`${API_BASE_URL}/artist/${artistId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.data.artistName;
                    }
                    throw new Error(`Failed to fetch artist name for id ${artistId}`);
                });
        };

        const albumPromises = Array.from({ length: count }).map(() =>
            axios.get(`${API_BASE_URL}/album/mediaType`, { params: mediaType !== null ? { mediaType } : {} })
                .then(async (response) => {
                   
                    if (response.status === 200) {
                        const album = response.data;
                        console.log('Hallo:', response.data);

                        for (var i = 0; i < count; i++) {


                            const artistName = await getArtistNameById(album[i].artistId);
                            console.log('Album data:', artistName);
                            return {
                                id: album[i].albumId,
                                cover: album[i].imageFilePath,
                                mediaType: album[i].media === 0 ? "VinylBase.png" : "CDBase.png",
                                artistName: artistName,
                                albumTitle: album[i].title,
                                price: album[i].price.toFixed(2),
                            };


                        }
                      
                    }
                    else {
                        throw new Error(`Failed to fetch random album with status: ${response.status}`);
                    }
                })
        );
        return Promise.all(albumPromises);

    };

    useEffect(() => {
        fetchDataForCategory('product', 1, 1)
            .then((data) => setProducts(data));
    }, []);
        

    for (var i = 0; i < 24; i++) {
        return (
            <div>
                <hr className="divider" />
                <ProductList title="All CDs" products={product[i]} />
                <hr className="divider" />
            </div>
        );
    }

   
}

export default ProductsGallery;