import React, { useState, useEffect } from 'react';
import '../styles/OrderPage.css';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { API_BASE_URL } from './utils/config'
import axios from 'axios';

const OrderPage = () => {
  const [user, GetUser] = useState();
  const [orderData, setOrderData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // Champ pour le numéro de téléphone
    address: '',
    city: '',
    zipCode: '',
    country: 'Canada',
    province: '', // Champ pour la province
    // Ajoutez d'autres champs si nécessaire
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




   //get token
   useEffect(() => {
    var token = sessionStorage.getItem('userToken');
    var tokenGuest = sessionStorage.getItem('guestToken');
    if(token)
    {
        var decodedToken = jwt_decode(token);
        GetUser(decodedToken["id"]);

    }else if(tokenGuest){     
      var decodedTokenGuest = jwt_decode(tokenGuest);
      GetUser(decodedTokenGuest["id"]);
    }
    else {
      GetUser("Undefined");
    }
}, []);



  useEffect(() => {
    // Chargez les données nécessaires pour la page de commande, si nécessaire
  }, []);

  // Liste des provinces canadiennes pour le menu déroulant
  const provinces = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
    "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
  ];

  const validate = (data) => {
    let errors = {};
  
    // Vérification du nom complet
    if (!data.firstName.trim()) errors.firstName = "The first name is required";
    if (!data.lastName.trim()) errors.lastName = "The last name is required";
  
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
        const response = await axios.post(`${API_BASE_URL}/Order/Order`, {
          userId: user,
          firstName: orderData.firstName,
          lastName: orderData.lastName,
          email: orderData.email,
          phone: orderData.phone,
          address: orderData.address,
          city: orderData.city,
          country: orderData.country,
          province: orderData.province,
          zipCode: orderData.zipCode
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
    } else {
      setErrors(formErrors);
    }
  };


  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div className="grid-container">
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={orderData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={orderData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={orderData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={orderData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={orderData.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={orderData.city}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value="Canada" // Toujours afficher Canada
          readOnly // Rendre le champ en lecture seule
          style={{ backgroundColor: '#e0e0e0' }} // Style en ligne pour la couleur de fond grise
        />
      </div>
      <div className="form-field">
        <label htmlFor="province">Province:</label>
        <select
          id="province"
          name="province"
          value={orderData.province}
          onChange={handleInputChange}
        >
          <option value="">Select a province</option>
          {provinces.map((province, index) => (
            <option key={index} value={province}>{province}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="zipCode">ZIP Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={orderData.zipCode}
          onChange={handleInputChange}
        />
      </div>
      
      {errors.firstName && <div className="error">{errors.firstName}</div>}
      {errors.lastName && <div className="error">{errors.lastName}</div>}
      {errors.email && <div className="error">{errors.email}</div>}
      {errors.address && <div className="error">{errors.address}</div>}
      {errors.city && <div className="error">{errors.city}</div>}
      {errors.zipCode && <div className="error">{errors.zipCode}</div>}
      {errors.country && <div className="error">{errors.country}</div>}


      <button type="submit" className="primary-button">Send</button>
    </form>
      <div className="right-content">
      {/* Future content goes here */}
      <h1>test</h1>
      </div>
    </div>

  );
};

export default OrderPage;
