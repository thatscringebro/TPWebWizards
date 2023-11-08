import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './utils/config';


const fetchDataForCart = () => {
  const username = "UserUndefined"; // à modifier lorsque vous aurez la gestion de l'authentification

  if (username) {
    return axios.get(`${API_BASE_URL}/cart/user/${username}`)
      .then((response) => {
        if (response.status === 200) {
          const cart = response.data; // Assurez-vous que c'est un seul panier         

          const transformedCart = {
            user: cart.user,
            cartId: cart.cartId,
            albums: cart.albums.map((album) => ({
              id: album.albumId,
              cover: album.imageFilePath === "" ? "default.webp" : album.imageFilePath,
              media: album.media === 0 ? "VinylBase.png" : "CDBase.png",
              artistName: album.artistName,
              albumTitle: album.title,
              isUsed: album.isUsed,
              price: album.price.toFixed(2),
              quantity: album.quantity // Assurez-vous que c'est bien la quantité de l'album
            }))
          };

        
          return transformedCart; // Retournez directement l'objet du panier transformé
        } else {
          throw Error(`Failed to fetch cart with status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error(error);
        throw error; // Propagez l'erreur pour qu'elle puisse être gérée correctement
      });
  }
};
function calculateTotal(cart) {

  let total = 0;
  cart.map((cart) => (total += cart.price * cart.quantity));
  return total.toFixed(2);


}

function GetImgageSRC(cart) {

  const coverImg = require(`../assets/images/covers/${cart.cover}`);
  return coverImg;

}

const deleteAlbum = async (album, cart, setCart, setTotalPanier) => {

try {
  const response = await axios.delete(`${API_BASE_URL}/cart/delete/${cart.cartId}/${album}`);
  if (response.status === 200) {
    console.log('Album deleted successfully');
    const updatedCart = { ...cart };
      updatedCart.albums = updatedCart.albums.filter((item) => item.id !== album);
      setCart(updatedCart);
      setTotalPanier(calculateTotal(updatedCart.albums));
    
   
  } else {
    console.error('Failed to delete album with status:', response.status);
  }

}
catch (error) {
  console.error('Error deleting album:', error.message);
}

}



function CartPage() {
  const [cart, setCart] = useState([]);
  const [totalPanier, setTotalPanier] = useState(0);

  useEffect(() => {
    fetchDataForCart()
      .then((data) => {
        setCart(data);
        setTotalPanier(calculateTotal(data.albums));
      })
      .catch((error) => {
        console.error("Failed to fetch cart data:", error);
      });
  }, []);


if(cart.albums === undefined){

  return (
  <div>
  <h2>Votre Panier</h2>
  <h3>Votre panier est vide</h3>
  </div>
  );
}
else{


  return (
    <div>
    <h2>Votre Panier</h2>

    <ul>
      {cart.albums.map((album) => ( 
        <li id={album.id} >
           <div className="detail-image">
                <img src={GetImgageSRC(album)} alt={`${cart.album} cover`} />
            </div>
          <div>Nom de l'album: {album.albumTitle}</div>
          <div>Quantité: {album.quantity}</div>
          <div>Sous-total: {album.price} $</div>
          <button onClick={() => deleteAlbum(album.id, cart, setCart, setTotalPanier)}>Retirer du panier</button>
        </li>
      ))}
    </ul>
    <div>
      <h3 >Total du panier : {totalPanier} $</h3>
      <button>Passer à la caisse</button>
    </div>
  </div>
  );
 
}

}

export default CartPage;
