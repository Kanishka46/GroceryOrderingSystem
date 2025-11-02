import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({ productId, onAddToCart }) => {
 const [product, setProduct] = useState(null);
 const [quantity, setQuantity] = useState(1);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');
 const navigate=useNavigate();

 useEffect(() => {
  const fetchProduct = async () => {
   setLoading(true);
   setError('');
   try {
    const result = await getProductById(productId);
    setProduct(result);
    setQuantity(1);
   } catch (err) {
    setError(err.message || 'Failed to fetch product');
   } finally {
    setLoading(false);
   }
  };
  fetchProduct();
 }, [productId]);

 const handleQuantityChange = (e) => {
  let value = parseInt(e.target.value, 10);
  if (isNaN(value) || value < 1) value = 1;
  if (value > product.stockQuantity) value = product.stockQuantity;
  setQuantity(value);
 };

 const handleAddToCart = () => {
  if (onAddToCart) {
   onAddToCart({ ...product, quantity });
  }
  navigate('/cart');
 };
if (loading) {
  return (
   <div data-testid="detail-loading" className="d-flex flex-column align-items-center mt-5">
    <div className="spinner-border text-primary mb-2" role="status"></div>
    <p className="fw-semibold">Loading product...</p>
   </div>
  );
 }

 if (error) {
  return (
   <div
    className="alert alert-danger text-center mt-4 shadow-sm"
    data-testid="detail-error"
   >
    {error}
   </div>
  );
 }

 if (!product) return null;

 const isOutOfStock = product.stockQuantity === 0;

 return (
  <div className="container mt-5" data-testid="product-detail-container">
   <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
    {product.imageUrl && (
 <img
  src={product.imageUrl}
  alt={product.name}
  className="card-img-top bg-light"
  style={{
   height: '250px',
   objectFit: 'contain',
   padding: '10px'
  }}
 />
)}

    <div className="card-body">
     <h2 className="card-title fw-bold mb-2">{product.name}</h2>
     <p className="text-muted mb-3">{product.description}</p>
     <p className="mb-1"><strong>Category:</strong> {product.category}</p>
     <p className="mb-1"><strong>Price:</strong> ₹{product.price.toFixed(2)}</p>
     <p
      data-testid="detail-stock-status"
      className={`fw-bold ₹{isOutOfStock ? 'text-danger' : 'text-success'}`}
     >
      {isOutOfStock ? 'Out of Stock' : `In Stock: ₹{product.stockQuantity}`}
     </p>
 <div className="d-flex align-items-center gap-3 my-3">
      <label htmlFor="quantity-input" className="fw-semibold">Quantity:</label>
      <input
       id="quantity-input"
       type="number"
       className="form-control w-25"
       data-testid="quantity-input"
       value={quantity}
       onChange={handleQuantityChange}
       disabled={isOutOfStock}
       min="1"
       max={product.stockQuantity}
      />
     </div>

     <button
      className="btn btn-primary w-100 fw-semibold py-2"
      data-testid="add-to-cart-btn"
      disabled={isOutOfStock}
      onClick={handleAddToCart}
     

     >
      🛒 Add to Cart
     </button>
    </div>
   </div>
  </div>
 );
};

ProductDetail.propTypes = {
 productId: PropTypes.number.isRequired,
 onAddToCart: PropTypes.func,
};

export default ProductDetail;

