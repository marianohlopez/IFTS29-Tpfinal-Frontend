import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import MyNavbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx'; 
import Footer from './components/footer/Footer.jsx';
import About from './components/aboutUS/AboutUs.jsx';
import ProductsPage from "./components/products/ProductsPage.jsx";
import ContactPage from "./components/contact/ContactPage.jsx";
import NotFoundPage from "./components/notfound/NotFoundPage.jsx";
import ProductDetail from "./components/products/ProductDetail.jsx";
import Login from "./components/login/Login.jsx";
import Cart from "./components/cart/Cart.jsx";
import UpdateStock from "./components/admin/UpdateStock.jsx";
import AddProduct from './components/admin/AddProduct.jsx';

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("")
  const emptyCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (_id, newQuantity) => {
    const quantity = parseInt(newQuantity);

    if (isNaN(quantity) || quantity < 1) {
      removeCartItem(_id);
      return;
    }

    setCartItems(prevItems => {
        return prevItems.map(item => 
            item._id === _id
                ? { ...item, quantity: quantity }
                : item
        );
    });
  };

  const addToCart = (productToAdd) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item._id === productToAdd._id);

        if (existingItem) {
            return prevItems.map(item => 
                item._id === productToAdd._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            return [...prevItems, { ...productToAdd, quantity: 1 }];
        }
    });
  };

  useEffect(() => {
    axios
      .get("https://ifts29-tpfinal-backend.onrender.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error al traer productos:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Router>
      <div>
        <MyNavbar setSearchTerm={setSearchTerm} />       
        <Routes>
          <Route path="/" element={<Home />} />           
          <Route path="/quienes-somos" element={<About />} />   
          <Route path="/productos" element={<ProductsPage 
            products={products} 
            loading={loading} 
            searchTerm={searchTerm} />} />  
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/productos/:id" element={<ProductDetail products={products} />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/admin/stock" element={<UpdateStock />} />
          <Route path="/admin/add" element={<AddProduct />} />
        </Routes>     
        <Footer />
      </div>
    </Router>
  );
}
export default App;
