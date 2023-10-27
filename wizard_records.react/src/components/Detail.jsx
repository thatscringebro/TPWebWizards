import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from './utils/config';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Detail.css';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const fetchDataForDetail = async  (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/album/${id}`);
            if (response.status === 200) {
                const album = response.data;

                const imagePath = require(`../assets/images/covers/${album.imageFilePath}`);

                const productData = {
                    albumId: album.albumId,
                    imageFilePath: imagePath,
                    albumLabel: album.labelName,
                    media: album.media === 0 ? 'Vinyl' : 'CD',
                    artistName: album.artistName,
                    albumTitle: album.title,
                    isUsed: album.isUsed === false ? 'New' : 'Used',
                    price: album.price.toFixed(2),
                    quantity: album.quantity
                };

                setProduct(productData);

            } else {
                throw new Error(`Failed to fetch album with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const deleteProduct = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/crud/delete`, {
                params: { title: product.albumTitle },
            });
            if (response.status === 200) {
                console.log('Album deleted successfully');
                navigate('/products');
            } else {
                console.error('Failed to delete album with status:', response.status);
            }
        } catch (error) {
            console.error('Error deleting album:', error);
        }
    };

    const editProduct = () => {
        setEditedProduct(product);
        setIsEditing(true);
    };

    const updateProduct = async () => {
        try {
            console.log(editedProduct);
            const albumUpdate = {
                Title: editedProduct.albumTitle,
                Quantity: editedProduct.quantity,
                Price: editedProduct.price
            };

            console.log(albumUpdate);

            const response = await axios.put(`${API_BASE_URL}/crud/update/${product.albumId}`, albumUpdate, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                console.log('Album updated successfully');
                setIsEditing(false);
                fetchDataForDetail(id);
            } else {
                console.error('Failed to update album with status:', response.status);
            }
        } catch (error) {
            console.error('Error updating album:', error);
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
            <div className="detail-image">
                <img src={product.imageFilePath} alt={`${product.albumTitle} cover`} />
            </div>
            <div className="detail-content">
                {isEditing ? (
                    <div className="input-container">
                        <input
                            type="text"
                            className="detail-input"
                            value={editedProduct.albumTitle}
                            onChange={(e) => setEditedProduct({ ...editedProduct, albumTitle: e.target.value })}
                        />
                        <input
                            type="number"
                            className="detail-input"
                            value={editedProduct.quantity}
                            onChange={(e) => setEditedProduct({ ...editedProduct, quantity: e.target.value })}
                        />
                        <input
                            type="number"
                            className="detail-input"
                            value={editedProduct.price}
                            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                        />
                        <div className="save-cancel-container">
                            <button className="button-save" onClick={updateProduct}>Save</button>
                            <button className="button-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Link to={`/artist/${product.artistName}`}><h1>{product.artistName}</h1></Link>
                        <h2 className="title-label-container">"{product.albumTitle}" ({product.albumLabel})</h2>
                        <div className="detail-information">
                            <br />
                            <p><i>Section</i> : {product.isUsed} {product.media}
                            <br />
                            <i>{product.quantity > 0 ? 'This item is currently AVAILABLE and ready to ship!' : 'Sorry! This item is currently OUT OF STOCK.'}</i></p>
                        </div>
                        <div className="edit-delete-container">
                            <button className="button-edit" onClick={editProduct}>Edit</button>
                            <button className="button-delete" onClick={deleteProduct}>Delete</button>
                        </div>
                    </div>
                )}
                <div className="price-cart-container">
                    <p className="detail-price">${product.price}</p>
                    <button className="button-cart">Add to Cart</button>
                </div>
            </div>
    </div>
    );
};

export default Detail;