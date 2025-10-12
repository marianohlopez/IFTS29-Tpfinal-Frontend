// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx'; 
import Footer from './components/footer/Footer.jsx';
import About from './components/aboutUS/AboutUS.jsx';
import ProductsPage from "./components/products/ProductsPage";
import ContactPage from "./components/contact/ContactPage";
import NotFoundPage from "./components/notfound/NotFoundPage";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        
        <Routes>
          <Route path="/" element={<Home />} />           
          <Route path="/quienes-somos" element={<About />} />   
          <Route path="/productos" element={<ProductsPage />} />  
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
export default App;
