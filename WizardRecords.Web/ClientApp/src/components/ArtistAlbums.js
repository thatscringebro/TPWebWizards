import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import axios from 'axios';

const mapAlbumToProduct = (album, artistName) => ({
    id: album.albumId,
    cover: album.imageFilePath,
    mediaType: album.media === 0 ? "VinylBase.png" : "CDBase.png",
    artistName: artistName,
    albumTitle: album.title,
    price: album.price.toFixed(2),
    stockQuantity: album.stockQuantity
});

const Product = ({ product }) => {
    const isAvailable = product.stockQuantity > 0;

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
                            <CardSubtitle className="card-album"> {isAvailable ? 'Available' : 'Not Available'} </CardSubtitle>
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

            </div>
            <Row>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Row>
        </Container>
    </section>
);

const ArtistAlbums = () => {
    const { artistId } = useParams();
    const [ products, setProducts ] = useState([]);
    const [ artistName, setArtistName ] = useState("");

    useEffect(() => {
        const fetchAlbumsForArtist = async () => {
            try {
                const artistResponse = await axios.get(`${API_BASE_URL}/artist/${artistId}`);
                setArtistName(artistResponse.data.artistName);

                const albumsResponse = await axios.get(`${API_BASE_URL}/artist/${artistId}/albums`);

                if (albumsResponse.status === 200) {
                    const transformedAlbums = albumsResponse.data.map(album => mapAlbumToProduct(album, artistName));
                    setProducts(transformedAlbums);
                } else {
                    console.error(`Failed to fetch albums for artistId: ${artistId}`);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchAlbumsForArtist();
    }, [artistId, artistName]);

    return (
        <div>
            <h2>Albums by {artistName}</h2>
            <ProductList title="Artist's Albums" products={products} />
        </div>
    );
};

export default ArtistAlbums;