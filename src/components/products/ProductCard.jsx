import React from "react";

const ProductCard = ({ product }) => (
  <div style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "220px",
    padding: "1rem",
    textAlign: "center",
    background: "#fff"
  }}>
    <img
      src={product.image}
      alt={product.name}
      style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
    />
    <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>{product.name}</h3>
    <p style={{ color: "#888", fontSize: "0.95rem" }}>{product.description}</p>
    <strong style={{ display: "block", margin: "0.5rem 0" }}>
      ${product.price.toLocaleString()}
    </strong>
    {/* Aquí va el boton detalle o comprar */}
  </div>
);

export default ProductCard;