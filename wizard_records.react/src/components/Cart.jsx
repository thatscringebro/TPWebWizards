import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './utils/config';

function CartPage() {
  const [cart, setCart] = useState([]);
  const username = "UserUndefined"; // a modifier quand on aura le login

  useEffect(() => {
    if (username) {
      axios.get(`${API_BASE_URL}/cart/user/${username}`)
        .then((response) => {
          if (response.status === 200) {
            const Carts = response.data;
            const CartPromises = Carts.map((cart) => {
              return {
                user: cart.user,
                cartId: cart.cartId,
                cover: cart.albums.imageFilePath === "" ? "default.webp" : cart.albums.imageFilePath,
                media: cart.albums.media === 0 ? "VinylBase.png" : "CDBase.png",
                artistName: cart.albums.artistName,
                albumTitle: cart.albums.title,
                isUsed: cart.albums.isUsed,
                price: cart.albums.price.toFixed(2),
                quantity: cart.quantity
              };
            });

            return Promise.all(CartPromises);
          } else {
            throw Error(`Failed to fetch albums with status: ${response.status}`);
          }
        })
        .then((transformedCarts) => {
          setCart(transformedCarts);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [username]);

  return (
    <div>
      <h2>Votre Panier</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>Nom de l'album: {item.albumTitle}</div>
            <div>Quantité: {item.quantity}</div>
            <div>Sous-total: {item.price} $</div>
            <button>Retirer du panier</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total du panier : {calculateTotal(cart)} $</h3>
        <button>Passer à la caisse</button>
      </div>
    </div>
  );
}

function calculateTotal(cart) {
  return cart.reduce((acc, item) => acc + item.price, 0);
}

export default CartPage;