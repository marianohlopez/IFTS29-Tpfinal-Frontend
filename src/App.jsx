import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import MyNavbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx'; 
import Footer from './components/footer/Footer.jsx';
import About from './components/aboutUS/AboutUS.jsx';
import ProductsPage from "./components/products/ProductsPage";
import ContactPage from "./components/contact/ContactPage";
import NotFoundPage from "./components/notfound/NotFoundPage";
import ProductDetail from "./components/products/ProductDetail";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ifts-29-tpfinal-backend.vercel.app/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error al traer productos:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Router>
      <div>
        <MyNavbar />       
        <Routes>
          <Route path="/" element={<Home />} />           
          <Route path="/quienes-somos" element={<About />} />   
          <Route path="/productos" element={<ProductsPage products={products} loading={loading} />} />  
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/productos/:id" element={<ProductDetail products={products} />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>     
        <Footer />
      </div>
    </Router>
  );
}
export default App;
