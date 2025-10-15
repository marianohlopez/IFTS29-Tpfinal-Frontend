import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ProductCard from "./ProductCard";
import products from "./productsData";

const ProductsPage = () => (
  <>
    <main style={{ padding: "2rem" }}>
      <h2>Nuestros Productos</h2>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  </>
);

export default ProductsPage;