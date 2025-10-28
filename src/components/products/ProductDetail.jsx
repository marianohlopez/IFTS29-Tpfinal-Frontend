import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useCart } from '../../context/CartContext';

const API_URL = 'https://ifts-29-tpfinal-backend.vercel.app';

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [selectedImg, setSelectedImg] = useState("");
useEffect(() => {
const { addToCart } = useCart();
const fetchProduct = async () => {

if (!id) return;
try {
    const response = await fetch(`${API_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    setProduct(data);
    
    if (data.images && data.images.length > 0) {
      setSelectedImg(data.images[0]);
    }
  } catch (e) {
    setError(e.message);
  } finally {
    setLoading(false);
  }
};

fetchProduct();

}, [id]);

if (loading) return <h2>Cargando producto...</h2>;
if (error) return <h2>Error: {error}</h2>;
if (!product) return <h2>Producto no encontrado</h2>;

  const validImages = (product.images || []).filter(Boolean);

return (
  <div className="product-detail-container">
    <div className="product-detail-gallery">
      {selectedImg ? (
      <img className="product-main-img" src={selectedImg} alt={product.name} />) : (<div className="no-images-msg">No hay imágenes para este producto</div>)}
      <div className="product-thumbnails">
        {validImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} miniatura ${idx + 1}`}
            className={`thumbnail-img${selectedImg === img ? " selected" : ""}`}
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
    <div className="product-detail-info">
      <h2>{product.name}</h2>
      <p className="product-detail-desc">{product.description}</p>
      <div className="product-detail-price">
        ${product.price.toLocaleString()}
      </div>
      <p>Stock disponible: {product.stock}</p>
      <button className="product-detail-btn" onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  </div>
  );
};

export default ProductDetail;