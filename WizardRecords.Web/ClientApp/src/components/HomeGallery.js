import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../styles/Home.css';
import '../styles/Fonts.css';

const Product = ({ product }) => {
    let coverImageSrc, formatImageSrc;
    console.log("Product cover:", product.cover); console.log("Product format:", product.format);

    try {
        formatImageSrc = require(`../../public/Images/CoverTemplate/${product.format}`);
    } catch (err) {
        console.error(`Error requiring format image for ${product.format}`, err);
    }

    try {
        coverImageSrc = require(`../../public/Images/AlbumCovers/${product.cover}`);
    } catch (err) {
        console.error(`Error requiring cover image for ${product.cover}`, err);
        coverImageSrc = '../../public/Images/CoverTemplate/SkullOops.png';
    }

    return (
        <Col md={4} className="d-flex mb-4">
            <Link to={`/album/${product.id}`} className="cardHREF card-width">
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
            axios.get(`${API_BASE_URL}/album/random`, { params: mediaType !== null ? { mediaType } : {} })
                .then(async (response) => {
                    if (response.status === 200) {
                        const album = response.data;
                        const artistName = await getArtistNameById(album.artistId);

                        return {
                            id: album.albumId,
                            cover: album.imgPath,
                            format: album.mediaType === 0 ? "VinylBase.png" : "CDBase.png",
                            artistName: artistName,
                            albumTitle: album.title,
                            price: album.price.toFixed(2)
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
        </div>
    );
}

export default HomeGallery;