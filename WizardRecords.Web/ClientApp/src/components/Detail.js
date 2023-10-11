import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Detail.css';

const API_BASE_URL = 'https://localhost:44415';

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const fetchDataForDetail = async (id) => {

        const getArtistNameById = (artistId) => {
            return axios.get(`${API_BASE_URL}/artist/${artistId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.data.artistName;
                    }
                    throw new Error(`Failed to fetch artist name for id ${artistId}`);
                });
        };

        try {
            const response = await axios.get(`${API_BASE_URL}/album/${id}`);
            if (response.status === 200) {
                const album = response.data;

                const imagePath = require(`./Images/AlbumCovers/${album.imgPath}`);
                const artistName = await getArtistNameById(album.artistId);
             

                const productData = {
                    id: album.albumId,
                    ImageFilePath: imagePath,
                    category: album.category,
                    quantity: album.qty,
                    format: album.mediaType === 0 ? 'Vinyl' : 'CD',
                    artistName: artistName,
                    albumTitle: album.title,
                    price: album.price.toFixed(2),
                };
                setProduct(productData);
            } else {
                throw new Error(`Failed to fetch album with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    useEffect(() => {
        fetchDataForDetail(id);
    }, [id]);

    if (!product) {
        return <div>Error loading product details.</div>;
    }

    return (

        <div className="detail-container">
            <div className="detail-content">
                <div className="detail-image">
                    <img src={product.ImageFilePath} alt={`${product.albumTitle} cover`} />
                </div>
                <div className="detail-text">
                    <p className="price">${product.price}</p>
                    <p>Album title: {product.albumTitle}</p>
                    <p>Artist : {product.artistName}</p>
                    <p>Category: {product.category}</p>
                    <p>Format: {product.format}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                   
                   
                </div>
            </div>
        </div>
    );
};

export default Detail;
