import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../styles/Detail.css';


const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const fetchDataForDetail = async  (id) => {
        const getArtistNameById = async (artistId) => {
            const response = await axios.get(`${API_BASE_URL}/artist/${artistId}`);
            if (response.status === 200) {
                console.log("Artist name response:", response.data.artistName);
                return response.data.artistName;
            } else {
                throw new Error(`Failed to fetch artist name for id ${artistId}`);
            }
        };

        const getLabelNameById = async (labelId) => {
            const response = await axios.get(`${API_BASE_URL}/label/${labelId}`);
            if (response.status === 200) {
                console.log("Label name response:", response.data.labelName);
                return response.data.labelName;
            } else {
                throw new Error(`Failed to fetch artist name for id ${labelId}`);
            }
        };

        try {
            const response = await axios.get(`${API_BASE_URL}/album/${id}`);
            console.log("Full album response:", response.data);
            console.log("Fetching artist details for artistId:", response.data.artistId);
            if (response.status === 200) {
                const album = response.data;

                const imagePath = require(`./Images/AlbumCovers/${album.imageFilePath}`);
                const artistName = await getArtistNameById(album.artistId);
                console.log("Fetching album's artistId:", album.artistId);
                const labelName = await getLabelNameById(album.labelId);

                const productData = {
                    albumId: album.albumId,
                    artistId: album.artistId,
                    imageFilePath: imagePath,
                    category: album.category === 0 ? 'Used' : 'New',
                    quantity: album.stockQuantity,
                    albumLabel: labelName,
                    format: album.media === 0 ? 'Vinyl' : 'CD',
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
                StockQuantity: editedProduct.quantity,
                Price: editedProduct.price,
                ImageFilePath: editedProduct.imageFilePath,
                Comments: "yo bitch"
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
                fetchDataForDetail(id); // Refresh product details after editing
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
            <div className="detail-content">
                <div className="detail-image">
                    <img src={product.imageFilePath} alt={`${product.albumTitle} cover`} />
                </div>
                <div className="detail-text">
                    {isEditing ? (
                        <div>
                            <input
                                type="text"
                                value={editedProduct.albumTitle}
                                onChange={(e) => setEditedProduct({ ...editedProduct, albumTitle: e.target.value })}
                            />
                            <input
                                type="number"
                                value={editedProduct.quantity}
                                onChange={(e) => setEditedProduct({ ...editedProduct, quantity: e.target.value })}
                            />
                            <input
                                type="number"
                                value={editedProduct.price}
                                onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                            />
                            <button className="edit-button" onClick={updateProduct}>Save</button>
                            <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <p>{product.artistName}</p>
                            <p className="detail-album-title">"{product.albumTitle}"</p>
                            <p><i>Category</i> : {product.category} {product.format}</p>
                            <p className="detail-album-label"><i>Label</i> : {product.albumLabel}</p>
                            <p><i>In stock</i> : {product.quantity}</p>
                            <p className="detail-price">${product.price}</p>
                            <button className="detail-cart-button">Add to Cart</button>
                            <button className="delete-button" onClick={deleteProduct}>Delete</button>
                            <button className="edit-button" onClick={editProduct}>Edit</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Detail;

