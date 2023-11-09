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
            albums: cart.cartItems.map((item) => ({
              id: item.album.albumId,
              cover: item.album.imageFilePath === "" ? "default.webp" : item.album.imageFilePath,
              media: item.album.media === 0 ? "VinylBase.png" : "CDBase.png",
              artistName: item.album.artistName,
              albumTitle: item.album.title,
              isUsed: item.album.isUsed,
              price: item.album.price.toFixed(2),
              quantity: item.quantity // Assurez-vous que c'est bien la quantité de l'album
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

function calculateTotalAlbum(album, quantity) {

  let total = 0;
  total = album* quantity;
  return total.toFixed(2);



}


function GetImgageSRC(cart) {

  const coverImg = require(`../assets/images/covers/${cart.cover}`);
  return coverImg;

}

const AddToCart = async (album, cart, setCart, setTotalPanier) => {

  try{
      const reponse = await axios.post(`${API_BASE_URL}/cart/add/${cart.cartId}/${album}`);
      if(reponse.status === 200)
      {
        console.log('Album added successfully');

        const updatedCart = { ...cart };
        const updatedAlbums = updatedCart.albums.map((item) => {
          if(item.id === album){
            item.quantity = item.quantity + 1;
          }
          else 
          {
            return null;
          }
        return item;
        });
        updatedCart.albums = updatedAlbums.filter((item) => item !== null);
        setCart(updatedCart);
        setTotalPanier(calculateTotal(updatedCart.albums));
      }
  }
  catch(error){
  
  }


}



const deleteAlbum = async (album, cart, setCart, setTotalPanier) => {

try {
  const response = await axios.delete(`${API_BASE_URL}/cart/delete/${cart.cartId}/${album}`);
  if (response.status === 200) {
    console.log('Album deleted successfully');

    const updatedCart = { ...cart };
    const updatedAlbums = updatedCart.albums.map((item) => {
      if(item.id === album){
        item.quantity = item.quantity - 1;
      }
      else 
      {
        return null;
      }
    return item;
    });
    
    updatedCart.albums = updatedAlbums.filter((item) => item !== null);
    updatedCart.albums = updatedCart.albums.filter((item) => item.quantity !== 0);
        // updatedCart.albums = updatedCart.albums.filter((item) => item.id !== album);
  
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
          <div>Artiste: {album.artistName}</div>
          <div>Sous-total: {calculateTotalAlbum(album.price, album.quantity)} $</div>
          <button onClick={() => deleteAlbum(album.id, cart, setCart, setTotalPanier)}>Retirer du panier</button>
          <div>Quantité: {album.quantity}</div>
          <bouton onClick={() => AddToCart(album.id, cart, setCart, setTotalPanier)}>Ajouter au panier</bouton>
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
