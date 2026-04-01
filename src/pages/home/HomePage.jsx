import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ProductsGrid from './ProductsGrid';
import './HomePage.css';

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    fetchHomeData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/png" href="home-favicon.png" />
      <title>E-Commerce</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
