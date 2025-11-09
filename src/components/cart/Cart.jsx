import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'; 
import './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const EMAILJS_SERVICE_ID = 'service_xhegdmm'; 
const EMAILJS_TEMPLATE_ID = 'template_4xdymqc'; 
const EMAILJS_PUBLIC_KEY = 'SActIF6YHXjKQTXrT'; 

  const subtotal = product.price * product.quantity;
  const shipping = 0; 
  const total = subtotal + shipping;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value) || 0;
    setProduct({ ...product, quantity: newQuantity });
  };

  const handleQuantityChange = (event, productId) => {
    const newQuantity = event.target.value;
    updateQuantity(productId, newQuantity);
    
    if (newQuantity < 1) {
       setAlertModal({
        show: true, 
        title: '⚠️ Producto Eliminado', 
        body: 'La cantidad no puede ser menor a 1, el producto ha sido eliminado del carrito.',
        variant: 'warning'
      });
    }
  };
  
  const calculateShipping = () => {
    alert("Función para calcular envío.");
  };

  return (
    <Container className="cart-page-container my-5">
      <h1 className="cart-page-title text-center mb-5">Carrito</h1>

      <Row>
        <Col xs={12} md={8} className="cart-items-section pe-md-4">
          <h2 className="company-name mb-4">MUEBLES DEL VALLE</h2>

          <Row className="cart-header py-2 d-none d-md-flex text-muted fw-bold border-bottom">
            <Col md={6}>PRODUCTO</Col>
            <Col md={2} className="text-center">PRECIO</Col>
            <Col md={2} className="text-center">CANTIDAD</Col>
            <Col md={2} className="text-end">SUBTOTAL</Col>
          </Row>

          <Row className="cart-item-row py-3 align-items-center border-bottom">
            <Col xs={1} className="text-center">
              <i className="bi bi-x-circle item-remove-icon"></i>
            </Col>
            
            <Col xs={11} md={5} className="d-flex align-items-center">
              <img src={product.image} alt={product.name} className="item-image me-3" />
              <span className="item-name">{product.name}</span>
            </Col>
            
            <Col xs={4} md={2} className="text-center cart-data">
              <span className="d-md-none fw-bold">PRECIO: </span>
              ${product.price.toLocaleString('es-AR')}
            </Col>
            
            <Col xs={4} md={2} className="text-center cart-data">
              <span className="d-md-none fw-bold">CANTIDAD: </span>
              <Form.Control 
                type="number" 
                value={product.quantity} 
                min="1"
                onChange={handleQuantityChange}
                className="quantity-input mx-auto"
              />
            </Col>
            
            <Col xs={4} md={2} className="text-end cart-data">
              <span className="d-md-none fw-bold">SUBTOTAL: </span>
              ${subtotal.toLocaleString('es-AR')}
            </Col>
          </Row>

          <div className="cart-actions mt-4 d-flex justify-content-start">
            <Button variant="light" className="btn-secondary-action me-2">
              ← Seguir comprando
            </Button>
            <Button variant="light" onClick={updateCart} className="btn-secondary-action">
              Actualizar carrito
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
                <a href="#shipping" onClick={calculateShipping} className="shipping-link">Calcular envío</a>}
              </Col>
            </Row>

            <Row className="total-row total-grand fw-bold mb-4">
              <Col xs={6}>Total</Col>
              <Col xs={6} className="text-end">${total.toLocaleString('es-AR')}</Col>
            </Row>

            <Button className="w-100 btn-primary-action mb-4">
              Iniciar compra
            </Button>

            <h5 className="coupon-title">Cupón</h5>
            <Form.Group controlId="couponCode" className="d-flex">
              <Form.Control type="text" placeholder="Código de cupón" className="coupon-input me-2" />
              <Button variant="light" className="btn-coupon-apply">
                Aplicar cupón
              </Button>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ej: 1123456789"
                name="phone"
                value={buyerInfo.phone}
                onChange={handleBuyerInfoChange}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit">
                Confirmar Pedido
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={alertModal.show} onHide={handleCloseAlert} centered>
        <Modal.Header closeButton>
          <Modal.Title className={alertModal.variant === 'success' ? 'text-success' : alertModal.variant === 'danger' ? 'text-danger' : alertModal.variant === 'warning' ? 'text-warning' : 'text-info'}>
            {alertModal.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alertModal.body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;