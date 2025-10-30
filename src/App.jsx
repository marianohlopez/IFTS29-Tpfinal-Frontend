// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './components/home/Home.jsx'; 
import About from './components/aboutUS/AboutUS.jsx';
import ProductsPage from "./components/products/ProductsPage";
import ContactPage from "./components/contact/ContactPage";
import NotFoundPage from "./components/notfound/NotFoundPage";
import ProductDetail from "./components/products/ProductDetail";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />           
          <Route path="/quienes-somos" element={<About />} />   
          <Route path="/productos" element={<ProductsPage />} />  
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
