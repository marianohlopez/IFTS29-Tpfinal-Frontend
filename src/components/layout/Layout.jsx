import React from 'react';
import MyNavbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <MyNavbar />
      <main>
        {children} 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;