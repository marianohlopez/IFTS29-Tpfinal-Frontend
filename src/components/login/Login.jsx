import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Intentando iniciar sesión...');
  };

  return (
    <Container className="login-container d-flex align-items-center justify-content-center min-vh-100">
      
      <Card className="login-card p-4 shadow-sm">
        <Card.Body>
          <h1 className="login-title text-center mb-4">INICIAR SESIÓN</h1>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formBasicUsername">
              <Form.Control 
                type="text" 
                placeholder="USUARIO..." 
                className="login-input"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control 
                type="password" 
                placeholder="CONTRASEÑA..." 
                className="login-input"
                required
              />
            </Form.Group>

            <Button 
              variant="light" 
              type="submit" 
              className="w-100 btn-login-submit py-2 mt-3"
            >
              INICIAR SESIÓN
            </Button>
            
            <div className="mt-3 text-center">
              <a href="#forgot" className="login-link">¿Olvidaste tu contraseña?</a>
            </div>
          </Form>

        </Card.Body>
      </Card>
      
    </Container>
  );
};

export default Login;