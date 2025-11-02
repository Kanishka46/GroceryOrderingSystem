// // import React, { useState, useEffect } from "react";

// // const Profile = () => {
// //  const [user, setUser] = useState(null); // current logged-in user data
// //  const [form, setForm] = useState({ username: "", email: "" });
// //  const [editMode, setEditMode] = useState(false);
// //  const [message, setMessage] = useState("");
// //  const [error, setError] = useState("");

// //  // Replace with your actual API endpoint to get current logged-in user
// //  const fetchUser = async () => {
// //   try {

// //    const res = await fetch("/api/users/"); // adjust endpoint accordingly
// //    if (!res.ok) throw new Error("Failed to fetch user");
// //    const data = await res.json();
// //    setUser(data);
// //    setForm({ username: data.username, email: data.email });
// //   } catch (err) {
// //    setError(err.message);
// //   }
// //  };

// //  useEffect(() => {
// //   fetchUser();
// //  }, []);

// //  const handleChange = (e) => {
// //   setForm({ ...form, [e.target.name]: e.target.value });
// //  };

// //  const handleSave = async () => {
// //   setMessage("");
// //   setError("");
// //   try {
// //    // Call your API to update user info
// //    const res = await fetch("/api/users/update", {
// //     method: "PUT",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ username: form.username, email: form.email }),
// //    });
// //    if (!res.ok) throw new Error("Failed to update profile");
// //    const updatedUser = await res.json();
// //    setUser(updatedUser);
// //    setForm({ username: updatedUser.username, email: updatedUser.email });
// //    setEditMode(false);
// //    setMessage("Profile updated successfully");
// //    setTimeout(() => setMessage(""), 3000);
// //   } catch (err) {
// //    setError(err.message);
// //   }
// //  };
// // const getInitials = (name) => {
// //   if (!name) return "";
// //   return name
// //    .split(" ")
// //    .map((n) => n[0])
// //    .join("")
// //    .toUpperCase();
// //  };

// //  if (!user) {
// //   return (
// //    <div className="container my-5">
// //     <p>Loading user profile...</p>
// //    </div>
// //   );
// //  }

// //  return (
// //   <div
// //    style={{
// //     minHeight: "100vh",
// //     backgroundColor: "#f5f8f5",
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //     color: "#064e03",
// //     padding: "2rem 1rem",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "flex-start",
// //    }}
// //   >
// //    <div
// //     className="card shadow-sm"
// //     style={{
// //      maxWidth: "450px",
// //      width: "100%",
// //      padding: "2rem",
// //      borderRadius: "10px",
// //      backgroundColor: "white",
// //     }}
// //    >
// //     <h2
// //      style={{
// //       textAlign: "center",
// //       marginBottom: "1.5rem",
// //       fontWeight: "700",
// //       color: "#1a472a",
// //      }}
// //     >
// //      Profile
// //     </h2>

// //     {/* Avatar */}
// //     <div
// //      style={{
// //       width: "90px",
// //       height: "90px",
// //       borderRadius: "50%",
// //       backgroundColor: "#3ba55c",
// //       color: "white",
// //       fontSize: "36px",
// //       fontWeight: "700",
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //       margin: "0 auto 1.5rem auto",
// //       userSelect: "none",
// //       boxShadow: "0 0 10px rgba(59,165,92,0.6)",
// //      }}
// //      title={user.username}
// //     >
// // {getInitials(user.username)}
// //     </div>

// //     {message && (
// //      <div
// //       className="alert alert-success"
// //       style={{ fontWeight: "600", marginBottom: "1rem" }}
// //      >
// //       {message}
// //      </div>
// //     )}
// //     {error && (
// //      <div
// //       className="alert alert-danger"
// //       style={{ fontWeight: "600", marginBottom: "1rem" }}
// //      >
// //       [Error - You need to specify the message]
// //      </div>
// //     )}

