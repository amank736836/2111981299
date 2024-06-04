import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from './AllProductsPage.js';
import ProductDetailsPage from './ProductDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/product/:productName" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
