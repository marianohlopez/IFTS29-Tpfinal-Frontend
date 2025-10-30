import Container from 'react-bootstrap/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavbar = ({setSearchTerm}) => {

  const [font, setFont] = useState(false)

  const darkFont = () => font === false? setFont('fontHamburguer') : setFont(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="topBar d-flex align-items-center justify-content-between px-4 py-2">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </div>

        <div className="searchBar d-flex align-items-center">
          <i className="bi bi-search me-2"></i>
          <input type="text" 
            placeholder="Buscar productos..." 
            onChange={handleSearchChange}/>
        </div>

        <div className="cart d-flex align-items-center">
          <span className="me-2">CARRITO</span>
          <i className="bi bi-cart4 fs-2"></i>
        </div>
      </div>
      <Navbar onToggle={darkFont} className='navBar sticky-top' expand="lg">
        <Container className={font}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto btnNavBar d-flex gap-5">
              <Nav.Link className='me-5' href="/">Inicio</Nav.Link>
              <Nav.Link className='me-5' href="/quienes-somos">Quienes somos</Nav.Link>
              <Nav.Link className='me-5' href="/productos">Productos</Nav.Link>
              <Nav.Link className='me-5' href="/contacto">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar