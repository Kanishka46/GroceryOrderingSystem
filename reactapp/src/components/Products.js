// import React, { useState, useEffect } from 'react';
// import { getAllProducts } from '../utils/api';
// import ProductsPagination from './ProductsPagination';
// import SafeLink from './SafeLink';
// import { FaBoxOpen, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchProducts = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const data = await getAllProducts();
//       setProducts(Array.isArray(data) ? data : []);
//     } catch (err) {
//       setError(err.message || 'Failed to fetch products');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const renderProductCard = (product) => {
//     const id = product.id ?? '';
//     const name = product.name ?? 'Product';
//     const category = product.category ?? 'Unknown';
//     const price = typeof product.price === 'number' ? product.price.toFixed(2) : '0.00';
//     const stock = product.stockQuantity ?? 0;
//     const imageUrl = product.imageUrl ?? 'https://via.placeholder.com/200x180?text=No+Image';

//     return (
//       <div className="col-md-6 col-lg-4" key={id}>
//         <SafeLink to={`/products/${id}`} className="text-decoration-none">
//           <div className="card h-100 shadow-sm border-0 rounded-4">
//             <img
//               src={imageUrl}
//               alt={name}
//               className="card-img-top rounded-top-4"
//               style={{ height: '180px', objectFit: 'cover' }}
//               onError={(e) =>
//                 (e.target.src = 'https://via.placeholder.com/200x180?text=No+Image')
//               }
//             />
          
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold text-dark">{name}</h5>
//               <p className="card-text text-muted mb-1">Category: {category}</p>
//               <p className="fw-bold text-success mb-3">₹{price}</p>
//               {stock > 0 ? (
//                 <span className="badge bg-success" data-testid={`in-stock-${id}`}>
//                   <FaCheckCircle className="me-1" /> In Stock
//                 </span>
//               ) : (
//                 <span className="badge bg-danger" data-testid={`out-of-stock-${id}`}>
//                   <FaTimesCircle className="me-1" /> Out of Stock
//                 </span>
//               )}
//             </div>
//           </div>
//         </SafeLink>
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="text-center mt-4">
//         <div className="spinner-border text-primary" role="status"></div>
//         <p>Loading products...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="alert alert-danger text-center">[Error - You need to specify the message]</div>;
//   }

//   if (products.length === 0) {
//     return (
//       <div className="text-center text-muted p-4 bg-light rounded shadow-sm">
//         <FaBoxOpen size={40} className="mb-2 text-secondary" />
//         <p className="mb-0">No products found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4 text-center text-primary fw-bold">🛍 Products</h2>
//       <ProductsPagination
//         products={products}
//         productsPerPage={10} // Show 10 products per page
//         renderProduct={renderProductCard}
//       />
//     </div>
//   );
// };

// export default Products;
