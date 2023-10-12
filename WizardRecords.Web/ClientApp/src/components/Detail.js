import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../styles/Detail.css';

function Detail(props) {
    const [product, setProduct] = useState(null);

    const { id: productId } = useParams();

    useEffect(() => {
        axios.get(`${API_BASE_URL}/album/${productId}`)
            .then(response => {
                if (response.status === 200) {
                    console.log("Product data received:", response.data);
                    setProduct(response.data);
                } else {
                    console.error("Unexpected response status:", response.status);
                }
            })
            .catch(error => {
                console.error("Failed to fetch product details:", error);
            });
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="detail-main">
            <p>Product : {product.id}</p>
            <p>Artist : {product.artistName}</p>
            <p>Album : {product.albumTitle}</p>
            <p>Price : ${product.price}</p>
            <img src={require(`./Images/AlbumCovers/${product.cover}`)} alt={`${product.albumTitle} cover`} />
        </div>
    );
};

export default Detail;