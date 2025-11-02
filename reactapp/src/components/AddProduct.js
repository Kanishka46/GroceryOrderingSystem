// import React, { useState } from "react";

// import { createProduct } from "../utils/api";

// const AddProduct = () => {

//     const [form, setForm] = useState({

//         name: "",

//         description: "",

//         price: "",

//         stockQuantity: "",

//         category: "",

//         imageUrl: ""

//     });

//     const [message, setMessage] = useState("");

//     const [error, setError] = useState("");

//     const handleChange = (e) => {

//         setForm({

//             ...form,

//             [e.target.name]: e.target.value

//         });

//     };

//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         setMessage("");

//         setError("");

//         try {

//             await createProduct({

//                 ...form,

//                 price: parseFloat(form.price),

//                 stockQuantity: parseInt(form.stockQuantity, 10)

//             });

//             setMessage("✅ Product added successfully!");

//             setForm({

//                 name: "",

//                 description: "",

//                 price: "",

//                 stockQuantity: "",

//                 category: "",

//                 imageUrl: ""

//             });

//         } catch (err) {

//             setError("❌ " + err.message);

//         }

//     };

//     return (

//         <div className="container mt-5" style={{ maxWidth: "600px" }}>

//             <div className="card shadow-lg border-0 rounded-4">

//                 <div className="card-body p-4">

//                     <h3 className="card-title text-center mb-4 text-primary">

//                         🛒 Add New Product
//                         </h3>
//                         {message && <div className="alert alert-success">{message}</div>}

//                         {error && <div className="alert alert-danger">{error}</div>}

//                         <form onSubmit={handleSubmit}>

//                             <div className="mb-3">

//                                 <label className="form-label fw-semibold">Product Name</label>
//                                 <input
//                                 name="name"

//                                 value={form.name}

//                                 onChange={handleChange}

//                                 className="form-control"

//                                 placeholder="Enter product name"

//                                 required
//                                 />

//                                 </div>
//                                 <div className="mb-3">

//                                     <label className="form-label fw-semibold">Description</label>
//                                     <textarea
//                                     name="description"

//                                     value={form.description}

//                                     onChange={handleChange}

//                                     className="form-control"

//                                     placeholder="Enter product description"

//                                     rows="3"

//                                     required
//                                     />

//                                     </div>
//                                     <div className="row">

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label fw-semibold">Price ($)</label>
//                                             <input
//                                             type="number"

//                                             name="price"

//                                             value={form.price}

//                                             onChange={handleChange}

//                                             className="form-control"

//                                             placeholder="Enter price"

//                                             required
//                                             />

//                                             </div>
//                                             <div className="col-md-6 mb-3">

//                                                 <label className="form-label fw-semibold">Stock Quantity</label>
//                                                 <input
//                                                 type="number"

//                                                 name="stockQuantity"

//                                                 value={form.stockQuantity}

//                                                 onChange={handleChange}

//                                                 className="form-control"

//                                                 placeholder="Enter stock"

//                                                 required
//                                                 />

//                                                 </div>

//                                                 </div>
//                                                 <div className="mb-3">

//                                                     <label className="form-label fw-semibold">Category</label>
//                                                     <input
//                                                     name="category"

//                                                     value={form.category}

//                                                     onChange={handleChange}

//                                                     className="form-control"

//                                                     placeholder="E.g., Fruits, Vegetables"

//                                                     />

//                                                     </div>

//                                                     <div className="mb-4">

//                                                         <label className="form-label fw-semibold">Image URL</label>

//                                                         <input

//                                                         name="imageUrl"

//                                                         value={form.imageUrl}

//                                                         onChange={handleChange}

//                                                         className="form-control"

//                                                         placeholder="Paste image URL"

//                                                         />

//                                                         </div>

//                                                         <button

//                                                         type="submit"

//                                                         className="btn btn-success w-100 py-2 fw-semibold shadow-sm"

//                                                         >

//                                                             ➕ Add Product
//                                                             </button>
//                                                             </form>
//                                                             </div>
//                                                             </div>
//                                                             </div>
//     );

// };

// export default AddProduct;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../utils/api"; // Make sure you have this API function

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stockQuantity: "",
    category: "",
    imageUrl: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Call API to create product
      await createProduct({
        ...form,
        price: parseFloat(form.price),
        stockQuantity: parseInt(form.stockQuantity, 10),
      });

      // Navigate to Manage Products page after success
      navigate("/vendor/manage-products", { state: { message: "Product added successfully!" } });

    } catch (err) {
      console.error(err);
      setError("❌ " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          <h3 className="card-title text-center mb-4 text-primary">
            🛒 Add New Product
          </h3>

          {error && <div className="alert alert-danger">[Error - You need to specify the message]</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Product Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter product description"
                rows="3"
                required
              />
            </div>


            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter price"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Stock Quantity</label>
                <input
                  type="number"
                  name="stockQuantity"
                  value={form.stockQuantity}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter stock"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Category</label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="form-control"
                placeholder="E.g., Fruits, Vegetables"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Image URL</label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="form-control"
                placeholder="Paste image URL"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 py-2 fw-semibold shadow-sm"
            >
              ➕ Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;



                                                              