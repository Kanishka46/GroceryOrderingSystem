import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL ='https://8080-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io'; // 🔹 Replace with your actual backend URL

const AdminPage = () => {
  const [view, setView] = useState("dashboard"); // 'dashboard' | 'users' | 'products' | 'orders'
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch data when view changes
  useEffect(() => {
    if (view === "users") fetchUsers();
    if (view === "products") fetchProducts();
    if (view === "orders") fetchOrders();
  }, [view]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/users`);
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/products`);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products");
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/orders`);
      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch orders");
      setLoading(false);
    }
  };

 
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      {view === "dashboard" && (
        <div className="text-center">
          <button
            className="btn btn-primary btn-lg me-3"
            onClick={() => setView("users")}
          >
            All Users
          </button>
          <button
            className="btn btn-success btn-lg me-3"
            onClick={() => setView("products")}
          >
            All Products
          </button>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => setView("orders")}
          >
            All Orders
          </button>
        </div>
      )}

      {view !== "dashboard" && (
        <div className="mb-3">
          <button
            className="btn btn-secondary"
            onClick={() => setView("dashboard")}
          >
            ⬅ Back to Dashboard
          </button>
        </div>
      )}

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">[Error - You need to specify the message]</p>}

      {/* All Users Table */}
      {view === "users" && !loading && (
        <div>
          <h3 className="text-center mb-3">All Users</h3>
          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

   

      {/* All Products Table */}
      {view === "products" && !loading && (
        <div>
          <h3 className="text-center mb-3">All Products</h3>
          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.stockQuantity}</td>
                  <td>${p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* All Orders Table */}
      {view === "orders" && !loading && (
        <div>
          <h3 className="text-center mb-3">All Orders</h3>
          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>User</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.userName || o.userId}</td>
                  <td>${o.totalAmount}</td>
                  <td>{o.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
