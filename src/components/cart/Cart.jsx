import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext'; 
import { Link } from 'react-router-dom'; 
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Container className="cart-page-container my-5 text-center">
        <h1 className="cart-page-title mb-4">Tu Carrito está vacío</h1>
        <Button as={Link} to="/productos" variant="light" className="btn-secondary-action">
          ← Volver a la tienda
        </Button>
      </Container>
    );
  }

  return (
    <Container className="cart-page-container my-5">
      <h1 className="cart-page-title text-center mb-5">Carrito</h1>
      <Row>
        <Col xs={12} md={8} className="cart-items-section pe-md-4">
          <Row className="cart-header py-2 d-none d-md-flex text-muted fw-bold border-bottom">
            <Col md={6}>PRODUCTO</Col>
            <Col md={2} className="text-center">PRECIO</Col>
            <Col md={2} className="text-center">CANTIDAD</Col>
            <Col md={2} className="text-end">SUBTOTAL</Col>
          </Row>

          {cartItems.map(item => (
            <Row key={item._id} className="cart-item-row py-3 align-items-center border-bottom">
              <Col xs={1} className="text-center">
                <i className="bi bi-x-circle item-remove-icon" onClick={() => removeFromCart(item._id)}></i>
              </Col>
              
              <Col xs={11} md={5} className="d-flex align-items-center">
                <img src={item.images[0]} alt={item.name} className="item-image me-3" />
                <span className="item-name">{item.name}</span>
              </Col>
              
              <Col xs={4} md={2} className="text-center cart-data">
                ${item.price.toLocaleString('es-AR')}
              </Col>
              
              <Col xs={4} md={2} className="text-center cart-data">
                <Form.Control 
                  type="number" 
                  value={item.quantity} 
                  min="1"
                  onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                  className="quantity-input mx-auto"
                />
              </Col>
              
              <Col xs={4} md={2} className="text-end cart-data">
                ${(item.price * item.quantity).toLocaleString('es-AR')}
              </Col>
            </Row>
          ))}

          <div className="cart-actions mt-4 d-flex justify-content-start">
            <Button as={Link} to="/productos" variant="light" className="btn-secondary-action me-2">
              ← Seguir comprando
            </Button>
          </div>
        </Col>

        <Col xs={12} md={4} className="cart-totals-section ps-md-4 mt-5 mt-md-0">
           <h3 className="totals-title mb-3">TOTALES DEL CARRITO</h3>
          
          <div className="totals-box p-3">
            <Row className="total-row mb-2">
              <Col xs={6}>Subtotal</Col>
              <Col xs={6} className="text-end">${subtotal.toLocaleString('es-AR')}</Col>
            </Row>
            
            <Row className="total-row mb-3 border-bottom pb-3">
              <Col xs={6}>Envío</Col>
              <Col xs={6} className="text-end">
                {shipping > 0 ? `$${shipping.toLocaleString('es-AR')}` : 
                <a href="#shipping" className="shipping-link">Calcular envío</a>}
              </Col>
            </Row>

            <Row className="total-row total-grand fw-bold mb-4">
              <Col xs={6}>Total</Col>
              <Col xs={6} className="text-end">${total.toLocaleString('es-AR')}</Col>
            </Row>

            <Button className="w-100 btn-primary-action mb-4">
              Iniciar compra
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;