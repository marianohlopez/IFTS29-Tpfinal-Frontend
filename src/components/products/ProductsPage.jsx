import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ProductCard from "./ProductCard";
import products from "./productsData";

const ProductsPage = () => (
  <>
    <main style={{ padding: "2rem" }}>
      <h2>Productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  </>
);

export default ProductsPage;