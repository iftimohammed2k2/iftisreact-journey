import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.scss';

const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </header>
  );
};

export default Header;
