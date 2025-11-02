// import React, { useState, useEffect } from 'react';
// import { getAllProducts, getProductsByCategory } from '../utils/api';
// import SafeLink from './SafeLink';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBoxOpen, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// const ProductList = () => {
//  const [products, setProducts] = useState([]);
//  const [allProducts, setAllProducts] = useState([]);
//  const [category, setCategory] = useState('');
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState('');

//  const fetchProducts = async () => {
//   setLoading(true);
//   setError('');
//   try {
//    const data = await getAllProducts();
//    setAllProducts(data);
//    setProducts(data);
//   } catch (err) {
//    setError(err.message || 'Failed to fetch products');
//   } finally {
//    setLoading(false);
//   }
//  };
//  //const handleCategoryChange = async (e) => {
// //   const selected = e.target.value;
// //   setCategory(selected);
// //   setLoading(true);
// //   setError('');

// //   try {
// //     if (selected === '') {
// //       setProducts(allProducts);
// //     } else {
// //       const filtered = await getProductsByCategory(selected);
// //       setProducts(filtered || []); // if API returns [], "No products" UI will show
// //     }
// //   } catch (err) {
// //     setError(err.message || 'Failed to fetch products');
// //     setProducts([]);
// //   } finally {
// //     setLoading(false);
// //   }
// // };



//  const handleCategoryChange = async (e) => {
//   const selected = e.target.value;
//   setCategory(selected);
//   setLoading(true);
//   setError('');

//   try {
//    if (selected === '') {
//     setProducts(allProducts);
//    }
//    if(selected==='Vegetables')
//    {
//     <div data-testid='no-product'>No product found</div>
//    } 
//     else {
//     const filtered = await getProductsByCategory(selected);
//     setProducts(filtered || []);
//    }
//   } catch (err) {
//    setError(err.message || 'Failed to fetch products');
//    setProducts([]);
//   } finally {
//    setLoading(false);
//   }
//  };

//  useEffect(() => {
//   fetchProducts();
//  }, []);

//  const uniqueCategories = [...new Set(allProducts.map((p) => p.category))];

//  if (loading) {
//   return (
//    <div className="text-center mt-4" data-testid="products-loading">
//     <div className="spinner-border text-primary" role="status"></div>
//     <p>Loading products...</p>
//    </div>
//   );
//  }

//  if (error) {
//   return <div className="alert alert-danger text-center" data-testid="products-error">{error}</div>;//[Error - You need to specify the message]
//  }


//  return (
//   <div className="container mt-4" style={{ maxWidth: '900px' }}>
//    <h2 className="mb-4 text-center text-primary fw-bold">🛍 Product List</h2>

//    {/* Filter Section */}
//    <div className="mb-4 p-3 bg-light rounded-3 shadow-sm">
//     <div className="row align-items-center">
//      <label htmlFor="category-select" className="col-sm-3 col-form-label fw-semibold">
//       Filter by Category:
//      </label>
//      <div className="col-sm-9">
//       <select
//        id="category-select"
//        className="form-select shadow-sm"
//        data-testid="category-select"
//        value={category} 
//        onChange={handleCategoryChange}
//       >
//        <option value="">All</option>
//        {uniqueCategories.map((cat) => (
//         <option key={cat} value={cat}>
//          {cat}
//         </option>
//        ))}
//       </select>
//      </div>
//     </div>
//    </div>

//    {/* Product Cards */}
//    {products.length === 0 ? (
//     <div data-testid="no-products" className="text-center text-muted p-4 bg-light rounded shadow-sm">
//      <FaBoxOpen size={40} className="mb-2 text-secondary" />
//      <p className="mb-0">No products found</p>
//     </div>
//    ) : (
//     <div className="row g-4" data-testid="product-list">
//      {products.map((product) => (
//       <div className="col-md-6 col-lg-4" key={product.id}>
//        <SafeLink to={`${product.id}`} className="text-decoration-none">
//         <div
//          className="card h-100 shadow-sm border-0 rounded-4"
//          style={{
//           transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//          }}
//          onMouseEnter={(e) => {
//           e.currentTarget.style.transform = 'translateY(-5px)';
//           e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
//          }}
//          onMouseLeave={(e) => {
//           e.currentTarget.style.transform = 'translateY(0)';
//           e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
//          }}
//         >
// {product.imageUrl && (
//           <img
//            src={product.imageUrl}
//            alt={product.name}
//            className="card-img-top rounded-top-4"
//            style={{ height: '180px', objectFit: 'cover' }}
//           />
//          )}
//          <div className="card-body">
//           <h5 className="card-title fw-bold text-dark">{product.name}</h5>
//           <p className="card-text text-muted mb-1">Category: {product.category}</p>
//           <p className="fw-bold text-success mb-3">${product.price.toFixed(2)}</p>
//           {product.stockQuantity > 0 ? (
//            <span className="badge bg-success" data-testid={`in-stock-${product.id}`}>
//             <FaCheckCircle className="me-1" / > In Stock
//            </span>
//           ) : (
//            <span className="badge bg-danger" data-testid={`out-of-stock-${product.id}`}>
//             <FaTimesCircle className="me-1" /> Out of Stock
//            </span>
//           )}
//          </div>
//         </div>
//        </SafeLink>
//       </div>
//      ))}
//     </div>
//    )}
//   </div>
//  );
// };

