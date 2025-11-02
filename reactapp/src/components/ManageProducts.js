// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch all products
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:8080/api/products"); // ✅ your backend endpoint
//       setProducts(res.data);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch products");
//       setLoading(false);
//     }
//   };

//   // Update stock
//   const handleStockUpdate = async (id, newStock) => {
//     try {
//       await axios.put(
//         `http://localhost:8080/api/products/${id}/stock`,
//         { quantity: newStock } // matches StockUpdateRequest.getQuantity()
//       );
//       alert("Stock updated successfully!");
//       fetchProducts();
//     } catch (err) {
//       alert("Error updating stock: " + (err.response?.data?.message || err.message));
//     }
//   };

//   // Delete product
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     try {
//       await axios.delete(`http://localhost:8080/api/products/${id}`);
//       alert("Product deleted successfully!");
//       fetchProducts();
//     } catch (err) {
//       alert("Error deleting product: " + (err.response?.data?.message || err.message));
//     }
//   };

//   if (loading) return <p className="text-center mt-4">Loading products...</p>;
//   if (error) return <p className="text-danger text-center mt-4">[Error - You need to specify the message]</p>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4 text-center">Manage Products</h2>
//       <table className="table table-bordered table-hover text-center">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Stock</th>
//             <th>Update Stock</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p) => (
//             <tr key={p.id}>
//               <td>{p.name}</td>
//               <td>{p.category}</td>
//               <td>{p.stockQuantity}</td>
             
//               <td>
//                 <StockUpdater product={p} onUpdate={handleStockUpdate} />
//               </td>
//               <td>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(p.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Stock updater inline component
// const StockUpdater = ({ product, onUpdate }) => {
//   const [stock, setStock] = useState(product.stockQuantity);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(product.id, stock);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="d-flex justify-content-center">
//       <input
//         type="number"
//         value={stock}
//         onChange={(e) => setStock(Number(e.target.value))}
//         className="form-control form-control-sm me-2"
//         style={{ width: "80px" }}
//       />
//       <button type="submit" className="btn btn-primary btn-sm">
//         Update
//       </button>
//     </form>
//   );
// };

// export default ManageProducts;


import React, { useEffect, useState } from "react";
import axios from "axios";

// ✅ Your backend base URL
const BASE_URL =
  "https://8080-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Fetch products from backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/api/products`);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products");
      setLoading(false);
    }
  };

  // ✅ Update stock quantity
  const handleStockUpdate = async (id, newStock) => {
    try {
      await axios.put(`${BASE_URL}/api/products/${id}/stock`, {
        quantity: newStock, // backend expects {quantity}
      });
      alert("Stock updated successfully!");
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert(
        "Error updating stock: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      alert("Product deleted successfully!");
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert(
        "Error deleting product: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  // ✅ Loading or error states
  if (loading)
    return <p className="text-center mt-4">Loading products...</p>;

  if (error)
    return (
      <p className="text-danger text-center mt-4">
        [Error - You need to specify the message]
      </p>
    );

  // ✅ Render the product management table
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Manage Products</h2>
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Update Stock</th>
            <th>Delete</th>
          </tr>
        </thead>
       
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.stockQuantity}</td>

              <td>
                <StockUpdater
                  product={p}
                  onUpdate={handleStockUpdate}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ✅ Stock updater inline component
const StockUpdater = ({ product, onUpdate }) => {
  const [stock, setStock] = useState(product.stockQuantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(product.id, stock);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center"
    >
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        className="form-control form-control-sm me-2"
        style={{ width: "80px" }}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Update
      </button>
    </form>
  );
};

export default ManageProducts;
