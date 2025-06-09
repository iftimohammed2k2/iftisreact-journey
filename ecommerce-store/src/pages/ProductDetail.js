import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import './Page.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  return (
    <div className="page detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