// //     {/* Username */}
// //     <div className="mb-3">
// //      <label
// //       htmlFor="username"
// //       style={{ fontWeight: "600", color: "#064e03" }}
// //       className="form-label"
// //      >
// //       Username
// //      </label>
// //      {editMode ? (
// //       <input
// //        type="text"
// //        id="username"
// //        name="username"
// //        value={form.username}
// //        onChange={handleChange}
// //        className="form-control"
// //        style={{ borderColor: "#3ba55c" }}
// //       />
// //      ) : (
// //       <p style={{ fontSize: "18px", marginBottom: "0" }}>
// //        {user.username}
// //       </p>
// //      )}
// //     </div>

// //     {/* Email */}
// //     <div className="mb-3">
// //      <label
// //       htmlFor="email"
// //       style={{ fontWeight: "600", color: "#064e03" }}
// //       className="form-label"
// //      >
// //       Email
// //      </label>
// //      {editMode ? (
// //       <input
// //        type="email"
// //        id="email"
// //        name="email"
// //        value={form.email}
// //        onChange={handleChange}
// //        className="form-control"
// //        style={{ borderColor: "#3ba55c" }}
// //       />
// //      ) : (
// //       <p style={{ fontSize: "18px", marginBottom: "0" }}>{user.email}</p>
// //      )}
// //     </div>
// // {/* Role */}
// //     <div className="mb-4">
// //      <label
// //       style={{ fontWeight: "600", color: "#064e03" }}
// //       className="form-label"
// //      >
// //       Role
// //      </label>
// //      <p
// //       style={{
// //        fontSize: "18px",
// //        textTransform: "capitalize",
// //        fontWeight: "600",
// //        marginBottom: 0,
// //       }}
// //      >
// //       {user.role.replace("_", " ")}
// //      </p>
// //     </div>

// //     {/* Buttons */}
// //     <div className="d-flex justify-content-center gap-3">
// //      {editMode ? (
// //       <>
// //        <button
// //         className="btn"
// //         style={{
// //          backgroundColor: "#3ba55c",
// //          color: "white",
// //          fontWeight: "700",
// //          padding: "10px 30px",
// //          boxShadow: "0 0 10px #3ba55caa",
// //          transition: "transform 0.2s ease",
// //         }}
// //         onClick={handleSave}
// //         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
// //         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //        >
// //         Save
// //        </button>
// //        <button
// //         className="btn btn-outline-secondary"
// //         style={{ padding: "10px 30px" }}
// //         onClick={() => {
// //          setEditMode(false);
// //          setForm({ username: user.username, email: user.email });
// //          setError("");
// //         }}
// //        >
// //         Cancel
// //        </button>
// //       </>
// //      ) : (
// //       <button
// //        className="btn btn-outline-success"
// //        style={{ padding: "10px 40px", fontWeight: "600" }}
// //        onClick={() => setEditMode(true)}
// //       >
// //        Edit Profile
// //       </button>
// //      )}
// //     </div>
// //    </div>
// //   </div>
// //  );
// // };

// // export default Profile;


// import React, { useState, useEffect } from "react";

// const Profile = () => {
//   // Initialize user with empty/default values
//   const [user, setUser] = useState({ username: "", email: "", role: "customer" });
//   const [form, setForm] = useState({ username: "", email: "" });
//   const [editMode, setEditMode] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // Fetch current user
//   const fetchUser = async () => {
//     try {
//       const res = await fetch("/api/users/"); // Replace with your backend endpoint
//       if (!res.ok) throw new Error("Failed to fetch user");
//       const data = await res.json();
//       setUser(data);
//       setForm({ username: data.username, email: data.email });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     setMessage("");
//     setError("");
//     try {
//       const res = await fetch("/api/users/update", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username: form.username, email: form.email }),
//       });
//       if (!res.ok) throw new Error("Failed to update profile");
//       const updatedUser = await res.json();
//       setUser(updatedUser);
//       setForm({ username: updatedUser.username, email: updatedUser.email });
//       setEditMode(false);
//       setMessage("Profile updated successfully");
//       setTimeout(() => setMessage(""), 3000);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const getInitials = (name) => {
//     if (!name) return "";
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();
//   };

