import React, {  useState, useEffect } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const CheckoutScreen = () => {

    const {orderId} = useParams();
  const stripe = useStripe();
  const elements = useElements();
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardError, setCardError] = useState('');
  
  const handleCardChange = (event) => {
    setCardError(event.error ? event.error.message : '');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    if (!name || !email) {
      console.error("Name and email are required.");
      return;
    }
  
    try {
      const cardElement = elements.getElement(CardElement);
  
      const { token, error } = await stripe.createToken(cardElement);
  
      if (error) {
        setCardError(error.message);
        return;
      }
  
      await processPayment(token);
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  const processPayment = async (token) => {
    try {
      const paymentData = {
        Name: name,
        Email: email,
        Token: token.id
      };

      const response = await axios.post(`charge/${orderId}`, paymentData);

      console.log("Payment Success:", response);
      navigate('/confirmation');

    } catch (error) {
      console.error("Payment processing error:", error);
    }
  };

  useEffect(() => {
    const card = elements.getElement(CardElement);
  
    if (card) {
      const handleChange = (event) => {
        handleCardChange(event);
      };
  
      card.addEventListener('change', handleChange);
  
      return () => {
        card.removeEventListener('change', handleChange);
      };
    }
  }, [elements]);

  return (
<Elements stripe={stripe}>
  <section className="container mt-4">
    <div className="row">
      <aside className="col-lg-6">
        <div className="card shadow-sm p-4">
          <h3 className="h5 mb-3">Payment</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="credit-card" className="form-label">Credit Card</label>
              <CardElement className="form-control" options={{ hidePostalCode: true }} />
              <div role="alert" className="text-danger">{cardError}</div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={!stripe} id="submit-button">Buy now</button>
          </form>
        </div>
      </aside>
    </div>
  </section>
</Elements>
  );
};

export default CheckoutScreen;