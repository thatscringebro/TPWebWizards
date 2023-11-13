import React, { useState, useEffect } from 'react';


const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    // Ajoutez d'autres champs si nécessaire
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Chargez les données nécessaires pour la page de commande, si nécessaire
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Gérer la réponse ici
      setLoading(false);
      // Peut-être naviguer vers une page de succès ou afficher un message de succès
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={orderData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={orderData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={orderData.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={orderData.city}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="zipCode">ZIP Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={orderData.zipCode}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={orderData.country}
          onChange={handleInputChange}
        />
      </div>
      {/* Ajoutez d'autres champs de formulaire si nécessaire */}
      <button type="submit">Envoyer la commande</button>
    </form>
  );
};

export default OrderPage;
