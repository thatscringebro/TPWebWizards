import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import "../styles/ProductManager.css"
import { API_BASE_URL } from '../config';
import axios from 'axios';

function AddProductForm() {
    const [product, setProduct] = useState({
        artistName: '',
        albumTItle: '',
        labelName: '',
        category: '',
        media: '',
        price: '',
        imageFileName: '',
        image: null,
        mediaGrade: '',
        sleeveGrade: '',
        catalogNumber: '',
        matrixNumber: '',
        quantity: '',
        genre: '',
        comments: ''
    });

    const handleFileChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(product).forEach(key => {
            formData.append(key, product[key]);
        });

        try {
            const response = await axios.post(`${API_BASE_URL}/crud/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                const createdAlbum = await response.json();
               
                console.log('Album created:', createdAlbum);
            } else {
                console.error('Error creating the album.');
            }
        } catch (error) {
            console.error('Error sending the product', error);
        }
    };
    return (
        <Container className="add-product-form">
            <h2>Add new product</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Artist name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Artist name"
                        value={product.artistName}
                        onChange={e => setProduct({ ...product, artistName: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Album title</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Album title"
                        value={product.albumTitle}
                        onChange={e => setProduct({ ...product, albumTItle: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Label name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Label name"
                        value={product.labelName}
                        onChange={e => setProduct({ ...product, labelName: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Used or New"
                        value={product.category}
                        onChange={e => setProduct({ ...product, category: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Media</Label>
                    <Input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Vinyl, CD, Cassette, etc"
                        value={product.media}
                        onChange={e => setProduct({ ...product, media: e.target.value })}
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
                        onChange={e => setProduct({ ...product, price: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="quantity">Quantity</Label>
                    <Input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Quantity"
                        value={product.quantity}
                        onChange={e => setProduct({ ...product, quantity: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image file name</Label>
                    <Input
                        type="file"
                        name="image"
                        id="image"
                        placeholder="File name only"
                        value={product.image}
                        onChange={handleFileChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="mediaGrade">Media grade</Label>
                    <Input
                        type="text"
                        name="mediaGrade"
                        id="mediaGrade"
                        placeholder="For used products ONLY!"
                        value={product.mediaGrade}
                        onChange={e => setProduct({ ...product, mediaGrade: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="sleeveGrade">Sleeve grade</Label>
                    <Input
                        type="text"
                        name="sleeveGrade"
                        id="sleeveGrade"
                        placeholder="For used products ONLY!"
                        value={product.sleeveGrade}
                        onChange={e => setProduct({ ...product, sleeveGrade: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="catalogNumber">Catalog number</Label>
                    <Input
                        type="text"
                        name="catalogNumber"
                        id="catalogNumber"
                        placeholder="For used products ONLY!"
                        value={product.catalogNumber}
                        onChange={e => setProduct({ ...product, catalogNumber: e.target.value })}
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
                        onChange={e => setProduct({ ...product, matrixNumber: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Comments</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Comments"
                        value={product.comments}
                        onChange={e => setProduct({ ...product, comments: e.target.value })}
                    />
                </FormGroup>
                <Button type="submit">Add product</Button>
            </Form>
        </Container>
    );
}

export default AddProductForm;
