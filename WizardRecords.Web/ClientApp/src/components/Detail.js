import React from 'react';
import { useParams } from 'react-router-dom';
import { FeaturedProducts, NewVinyl, NewCDs, UsedVinyl, UsedCDs } from './ProductTemplate'
import '../styles/Detail.css';

const Detail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id, 10));

    if (!product) return <div>Product not found</div>;

    return (
        <div className="detail-main">
            <p>Product : {product.id}</p>
            <p>Artist : {product.artistName}</p>
            <p>Album : {product.albumTitle}</p>
            <p>Price : {product.price}</p>
            <img src={require(`./Images/AlbumCovers/${product.cover}`)} alt={`${product.albumTitle} cover`} />
        </div>
    );
};

export default Detail;