import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from '../../components/Layout';
import '../../styles/Common.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from '../Payment';

// Importe le composant CheckoutForm ici (assure-toi qu'il est correctement défini)

const stripePromise = loadStripe("pk_test_51OCShKEZSxcrg8JwcK6ZA4f6KKCjFJU4MPA5Gx2T6nOcdVFGqPdmcEGYbaJqxiCWXE3d3lTQhV8Ntt7iKV1BySeO00yEcr8YI8");

export default function App() {
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
          <Route
            path="/payment"
            element={
              clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <Payment />
                </Elements>
              )
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}