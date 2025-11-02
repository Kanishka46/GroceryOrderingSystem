import React from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import AddProduct from './AddProduct';

const Navbar = () => {
    const navigate=useNavigate();
    
const handleLogout = () => {
    // Clear token/session if stored
    localStorage.removeItem('authToken'); // or sessionStorage.clear() if using session storage

    // Redirect to login page
    navigate('/');
  };


    return (

        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#000' }}>

            <div className="container">

                <Link className="navbar-brand fw-bold text-uppercase" to="/home" style={{ letterSpacing: '1px' }}>

                    Grocery 
                    </Link>
                    
                    
                    <button
                    className="navbar-toggler"

                    type="button"

                    data-bs-toggle="collapse"

                    data-bs-target="#navbarNav"

                    aria-controls="navbarNav"

                    aria-expanded="false"

                    aria-label="Toggle navigation"

                    >

                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">

                                    <NavLink className="nav-link" to="/products" style={{ color: 'white' }}>

                                        Products
                                        </NavLink>
                                        </li>
                                        <li className="nav-item">

                                            <NavLink className="nav-link" to="/cart" style={{ color: 'white' }}>

                                                Cart
                                                </NavLink>
                                                </li>

                                                <li className="nav-item">

                                                    <NavLink className="nav-link" to="/orders" style={{ color: 'white' }}>

                                                        Orders

                                                        </NavLink>

                                                        </li>

                                                        <li className="nav-item">

                                                            <NavLink className="nav-link" to="/profile" style={{ color: 'white' }}>

                                                                Profile

                                                                </NavLink>

                                                                </li>
                                                                {/* ✅ Added Admin link */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/vendor" style={{ color: 'white' }}>
                Vendor
              </NavLink>
            </li> */}
            
            {/* ✅ Vendor dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="vendorDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' }}
              >
                Vendor
              </a>
              <ul className="dropdown-menu" aria-labelledby="vendorDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/vendor">
                    Vendor Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/admin">
                    Admin Dashboard
                  </NavLink>
                </li>
              </ul>
            </li>
            
 {/* ✅ Logout button */}
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-danger ms-2"
                style={{ fontWeight: '600' }}
              >
                Logout
              </button>
            </li>
                                                                </ul>

                                                                </div>

                                                                </div>
                                                                </nav>

    );

};

export default Navbar;
   
