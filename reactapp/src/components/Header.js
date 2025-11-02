import React from 'react';

const Header = () => {
 return (
  <header 
   className="text-white py-4 shadow-sm" 
   style={{
    background: "linear-gradient(90deg, #2e7332, #1b5e20)",
   }}
  >
   <div className="container text-center">
    <h1 
     className="fw-bold mb-1" 
     style={{
      fontSize: "2.5rem",
      letterSpacing: "1px"
     }}
    >
     🛒 GroShop
    </h1>
    <p 
     className="mb-0" 
     style={{
      fontSize: "1.1rem",
      opacity: 0.9
     }}
    >
     Your On-time Online Grocery Store
    </p>
   </div>
  </header>
 );
};

export default Header;

