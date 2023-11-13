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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Chargez les données nécessaires pour la page de commande, si nécessaire
  }, []);

  const countries = [
    "France", "Canada", "United State", "Germany", "United Kingdom",
  ];

  const validate = (data) => {
    let errors = {};
  
    // Vérification du nom complet
    if (!data.fullName.trim()) errors.fullName = "The full name is required";
  
    // Vérification de l'email
    if (!data.email.trim()) {
      errors.email = "Email required";
    } else if (!data.email.includes('@')) {
      errors.email = "invalid Email";
    }
  
    // Vérification de l'adresse
    if (!data.address.trim()) errors.address = "adress required";
  
    // Vérification de la ville
    if (!data.city.trim()) errors.city = "town required";
  
    // Vérification du code postal
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    if (!data.zipCode.trim()) {
      errors.zipCode = "Postal Code required";
    } else if (!postalCodeRegex.test(data.zipCode)) {
      errors.zipCode = "Postal code invalid";
    }
  
    // Vérification du pays
    if (!data.country.trim()) errors.country = "Country required";
  
    return errors;
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validate(orderData);
    if (Object.keys(formErrors).length === 0) {
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
    }
    else {
        setErrors(formErrors);
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
        <select
          id="country"
          name="country"
          value={orderData.country}
          onChange={handleInputChange}
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>
      {errors.fullName && <div className="error">{errors.fullName}</div>}
      {errors.email && <div className="error">{errors.email}</div>}
      {errors.address && <div className="error">{errors.address}</div>}
      {errors.city && <div className="error">{errors.city}</div>}
      {errors.zipCode && <div className="error">{errors.zipCode}</div>}
      {errors.country && <div className="error">{errors.country}</div>}


      {/* Ajoutez d'autres champs de formulaire si nécessaire */}
      <button type="submit">Send</button>
    </form>
  );
};

export default OrderPage;
