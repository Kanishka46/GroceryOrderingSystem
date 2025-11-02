// // import React, { useState } from 'react';

// // const ProductsPagination = ({ products, productsPerPage = 10, renderProduct }) => {
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const totalPages = Math.ceil(products.length / productsPerPage);

// //   const indexOfLastProduct = currentPage * productsPerPage;
// //   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
// //   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

// //   const goToPage = (page) => {
// //     if (page < 1) page = 1;
// //     if (page > totalPages) page = totalPages;
// //     setCurrentPage(page);
// //   };

// //   return (
// //     <div>
// //       {/* Render products for current page */}
// //       <div className="row g-4 justify-content-center">
// //         {currentProducts.map(renderProduct)}
// //       </div>

// //       {/* Pagination controls */}
// //       {totalPages > 1 && (
// //         <nav className="mt-4">
// //           <ul className="pagination justify-content-center">
// //             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
// //               <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
// //                 Previous
// //               </button>
// //             </li>

// //             {[...Array(totalPages)].map((_, idx) => (
// //               <li
// //                 key={idx + 1}
// //                 className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}
// //               >
// //                 <button className="page-link" onClick={() => goToPage(idx + 1)}>
// //                   {idx + 1}
// //                 </button>
// //               </li>
// //             ))}

// //             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
// //               <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
// //                 Next
// //               </button>
// //             </li>
// //           </ul>
// //         </nav>
// //       )}
// //     </div>
// //   );
// // };

// // export default ProductsPagination;

// import React, { useState } from 'react';
// import ProductList from './ProductList'; // Use your existing ProductList

// const ProductsPagination = ({ products, productsPerPage = 10 }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   if (!Array.isArray(products)) products = []; // Safety check

//   const totalPages = Math.ceil(products.length / productsPerPage);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   const indexOfLast = currentPage * productsPerPage;
//   const indexOfFirst = indexOfLast - productsPerPage;
//   const currentProducts = products.slice(indexOfFirst, indexOfLast);

//   if (products.length === 0) {
//     return <div className="text-center mt-4">No products available.</div>;
//   }

//   return (
//     <div>
//       {/* Render current page products using your existing ProductList */}
//       <ProductList products={currentProducts} />

//       {/* Pagination Controls */}
//       <nav className="mt-4">
//         <ul className="pagination justify-content-center">
//           <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
//               Previous
//             </button>
//           </li>

//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
//             <li key={num} className={`page-item ${currentPage === num ? 'active' : ''}`}>
//               <button className="page-link" onClick={() => handlePageChange(num)}>
//                 {num}
//               </button>
//             </li>
//           ))}

//           <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//             <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default ProductsPagination;

