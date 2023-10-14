import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Product = ({ product }) => {
    let coverImageSrc, formatImageSrc;
    console.log("Product cover:", product.cover); console.log("Product format:", product.format);

    try {
        formatImageSrc = require(`./Images/CoverTemplate/${product.format}`);
    } catch (err) {
        console.error(`Error requiring format image for ${product.format}`, err);
    }

    try {
        coverImageSrc = require(`./Images/AlbumCovers/${product.cover}`);
    } catch (err) {
        console.error(`Error requiring cover image for ${product.cover}`, err);
        coverImageSrc = './Images/CoverTemplate/SkullOops.png';
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

const SearchResults = () => {
    // Get the search query from the URL
    const searchQuery = new URLSearchParams(useLocation().search).get('query');

    const [searchResults, setSearchResults] = useState([]);

    const API_BASE_URL = 'https://localhost:44415';

    // Function to fetch search results based on the search query
    const fetchSearchResults = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search?query=${searchQuery}`);

            if (response.status === 200) {
                setSearchResults(response.data); // Assuming your API returns an array of products
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    useEffect(() => {
        fetchSearchResults();
    }, [searchQuery]);

    return (
        <div>
            <h2>Search Results for "{searchQuery}"</h2>
            <Container>
                <Row>
                    {searchResults.map(product => ( <Product key={product.id} product={product} /> ))}
                </Row>
            </Container>
        </div>
    );
};

export default SearchResults;

