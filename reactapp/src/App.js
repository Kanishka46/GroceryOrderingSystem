

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CheckoutForm from './components/CheckoutForm';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import OrderSuccess from './components/OrderSuccess';
import AddProduct from './components/AddProduct';
import ManageProducts from './components/ManageProducts';
import VendorPage from './components/VendorPage';
import AdminPage from './components/AdminPage';
import Products from './components/ProductsPagination';



function App() {
  const location = useLocation();

  // Hide nav and footer on Login and Register pages
  const hideNav = location.pathname === '/' || location.pathname === '/register'

  function ProductDetailWrapper() {
    const { id } = useParams();

    const handleAddToCart = (product) => {
      setCartItems((prevItems) => {
        const existingIndex = prevItems.findIndex((item) => item.id === product.id);
        if (existingIndex >= 0) {
          const updatedItems = [...prevItems];
          updatedItems[existingIndex].quantity += product.quantity;
          return updatedItems;
        }
        return [...prevItems, product];
      });
    };

    return <ProductDetail productId={id} onAddToCart={handleAddToCart} />;
  }

  function CartWrapper({ cartItems, setCartItems }) {
    const navigate = useNavigate();
    return (
      <ShoppingCart
        cartItems={cartItems}
        onRemoveItem={(id) =>
          setCartItems(cartItems.filter((item) => item.id !== id))
        }
        onUpdateQuantity={(id, quantity) =>
          setCartItems(
            cartItems.map((item) =>
              item.id === id ? { ...item, quantity } : item
            )
          )
        }
        onCheckout={() => {
          // ✅ Navigate to /orders (CheckoutForm)
          navigate('/orders');
        }}
      />
    );
  }



  const [cartItems, setCartItems] = useState([]);

  return (
    // ✅ Added wrapper to push footer to bottom
    <div className="d-flex flex-column min-vh-100">
      {!hideNav && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      <main className="container my-5 flex-grow-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-product" element={<AddProduct />} />

          <Route path="/products" element={<ProductList />} />
    



          <Route path="/products/:id" element={<ProductDetailWrapper />} />

          <Route
            path="/cart"
            element={
              <CartWrapper cartItems={cartItems} setCartItems={setCartItems} />
            }
          />

          <Route
            path="/orders"
            element={
              <CheckoutForm
                cartItems={cartItems}
                onOrderPlaced={() => setCartItems([])}
              />
            }
          />

          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          {/* Vendor */}
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/vendor/manage-products" element={<ManageProducts />} />
          <Route path="/vendor/add-product" element={<AddProduct />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminPage />} />
    

        </Routes>
      </main>

      {!hideNav && <Footer />}
    </div>
  );
}

// Wrap App inside Router so useLocation hook works
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