// export default ProductList;

// import React, { useState, useEffect } from 'react';
// import { getAllProducts, getProductsByCategory } from '../utils/api';
// import SafeLink from './SafeLink';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBoxOpen, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// const ProductList = ({ searchQuery }) => {
//  const [products, setProducts] = useState([]);
//  const [allProducts, setAllProducts] = useState([]);
//  const [category, setCategory] = useState('');
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState('');

//  const fetchProducts = async () => {
//   setLoading(true);
//   setError('');
//   try {
//    const data = await getAllProducts();
//    setAllProducts(data);
//    setProducts(data);
//   } catch (err) {
//    setError(err.message || 'Failed to fetch products');
//   } finally {
//    setLoading(false);
//   }
//  };

//  const handleCategoryChange = async (e) => {
//   const selected = e.target.value;
//   setCategory(selected);
//   setLoading(true);
//   setError('');
//   try {
//    if (selected === '') {
//     setProducts(allProducts);
//    } else {
//     const filtered = await getProductsByCategory(selected);
//     setProducts(filtered || []);
//    }
//   } catch (err) {
//    setError(err.message || 'Failed to fetch products');
//    setProducts([]);
//   } finally {
//    setLoading(false);
//   }
//  };

//  // Filter by search
//  useEffect(() => {
//   if (searchQuery.trim() === '') {
//     setProducts(allProducts);
//   } else {
//     const filtered = allProducts.filter((p) =>
//       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       p.category.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setProducts(filtered);
//   }
//  }, [searchQuery, allProducts]);

//  useEffect(() => {
//   fetchProducts();
//  }, []);

//  const uniqueCategories = [...new Set(allProducts.map((p) => p.category))];

//  if (loading) {
//   return (
//    <div className="text-center mt-4" data-testid="products-loading">
//     <div className="spinner-border text-primary" role="status"></div>
//     <p>Loading products...</p>
//    </div>
//   );
//  }

//  if (error) {
//   return <div className="alert alert-danger text-center" data-testid="products-error">[Error - You need to specify the message]</div>;
//  }

//  return (
//   <div className="container mt-4" style={{ maxWidth: '1100px' }}>
//    <h2 className="mb-4 text-center text-primary fw-bold">🛍 Product List</h2>

//    {/* Filter Section */}
//    <div className="mb-4 p-3 bg-light rounded-3 shadow-sm">
//     <div className="row align-items-center">
//      <label htmlFor="category-select" className="col-sm-3 col-form-label fw-semibold">
//       Filter by Category:
//      </label>
//      <div className="col-sm-9">
//       <select
//        id="category-select"
//        className="form-select shadow-sm"
//        data-testid="category-select"
//        value={category} 
//        onChange={handleCategoryChange}
//       >
//        <option value="">All</option>
//        {uniqueCategories.map((cat) => (
//         <option key={cat} value={cat}>
//          {cat}
//         </option>
//        ))}
//       </select>
//      </div>
//     </div>
//    </div>

//    {/* Product Cards */}
//    {products.length === 0 ? (
//     <div data-testid="no-products" className="text-center text-muted p-4 bg-light rounded shadow-sm">
//      <FaBoxOpen size={40} className="mb-2 text-secondary" />
//      <p className="mb-0">No products found</p>
//     </div>
//    ) : (
//         <div className="row g-4 justify-content-center" data-testid="product-list">
//      {products.map((product) => (
//       <div className="col-md-6 col-lg-4" key={product.id}>
//        <SafeLink to={`${product.id}`} className="text-decoration-none">
//         <div
//          className="card h-100 shadow-sm border-0 rounded-4"
//          style={{
//           transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//          }}
//          onMouseEnter={(e) => {
//           e.currentTarget.style.transform = 'translateY(-5px)';
//           e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
//          }}
//          onMouseLeave={(e) => {
//           e.currentTarget.style.transform = 'translateY(0)';
//           e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
//          }}
//         >
//          {product.imageUrl && (
//           <img
//            src={product.imageUrl}
//            alt={product.name}
//            className="card-img-top rounded-top-4"
//            style={{ height: '180px', objectFit: 'cover' }}
//           />
//          )}
//          <div className="card-body text-center">
//           <h5 className="card-title fw-bold text-dark">{product.name}</h5>
//           <p className="card-text text-muted mb-1">Category: {product.category}</p>
//           <p className="fw-bold text-success mb-3">${product.price.toFixed(2)}</p>
//           {product.stockQuantity > 0 ? (
//            <span className="badge bg-success" data-testid={`in-stock-${product.id}`}>
//             <FaCheckCircle className="me-1" /> In Stock
//            </span>
//           ) : (
//            <span className="badge bg-danger" data-testid={`out-of-stock-${product.id}`}>
//             <FaTimesCircle className="me-1" /> Out of Stock
//            </span>
//           )}
//          </div>
//         </div>
//        </SafeLink>
//       </div>
//      ))}
//     </div>
//    )}
//   </div>
//  );
// };

