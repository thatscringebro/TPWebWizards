import React, { useState } from 'react';

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

        // Envoie du produit à l'API
        try {
            const response = await fetch('/api/products', { //À modifier?
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom du produit"
                value={product.name}
                onChange={e => setProduct({ ...product, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Catégorie"
                value={product.category}
                onChange={e => setProduct({ ...product, category: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={product.description}
                onChange={e => setProduct({ ...product, description: e.target.value })}
            />
            <input
                type="number"
                placeholder="Prix"
                value={product.price}
                onChange={e => setProduct({ ...product, price: e.target.value })}
            />
            <input
                type="text"
                placeholder="URL de l'image"
                value={product.image}
                onChange={e => setProduct({ ...product, image: e.target.value })}
            />
            <input
                type="number"
                placeholder="Quantité"
                value={product.quantity}
                onChange={e => setProduct({ ...product, quantity: e.target.value })}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default AddProductForm;
