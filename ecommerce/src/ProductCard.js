import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <h3>{product.productName}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
      <Link to={`/product/${product.productName}`} style={styles.link}>View Details</Link>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  link: {
    display: 'block',
    marginTop: '10px',
    textDecoration: 'none',
    color: '#007bff',
  }
};

export default ProductCard;