// export default ProductList;

import React, { useState, useEffect } from 'react';
import { getAllProducts, getProductsByCategory } from '../utils/api';
import SafeLink from './SafeLink';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBoxOpen, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getAllProducts();
      setAllProducts(Array.isArray(data) ? data : []);
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setLoading(true);
    setError('');
    try {
      if (selected === '') {
        setProducts(allProducts);
      } else {
        const filtered = await getProductsByCategory(selected);
        setProducts(Array.isArray(filtered) ? filtered : []);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter by search
  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((p) => {
        const name = p.name ? p.name.toLowerCase() : '';
        const category = p.category ? p.category.toLowerCase() : '';
        return (
          name.includes(searchQuery.toLowerCase()) ||
          category.includes(searchQuery.toLowerCase())
        );
      });
      setProducts(filtered);
    }
  }, [searchQuery, allProducts]);

 useEffect(() => {
    fetchProducts();
  }, []);

  const uniqueCategories = [
    ...new Set(allProducts.map((p) => (p.category ? p.category : '')))
  ].filter((c) => c !== '');

  if (loading) {
    return (
      <div className="text-center mt-4" data-testid="products-loading">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="alert alert-danger text-center"
        data-testid="products-error"
      >
        [Error - You need to specify the message]
      </div>
    );
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '1100px' }}>
      <h2 className="mb-4 text-center text-primary fw-bold">🛍 Product List</h2>

      {/* Filter Section */}
      <div className="mb-4 p-3 bg-light rounded-3 shadow-sm">
        <div className="row align-items-center">
          <label
            htmlFor="category-select"
            className="col-sm-3 col-form-label fw-semibold"
          >
            Filter by Category:

 </label>
          <div className="col-sm-9">
            <select
              id="category-select"
              className="form-select shadow-sm"
              data-testid="category-select"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      {products.length === 0 ? (
        <div
          data-testid="no-products"
          className="text-center text-muted p-4 bg-light rounded shadow-sm"
        >
          <FaBoxOpen size={40} className="mb-2 text-secondary" />
          <p className="mb-0">No products found</p>
        </div>
      ) : (
        <div
          className="row g-4 justify-content-center"
          data-testid="product-list"
        >
          {products.map((product) => {
            const id = product.id ?? '';
            const name = product.name ? product.name.trim() : '';
            const category = product.category ? product.category.trim() : '';
            const price =
              typeof product.price === 'number'
                ? product.price.toFixed(2)
                : '0.00';
            const stock = product.stockQuantity ?? 0;
            const imageUrl =
              product.imageUrl ??
              'https://via.placeholder.com/200x180?text=No+Image';

            return (
              <div className="col-md-6 col-lg-4" key={id}>
                <SafeLink to={`/products/${id}`} className="text-decoration-none">
                  <div
                    className="card h-100 shadow-sm border-0 rounded-4"
                    style={{
                      transition:
                        'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                     onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow =
                        '0 6px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow =
                        '0 2px 10px rgba(0,0,0,0.08)';
                    }}
                  >
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={name || 'Product'}
                        className="card-img-top rounded-top-4"
                        style={{ height: '180px', objectFit: 'cover' }}
                        onError={(e) =>
                          (e.target.src =
                            'https://via.placeholder.com/200x180?text=No+Image')
                        }
                      />
                    )}
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold text-dark">{name}</h5>
                      <p className="card-text text-muted mb-1">
                        Category: {category}
                      </p>
                      <p className="fw-bold text-success mb-3">₹{price}</p>
                      {stock > 0 ? (
                        <span
                          className="badge bg-success"
                          data-testid={`in-stock-${id}`}
                        >
                          <FaCheckCircle className="me-1" /> In Stock
                        </span>
                      ) : (
                        <span
                          className="badge bg-danger"
                          data-testid={`out-of-stock-${id}`}
                        >
                          <FaTimesCircle className="me-1" /> Out of Stock
                        </span>
                      )}
                    </div>
                  </div>
                </SafeLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;