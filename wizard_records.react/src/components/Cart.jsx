import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './utils/config';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const fetchDataForCart = (user) => {

  if (user) {
    return axios.get(`${API_BASE_URL}/cart/user/${user}`)
      .then((response) => {
        if (response.status === 200) {
          const cart = response.data;      

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
              quantity: item.quantity 
            }))
          };

        
          return transformedCart; 
        } else {
          throw Error(`Failed to fetch cart with status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error(error);
        throw error; 
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
          if (item.id === album) {
            item.quantity = item.quantity + 1;
          }
          return item;
        }).filter((item) => item.quantity !== 0);
        updatedCart.albums = updatedAlbums.filter((item) => item !== null);
        setCart(updatedCart);
        setTotalPanier(calculateTotal(updatedCart.albums));
      }
  }
  catch(error){
  
  }


}


const deleteAlbum = async (albumId, cart, setCart, setTotalPanier) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/cart/delete/${cart.cartId}/${albumId}`);
    if (response.status === 200) {
      console.log('Album deleted successfully');

      const updatedCart = { ...cart };
      updatedCart.albums = updatedCart.albums.map((item) => {
        if (item.id === albumId) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });

      updatedCart.albums = updatedCart.albums.filter((item) => item.quantity !== 0);

      setCart(updatedCart);
      setTotalPanier(calculateTotal(updatedCart.albums));
    } else {
      console.error('Failed to delete album with status:', response.status);
    }
  } catch (error) {
    console.error('Error deleting album:', error.message);
  }
};



function CartPage() {
  const [user, GetUser] = useState();
  const [cart, setCart] = useState([]);
  const [totalPanier, setTotalPanier] = useState(0);



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
    if(user){
      fetchDataForCart(user)
      .then((data) => {
        setCart(data);
        setTotalPanier(calculateTotal(data.albums));
      })
      .catch((error) => {
        console.error("Failed to fetch cart data:", error);
      });
    }
    
  }, [user]);


if(cart.albums === undefined){

  return (
    <div>
      <h2>Your cart</h2>
      <Link to="/previous_orders">
        <button className="previous-orders-button">Previous Orders</button>
      </Link>
      <h3>Your cart is empty</h3>
    </div>
  );
}
else{


  return (
  <div className="cart-container">
    <h2 className="cart-heading">Your cart</h2>
    <Link to="/previous_orders">
      <button className="previous-orders-button">Previous Orders</button>
    </Link>
    {cart.albums ? (
      <ul className="cart-list">
        {cart.albums.map((album) => (
          <li className="cart-item" key={album.id}>
            <div className="cart-item-image">
              <img src={GetImgageSRC(album)} alt={`${cart.album} cover`} />
            </div>
            <div className="cart-item-details">
              <div>Album name: {album.albumTitle}</div>
              <div>Artist: {album.artistName}</div>
              <div>Quantity: {album.quantity}</div>
              <div>Sub-total: {calculateTotalAlbum(album.price, album.quantity)} $</div>
              <div className="flexDiv">
              <button
                className="cart-button"
                onClick={() => AddToCart(album.id, cart, setCart, setTotalPanier)}
              >
                Add to cart
              </button>
              <button
                className="cart-button"
                onClick={() => deleteAlbum(album.id, cart, setCart, setTotalPanier)}
              >
                Remove from cart
              </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div>
        <h3 className="cart-message">Your cart is empty</h3>
      </div>
    )}
    <div className="flexDiv">
      <h3 className="cart-total">Cart total : {totalPanier} $</h3>
      <button className="checkout-button">Go to checkout</button>
    </div>
  </div>
);
 
}

}

export default CartPage;