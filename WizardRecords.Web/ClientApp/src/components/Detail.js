import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Detail.css';

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`/album/${id}`)
            .then(response => {
                if (response.status === 200) {
                    setProduct(response.data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

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