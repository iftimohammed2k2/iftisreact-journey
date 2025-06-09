import React from 'react';
import { useCart } from '../context/CartContext';
import './Page.scss';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="page cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
