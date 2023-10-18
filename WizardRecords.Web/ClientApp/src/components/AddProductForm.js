import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { MediaType, Category, AlbumGenre, FormatType, Grade } from '../constants'
import { API_BASE_URL } from '../config'
import "../styles/ProductManager.css"
import axios from 'axios';

function AddProductForm() {
    const [product, setProduct] = useState({
        artistId: '',
        albumTitle: '',
        albumGenre: '',
        labelId: '',
        category: '',
        media: '',
        format: '',
        price: '',
        quantity: '',
        imageFileName: '',
        mediaGrade: '',
        sleeveGrade: '',
        catalogNumber: '',
        matrixNumber: '',
        comments: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!product.artistId || !product.albumTitle) {
            alert('Artist name and album title are required.');
            return;
        }

        const mediaInt = mapEnumToInteger(MediaType, product.media);
        const categoryInt = mapEnumToInteger(Category, product.category);
        const albumGenreInt = mapEnumToInteger(AlbumGenre, product.albumGenre);
        const formatInt = mapEnumToInteger(FormatType, product.format);
        const mediaGradeInt = mapEnumToInteger(Grade, product.mediaGrade);
        const sleeveGradeInt = mapEnumToInteger(Grade, product.sleeveGrade);

        console.log('Request body:', product);

        try {
            const response = await axios.post(`${API_BASE_URL}/crud/create`, {
                ArtistId: product.artistId,
                Title: product.albumTitle,
                AlbumGenre: product.albumGenre,
                LabelId: product.labelId,
                CatalogNumber: product.catalogNumber,
                Category: product.category,
                Comments: product.comments,
                Format: product.format,
                ImageFileName: product.imageFileName,
                MatrixNumber: product.matrixNumber,
                Media: product.media,
                MediaGrade: product.mediaGrade,
                Price: parseFloat(product.price),
                StockQuantity: parseInt(product.quantity),
                SleeveGrade: product.sleeveGrade,
            });

            if (response.status === 200) {
                console.log('Album created:', response.data);
                alert('Album successfully created!');

                setProduct({
                    artistId: '',
                    albumTitle: '',
                    albumGenre: '',
                    labelId: '',
                    category: '',
                    media: '',
                    format: '',
                    quantity: '',
                    price: '',
                    imageFileName: '',
                    mediaGrade: '',
                    sleeveGrade: '',
                    catalogNumber: '',
                    matrixNumber: '',
                    comments: ''
                });
            } else {
                console.error('Error creating the album.');
                alert('Error creating the album. Please try again.');
            }
        } catch (error) {
            console.error('Error sending the product', error);
            alert('Error sending the product. Please check your input and try again.');
        }
    };

    const mapEnumToInteger = (enumObject, selectedValue) => {
        const keys = Object.keys(enumObject);
        for (const key of keys) {
            if (enumObject[key] === selectedValue) {
                return key;
            }
        }
        return null;
    };

    const handleInputChange = (e, fieldName) => {
        setProduct({ ...product, [fieldName]: e.target.value });
    };

    return (
        <Container className="add-product-form">
            <h2>Add new product</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="artistId">Artist Name</Label>
                    <Input
                        type="text"
                        name="artistId"
                        id="artistId"
                        placeholder="Artist name"
                        value={product.artistId}
                        onChange={(e) => handleInputChange(e, 'artistId')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="albumTitle">Album title</Label>
                    <Input
                        type="text"
                        name="albumTitle"
                        id="albumTitle"
                        placeholder="Album title"
                        value={product.albumTitle}
                        onChange={(e) => handleInputChange(e, 'albumTitle')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="albumGenre">Album genre</Label>
                    <Input
                        type="select"
                        name="albumGenre"
                        id="albumGenre"
                        value={product.albumGenre}
                        onChange={(e) => handleInputChange(e, 'albumGenre')}
                    >
                        <option value="">Select the Album genre</option>
                        {Object.values(AlbumGenre).map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="labelId">Label name</Label>
                    <Input
                        type="text"
                        name="labelId"
                        id="labelId"
                        placeholder="Label name"
                        value={product.labelName}
                        onChange={(e) => handleInputChange(e, 'labelId')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Price"
                        value={product.price}
                        onChange={(e) => handleInputChange(e, 'price')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input
                        type="select"
                        name="category"
                        id="category"
                        value={product.category}
                        onChange={(e) => handleInputChange(e, 'category')}
                    >
                        <option value="">Select a Category</option>
                        {Object.values(Category).map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="media">Media</Label>
                    <Input
                        type="select"
                        name="media"
                        id="media"
                        value={product.media}
                        onChange={(e) => handleInputChange(e, 'media')}
                    >
                        <option value="">Select a media type</option>
                        {Object.values(MediaType).map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="format">Format</Label>
                    <Input
                        type="select"
                        name="format"
                        id="format"
                        value={product.format}
                        onChange={(e) => handleInputChange(e, 'format')}
                    >
                        <option value="">Select format type</option>
                        {Object.values(FormatType).map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="quantity">Quantity</Label>
                    <Input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Quantity"
                        value={product.quantity}
                        onChange={(e) => handleInputChange(e, 'quantity')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="imageFileName">Image file name</Label>
                    <Input
                        type="text"
                        name="imageFileName"
                        id="imageFileName"
                        placeholder="File name only"
                        value={product.imageFileName}
                        onChange={(e) => handleInputChange(e, 'imageFileName')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="mediaGrade">Media grade</Label>
                    <Input
                        type="select"
                        name="mediaGrade"
                        id="mediaGrade"
                        value={product.mediaGrade}
                        onChange={(e) => handleInputChange(e, 'mediaGrade')}
                    >
                        <option value="">Select grade for the album's condition</option>
                        {Object.values(Grade).map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="sleeveGrade">Sleeve grade</Label>
                    <Input
                        type="select"
                        name="sleeveGrade"
                        id="sleeveGrade"
                        value={product.sleeveGrade}
                        onChange={(e) => handleInputChange(e, 'sleeveGrade')}
                    >
                        <option value="">Select grade for the sleeve's condition</option>
                        {Object.values(Grade).map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="catalogNumber">Catalog number</Label>
                    <Input
                        type="text"
                        name="catalogNumber"
                        id="catalogNumber"
                        placeholder="For used products ONLY!"
                        value={product.catalogNumber}
                        onChange={(e) => handleInputChange(e, 'catalogNumber')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="matrixNumber">Matrix number</Label>
                    <Input
                        type="text"
                        name="matrixNumber"
                        id="matrixNumber"
                        placeholder="For used products ONLY!"
                        value={product.matrixNumber}
                        onChange={(e) => handleInputChange(e, 'matrixNumber')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="comments">Comments</Label>
                    <Input
                        type="textarea"
                        name="comments"
                        id="comments"
                        placeholder="Comments"
                        value={product.comments}
                        onChange={(e) => handleInputChange(e, 'comments')}
                    />
                </FormGroup>
                <Button type="submit">Add product</Button>
            </Form>
        </Container>
    );
}

export default AddProductForm;