//  return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#f5f8f5",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         color: "#064e03",
//         padding: "2rem 1rem",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "flex-start",
//       }}
//     >
//       <div
//         className="card shadow-sm"
//         style={{
//           maxWidth: "450px",
//           width: "100%",
//           padding: "2rem",
//           borderRadius: "10px",
//           backgroundColor: "white",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "1.5rem",
//             fontWeight: "700",
//             color: "#1a472a",
//           }}
//         >
//           Profile
//         </h2>

//         {/* Avatar */}
//         <div
//           style={{
//             width: "90px",
//             height: "90px",
//             borderRadius: "50%",
//             backgroundColor: "#3ba55c",
//             color: "white",
//             fontSize: "36px",
//             fontWeight: "700",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             margin: "0 auto 1.5rem auto",
//             userSelect: "none",
//             boxShadow: "0 0 10px rgba(59,165,92,0.6)",
//           }}
//           title={user.username || "Guest"}
//         >
//           {getInitials(user.username || "Guest")}
//         </div>

//         {/* Messages */}
//         {message && (
//           <div
//             className="alert alert-success"
//             style={{ fontWeight: "600", marginBottom: "1rem" }}
//           >
//             {message}
//           </div>
//         )}
//         {error && (
//           <div
//             className="alert alert-danger"
//             style={{ fontWeight: "600", marginBottom: "1rem" }}
//           >
//            {error}
//           </div>
//         )}
//  {/* Username */}
//         <div className="mb-3">
//           <label
//             htmlFor="username"
//             style={{ fontWeight: "600", color: "#064e03" }}
//             className="form-label"
//           >
//             Username
//           </label>
//           {editMode ? (
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={form.username}
//               onChange={handleChange}
//               className="form-control"
//               style={{ borderColor: "#3ba55c" }}
//             />
//           ) : (
//             <p style={{ fontSize: "18px", marginBottom: "0" }}>
//               {user.username || "N/A"}
//             </p>
//           )}
//         </div>

//         {/* Email */}
//         <div className="mb-3">
//           <label
//             htmlFor="email"
//             style={{ fontWeight: "600", color: "#064e03" }}
//             className="form-label"
//           >
//             Email
//           </label>
//           {editMode ? (
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="form-control"
//               style={{ borderColor: "#3ba55c" }}
//             />
//           ) : (
//             <p style={{ fontSize: "18px", marginBottom: "0" }}>
//               {user.email || "N/A"}
//             </p>
//           )}
//         </div>

//         {/* Role */}
//         <div className="mb-4">
//           <label
//             style={{ fontWeight: "600", color: "#064e03" }}
//             className="form-label"
//           >
//             Role
//           </label>
//           <p
//             style={{
//               fontSize: "18px",
//               textTransform: "capitalize",
//               fontWeight: "600",
//               marginBottom: 0,
//             }}
//           >
//             {user.role === "admin" ? "Admin" : "Customer"}
//           </p>
//         </div>
//  {/* Buttons */}
//         <div className="d-flex justify-content-center gap-3">
//           {editMode ? (
//             <>
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: "#3ba55c",
//                   color: "white",
//                   fontWeight: "700",
//                   padding: "10px 30px",
//                   boxShadow: "0 0 10px #3ba55caa",
//                   transition: "transform 0.2s ease",
//                 }}
//                 onClick={handleSave}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.transform = "scale(1.05)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.transform = "scale(1)")
//                 }
//               >
//                 Save
//               </button>
//               <button
//                 className="btn btn-outline-secondary"
//                 style={{ padding: "10px 30px" }}
//                 onClick={() => {
//                   setEditMode(false);
//                   setForm({ username: user.username, email: user.email });
//                   setError("");
//                 }}
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               className="btn btn-outline-success"
//               style={{ padding: "10px 40px", fontWeight: "600" }}
//               onClick={() => setEditMode(true)}
//             >
//               Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Profile;

