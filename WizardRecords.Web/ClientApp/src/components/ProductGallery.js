
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../styles/Home.css';
import '../styles/Fonts.css';

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
                <h1>{title}</h1>
            </div>
            <Row>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Row>
        </Container>
    </section>
);

const fetchDataForCategory = (count) => {

    const getArtistNameById = (artistId) => {
        return axios.get(`${API_BASE_URL}/artist/${artistId}`)
            .then(response => {
                if (response.status === 200) {
                    return response.data.artistName;
                }
                throw new Error(`Failed to fetch artist name for id ${artistId}`);
            });
    };

    return axios.get(`${API_BASE_URL}/album/all`)
        .then(async (response) => {
                if (response.status === 200) {
                    const albums = response.data;
                    const albumPromises = albums.map(async (album) => {
                        const artistName = await getArtistNameById(album.artistId);
                        return {
                            id: album.albumId,
                            cover: album.imageFilePath,
                            mediaType: album.media === 0 ? "VinylBase.png" : "CDBase.png",
                            artistName: artistName,
                            albumTitle: album.title,
                            price: album.price.toFixed(2),
                            stockQuantity: album.stockQuantity
                        };
                    });

                    return Promise.all(albumPromises);
                } else {
                    throw new Error(`Failed to fetch albums with status: ${response.status}`);
            }
        });
};


function ProductsGallery() {
    const [allProducts, setAllProducts] = useState([]); // Liste complète des produits
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSortOption, setSelectedSortOption] = useState('default');
    const productsPerPage = 24;

    useEffect(() => {
        fetchDataForCategory().then((data) => {
            setAllProducts(data); // Stockez la liste complète
            setProducts(data); // Initialisez également les produits affichés
        });
    }, []);

    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
        let filteredProducts = [...allProducts]; // Copiez la liste complète pour appliquer les filtres

        if (event.target.value === 'cdOnly') {
            // Filtrer uniquement les CD
            filteredProducts = filteredProducts.filter((product) => product.mediaType === 'CDBase.png');
        } else if (event.target.value === 'vinylOnly') {
            // Filtrer uniquement les vinyles
            filteredProducts = filteredProducts.filter((product) => product.mediaType === 'VinylBase.png');
        }

        setProducts(filteredProducts);
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(products.length / productsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const sortedProducts = [...products];
    if (selectedSortOption === 'priceLowToHigh') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'priceHighToLow') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
            <div className="sort-bar">
                <label htmlFor="sortDropdown">Sort by: </label>
                <select id="sortDropdown" value={selectedSortOption} onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="cdOnly">CD Only</option>
                    <option value="vinylOnly">Vinyl Only</option>
                </select>
            </div>
            <ProductList title="All products" products={currentProducts} />
            <div className="pagination">
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
}

export default ProductsGallery;