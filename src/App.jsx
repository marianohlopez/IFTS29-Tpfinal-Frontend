// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx'; 
import Footer from './components/footer/Footer.jsx';
import About from './components/aboutUS/AboutUS.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        
        <Routes>
          <Route path="/" element={<Home />} />           
          <Route path="/quienes-somos" element={<About />} />          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
export default App;
