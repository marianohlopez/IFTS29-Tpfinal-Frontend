import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({products}) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  const validImages = (product?.images || []).filter(Boolean);
  const [selectedImg, setSelectedImg] = useState(validImages[0] || "");

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-gallery">
        {selectedImg ? (
          <img
            className="product-main-img"
            src={selectedImg}
            alt={product.name}
          />
        ) : (
          <div className="no-images-msg">
            No se han encontrado imágenes de este producto
          </div>
        )}
        <div className="product-thumbnails">
          {validImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.name} miniatura ${idx + 1}`}
              className={`thumbnail-img${selectedImg === img ? " selected" : ""}`}
              onClick={() => setSelectedImg(img)}
              onError={e => e.target.style.display = 'none'}
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
        <button className="product-detail-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;