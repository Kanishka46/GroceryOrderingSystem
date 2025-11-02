
import React, { useState } from "react";
import ManageProducts from "./ManageProducts";
import AddProduct from "./AddProduct"; // ✅ your existing AddProduct page
import { useNavigate } from "react-router-dom";

const VendorPage = () => {
  const [view, setView] = useState("dashboard"); 
  // values: 'dashboard' | 'manage' | 'add'
  const navigate=useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Vendor Dashboard</h2>

      {view === "dashboard" && (
        <div>
          <button
            className="btn btn-success btn-lg me-3"
           // onClick={() => setView("manage")}\
           
          onClick={() => navigate("/vendor/manage-products")}
          
          >
            Manage Products
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/vendor/add-product")}
          >
            Add Product
          </button>
        </div>
      )}

      {view === "manage" && (
        <div className="mt-4">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setView("dashboard")}
          >
            ⬅ Back to Vendor Dashboard
          </button>
          <ManageProducts />
        </div>
      )}

      {view === "add" && (
        <div className="mt-4">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setView("dashboard")}
          >
            ⬅ Back to Vendor Dashboard
          </button>
          <AddProduct />
        </div>
      )}
    </div>
  );
};

export default VendorPage;
