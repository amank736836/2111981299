import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/categories/all/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      const data = await response.json();
      const foundProduct = data.find(item => item.productName === productName);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        throw new Error('Product not found');
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching product details:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Product Details</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <h2>{product.productName}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
