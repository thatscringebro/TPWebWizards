import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './utils/config';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const OrderState = {
  0: 'Confirmed',
  1: 'Canceled',
  2: 'In Preparation',
  3: 'In Delivery',
  4: 'Delivered',
  5: 'Returned'
};

const fetchPreviousOrders = (userId) => {
  return axios.get(`${API_BASE_URL}/order/orders/user/${userId}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw Error(`Failed to fetch previous orders with status: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

function PreviousOrdersPage() {
  const [user, setUser] = useState();
  const [previousOrders, setPreviousOrders] = useState([]);

  // Get token and decode user ID
  useEffect(() => {
    const token = sessionStorage.getItem('userToken');
    const tokenGuest = sessionStorage.getItem('guestToken');
    
    if (token) {
      const decodedToken = jwt_decode(token);
      setUser(decodedToken["id"]);
    } else if (tokenGuest) {
      const decodedTokenGuest = jwt_decode(tokenGuest);
      setUser(decodedTokenGuest["id"]);
    } else {
      setUser("Undefined");
    }
  }, []);

  // Fetch previous orders for the user
  useEffect(() => {
    if (user) {
      fetchPreviousOrders(user)
        .then((data) => {
          setPreviousOrders(data);
        })
        .catch((error) => {
          console.error("Failed to fetch previous orders:", error);
        });
    }
  }, [user]);

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/order/orders/cancel/${orderId}`);
      if (response.status === 200) {
        // Refresh the list of orders after cancellation
        fetchPreviousOrders(user)
          .then((data) => {
            setPreviousOrders(data);
          })
          .catch((error) => {
            console.error("Failed to fetch previous orders:", error);
          });
        console.log('Order canceled successfully');
      } else {
        console.error('Failed to cancel order with status:', response.status);
      }
    } catch (error) {
      console.error('Error canceling order:', error.message);
    }
  };

  return (
    <div>
      <h2>Previous Orders</h2>
      {previousOrders.length > 0 ? (
        <ul>
          {previousOrders.map((order) => (
            <li key={order.orderId}>
              <div>
                <strong>Order Number:</strong> {order.orderId}
              </div>
              <div>
                <strong>Status:</strong> {OrderState[order.state]}
              </div>
              <div>
                <strong>Cart Items:</strong>
                <ul>
                  {order.cartItems.map((cartItem) => (
                    <li key={cartItem.album.albumId}>
                      {cartItem.album.title} - Quantity: {cartItem.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              {(order.state === 0 || order.state === 2) && (
                <button onClick={() => cancelOrder(order.orderId)}>
                  Cancel Order
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <h3>No previous orders found</h3>
      )}
      <Link to="/cart">
        <button className="back-to-cart-button">Back to Cart</button>
      </Link>
    </div>
  );
}

export default PreviousOrdersPage;

