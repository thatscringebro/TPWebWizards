import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../styles/Detail.css';
import '../styles/Home.css';
const Detail = () => {
    const { id } = useParams();
    console.log('Retrieved id in Params:', id);
    const [product, setProduct] = useState(null);

    const fetchDataForDetail = async  (id) => {
        const getArtistNameById = async (artistId) => {
            const response = await axios.get(`${API_BASE_URL}/artist/${artistId}`);
            if (response.status === 200) {
                return response.data.artistName;
            } else {
                throw new Error(`Failed to fetch artist name for id ${artistId}`);
            }
        };

        try {
            const response = await axios.get(`${API_BASE_URL}/album/${id}`);
            console.log("Full album response:", response.data);
            if (response.status === 200) {
                const album = response.data;

                console.log('Retrieved Id in Detail:', album.albumId);
                console.log('Retrieved ArtistId in Detail:', album.artistId);
                console.log('Retrieved Quantity in Detail:', album.stockQuantity);
                console.log('Retrieved Title in Detail:', album.title);
                console.log('Retrieved ImageFilePath in Detail:', album.imageFilePath);
                console.log('Retrieved Price in Detail:', album.price);

                const imagePath = require(`./Images/AlbumCovers/${album.imageFilePath}`);
                const artistName = await getArtistNameById(album.artistId);

                const productData = {
                    albumId: album.albumId,
                    imageFilePath: imagePath,
                    category: album.category === 0 ? 'New' : 'Used',
                    quantity: album.stockQuantity,
                    format: album.MediaType === 0 ? 'Vinyl' : 'CD',
                    artistName: artistName,
                    albumTitle: album.title,
                    price: parseFloat(album.price).toFixed(2)
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
        return <div>Loading product details...</div>;
    }

    return (

        <div className="detail-container">
            <div className="detail-content">
                <div className="detail-image">
                    <img src={product.imageFilePath} alt={`${product.albumTitle} cover`} />
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