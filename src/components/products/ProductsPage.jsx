import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ProductCard from "./ProductCard";
import './ProductCard.css';

const API_URL = 'https://ifts-29-tpfinal-backend.vercel.app';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Creamos componentes de carga y error?
  if (loading) {
    return (
      <main className="products-container" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Cargando productos...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="products-container" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Error al cargar productos: {error}</h2>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Nuestros Productos</h2>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;