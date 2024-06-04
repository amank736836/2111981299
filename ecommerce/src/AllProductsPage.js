import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function AllProductsPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/categories/all/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            console.log(data);
            setProducts(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    
    return (
    <div>
        <h1>All Products</h1>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <div>
                {products.map(product => (
                <ProductCard key={product.productName} product={product} />
                ))}
            </div>
        )}
    </div>
    );
}

export default AllProductsPage;