import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/api"; // adjust the path to your api.js file
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // Initial state
  const [user, setUser] = useState({ username: "", email: "", role: "customer" });
  const [form, setForm] = useState({ username: "", email: "" });
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
 const navigate = useNavigate();
  // Fetch current user
  const fetchUser = async () => {
    try {
      // 🔹 Replace with your real backend endpoint for the current user
      const res = await fetch(`${BASE_URL}/api/users/me`); 
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();
      setUser(data);
      setForm({ username: data.username, email: data.email });
    } catch (err) {
      setError(err.message);
    }
  };

 

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    navigate("/home");
    setMessage("");
    setError("");
    try {
      const res = await fetch(`${BASE_URL}/api/users/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
        }),
      });
      if (!res.ok) throw new Error("Failed to update profile");
      const updatedUser = await res.json();
      setUser(updatedUser);
      setForm({ username: updatedUser.username, email: updatedUser.email });
      setEditMode(false);
      setMessage("Profile updated successfully");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      //setError(err.message);
    }
  };

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f8f5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#064e03",
        padding: "2rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        className="card shadow-sm"
        style={{
          maxWidth: "450px",
          width: "100%",
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontWeight: "700",
            color: "#1a472a",
          }}
        >
          Profile
        </h2>
        {/* Avatar */}
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            backgroundColor: "#3ba55c",
            color: "white",
            fontSize: "36px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 1.5rem auto",
            userSelect: "none",
            boxShadow: "0 0 10px rgba(59,165,92,0.6)",
          }}
          title={user.username || "Guest"}
        >
          {getInitials(user.username || "Guest")}
        </div>

        {/* Messages
        {message && (
          <div
            className="alert alert-success"
            style={{ fontWeight: "600", marginBottom: "1rem" }}
          >
            {message}
          </div>
        )}
        {error && (
          <div
            className="alert alert-danger"
            style={{ fontWeight: "600", marginBottom: "1rem" }}
          >
            {/* {error} */}
          {/* </div>
        )} */} 

        {/* Username */}
        <div className="mb-3">
          <label
            htmlFor="username"
            style={{ fontWeight: "600", color: "#064e03" }}
            className="form-label"
          >
            Username
          </label>
          {editMode ? (
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="form-control"
              style={{ borderColor: "#3ba55c" }}
            />
          ) : (
            <p style={{ fontSize: "18px", marginBottom: "0" }}>
              {user.username || "N/A"}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label
            htmlFor="email"
            style={{ fontWeight: "600", color: "#064e03" }}
            className="form-label"
          >
            Email
          </label>
          {editMode ? (
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              style={{ borderColor: "#3ba55c" }}
            />
          ) : (
            <p style={{ fontSize: "18px", marginBottom: "0" }}>
              {user.email || "N/A"}
            </p>
          )}
        </div>
       

        {/* Role */}
        <div className="mb-4">
          <label
            style={{ fontWeight: "600", color: "#064e03" }}
            className="form-label"
          >
            Role
          </label>
          <p
            style={{
              fontSize: "18px",
              textTransform: "capitalize",
              fontWeight: "600",
              marginBottom: 0,
            }}
          >
            {user.role === "admin" ? "Admin" : "Customer"}
          </p>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          {editMode ? (
            <>
              <button
                className="btn"
                style={{
                  backgroundColor: "#3ba55c",
                  color: "white",
                  fontWeight: "700",
                  padding: "10px 30px",
                  boxShadow: "0 0 10px #3ba55caa",
                  transition: "transform 0.2s ease",
                }}
                onClick={handleSave}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                Save
              </button>
              <button
                className="btn btn-outline-secondary"
                style={{ padding: "10px 30px" }}
                onClick={() => {
                  setEditMode(false);
                  setForm({ username: user.username, email: user.email });
                  setError("");
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline-success"
              style={{ padding: "10px 40px", fontWeight: "600" }}
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

     

