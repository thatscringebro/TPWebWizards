import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
                alert('Produit ajouté avec succès !');
            } else {
                alert('Erreur lors de l\'ajout du produit.');
            }
        } catch (error) {
            console.error("Erreur de l'envoi du produit", error);
        }
    };

    return (
        <Container className="add-product-form">
            <h2>Add new product</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Nom du produit</Label>
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
                    <Label for="price">Prix</Label>
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
                    <Label for="image">URL de l'image</Label>
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
                    <Label for="quantity">Quantité</Label>
                    <Input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Quantité"
                        value={product.quantity}
                        onChange={e => setProduct({ ...product, quantity: e.target.value })}
                    />
                </FormGroup>
                <Button type="submit">Ajouter</Button>
            </Form>
        </Container>
    );
}

export default AddProductForm;