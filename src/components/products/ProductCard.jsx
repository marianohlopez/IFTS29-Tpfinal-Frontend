import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => (
    <Link to={`/productos/${product.id}`} className="product-card-link">
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong className="product-price">
            ${product.price.toLocaleString()}
            </strong>
        </div>
    </Link>
);

export default ProductCard;