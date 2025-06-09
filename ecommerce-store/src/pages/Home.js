import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';
import './Page.scss';

const Home = () => {
  return (
    <div className="page home">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product">
            <h2>{p.name}</h2>
            <p>${p.price}</p>
            <Link to={`/product/${p.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
