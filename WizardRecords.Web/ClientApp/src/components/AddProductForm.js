import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/Home.css';

function AddProductForm() {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        description: '',
        price: '',
        image: '',
        quantity: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Sending product to the API
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                alert('Added successfully!');
            } else {
                alert('Error durirng process');
            }
        } catch (error) {
            console.error("Error during process", error);
        }
    };

    return (
        <Container className="add-product-form">
            <h2>Add new product</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Album</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nom du produit"
                        value={product.name}
                        onChange={e => setProduct({ ...product, name: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Catégorie</Label>
                    <Input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Catégorie"
                        value={product.category}
                        onChange={e => setProduct({ ...product, category: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Description"
                        value={product.description}
                        onChange={e => setProduct({ ...product, description: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Prix"
                        value={product.price}
                        onChange={e => setProduct({ ...product, price: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image file name</Label>
                    <Input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="URL de l'image"
                        value={product.image}
                        onChange={e => setProduct({ ...product, image: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="quantity">Quantity</Label>
                    <Input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Quantité"
                        value={product.quantity}
                        onChange={e => setProduct({ ...product, quantity: e.target.value })}
                    />
                </FormGroup>
                <Button type="submit">Add product</Button>
            </Form>
        </Container>
    );
}

export default AddProductForm;