// // import React, { useState } from 'react';

// // import { registerUser } from '../utils/api';

// // import { useNavigate } from 'react-router-dom';



// // const Register = () => {

// //     const navigate = useNavigate();

// //     const [form, setForm] = useState({

// //         username: '',

// //         email: '',

// //         password: '',

// //         role: ''

// //     });



// //     const [errors, setErrors] = useState({});

// //     const [message, setMessage] = useState('');

// //     const [apiError, setApiError] = useState('');

// //     const [showPassword, setShowPassword] = useState(false);



// //     const validate = () => {

// //         const errs = {};

// //         if (!form.username.trim()) errs.username = "UserName is required";

// //         if (!form.email.trim()) errs.email = 'Email is required';

// //         else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(form.email)) errs.email = "Invalid email address";

// //         if (!form.password) errs.password = 'Password is required';

// //         else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';

// //         if (!form.role) errs.role = 'Role is required';

// //         setErrors(errs);

// //         return Object.keys(errs).length === 0;

// //     };



// //     const handleChange = (e) => {

// //         setForm({ ...form, [e.target.name]: e.target.value });

// //     };



// //     const handleSubmit = async (e) => {

// //         e.preventDefault();

// //         setMessage('');

// //         setApiError('');



// //         if (!validate()) return;



// //         try {

// //             const result = await registerUser(form);

// //             setMessage(result.message);

// //             setForm({ username: '', email: '', password: '', role: '' });

// //             setTimeout(() => navigate('/'), 1500);

// //         } catch (error) {

// //             setApiError(error.message || 'Registration failed');

// //         }

// //     };



// //     return (

// //         <div

// //         style={{

// //             minHeight: '100vh',

// //             position: 'relative',

// //             fontFamily: "'Poppins', sans-serif",

// //             color: '#064e03',

// //             overflow: 'hidden',

// //         }}

// //         >

// //             {/* Background image with blur */}

// //             <div

// //             style={{

// //                 backgroundImage:

// //                 "url('https://i.pinimg.com/736x/02/07/b8/0207b8364568202d79165599ae5b0269.jpg')",

// //                 filter: 'blur(4px)',

// //                 position: 'absolute',

// //                 top: 0,

// //                 left: 0,

// //                 width: '100%',

// //                 height: '100%',

// //                 backgroundPosition: 'center',

// //                 backgroundSize: 'cover',

// //                 zIndex: -2,

// //                 userSelect: 'none',

// //             }}

// //             />

// //             {/* Dark green transparent overlay */}

// //             <div

// //             style={{

// //                 backgroundColor: 'rgba(0, 50, 0, 0.65)',

// //                 position: 'absolute',

// //                 top: 0,

// //                 left: 0,

// //                 width: '100%',

// //                 height: '100%',

// //                 zIndex: -1,

// //             }}

// //             />



// //             <div

// //             className="d-flex justify-content-center align-items-center"

// //             style={{ minHeight: '100vh', padding: '1rem' }}

// //             >

// //                 <div

// //                 className="card p-4 shadow"

// //                 style={{

// //                     width: '400px',

// //                     borderRadius: '15px',

// //                     backgroundColor: 'white',

// //                     boxShadow: '0 0 20px #3ba55c99',

// //                 }}

// //                 >

// //                     <h3 className="text-center mb-3" style={{ color: '#3ba55c' }}>

// //                         Create Account

// //                         </h3>

// //                         <p className="text-center mb-4" style={{ color: '#2c6b2c' }}>

// //                             Join us & start your grocery shopping journey!

// //                             </p>



// //                             {message && (

// //                                 <div

// //                                 className="alert alert-success"

// //                                 role="alert"

// //                                 style={{ fontWeight: '600' }}

// //                                 >

// //                                     {message}

// //                                     </div>

// //                             )}

// //                             {apiError && (

// //                                 <div

// //                                 className="alert alert-danger"

// //                                 role="alert"

// //                                 style={{ fontWeight: '600' }}

// //                                 >

// //                                     {apiError}

// //                                     </div>

// //                             )}



// //                             <form onSubmit={handleSubmit} noValidate>

// //                                 <div className="form-group mb-3 position-relative">

// //                                     <label

// //                                     htmlFor="username"

// //                                     className="form-label fw-semibold"

// //                                     style={{ color: '#064e03' }}

// //                                     >

// //                                         Username

// //                                         </label>

// //                                         <input

// //                                         id="username"

// //                                         name="username"

// //                                         type="text"

// //                                         placeholder="Enter your username"

// //                                         value={form.username}

// //                                         onChange={handleChange}

// //                                         className={`form-control ${errors.username ? 'is-invalid' : ''}`}

// //                                         style={{

// //                                             backgroundColor: '#f9f9f9',

// //                                             color: '#064e03',

// //                                             borderColor: '#3ba55c',

// //                                             paddingLeft: '40px',

// //                                         }}

// //                                         />

// //                                         <i

// //                                         className="bi bi-person-fill"

// //                                         style={{

// //                                             position: 'absolute',

// //                                             top: '38px',

// //                                             left: '12px',

// //                                             color: '#3ba55c',

// //                                             fontSize: '18px',

// //                                         }}

// //                                         ></i>

// //                                         {errors.username && (

// //                                             <div className="invalid-feedback" style={{ color: '#d9534f' }}>

// //                                                 {errors.username}

// //                                                 </div>
// //                                         )}

// //                                         </div>


// //                                         <div className="form-group mb-3 position-relative">

// //                                             <label
// //                                             htmlFor="email"

// //                                             className="form-label fw-semibold"

// //                                             style={{ color: '#064e03' }}

// //                                             >

// //                                                 Email address

// //                                                 </label>

// //                                                 <input

// //                                                 id="email"

// //                                                 name="email"

// //                                                 type="email"

// //                                                 placeholder="Enter your email"

// //                                                 value={form.email}

// //                                                 onChange={handleChange}

// //                                                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}

// //                                                 style={{

// //                                                     backgroundColor: '#f9f9f9',

// //                                                     color: '#064e03',

// //                                                     borderColor: '#3ba55c',

// //                                                     paddingLeft: '40px',

// //                                                 }}

// //                                                 />

// //                                                 <i

// //                                                 className="bi bi-envelope-fill"

// //                                                 style={{

// //                                                     position: 'absolute',

// //                                                     top: '38px',

// //                                                     left: '12px',

// //                                                     color: '#3ba55c',

// //                                                     fontSize: '18px',

// //                                                 }}

// //                                                 ></i>

// //                                                 {errors.email && (

// //                                                     <div className="invalid-feedback" style={{ color: '#d9534f' }}>

// //                                                         {errors.email}

// //                                                         </div>

// //                                                 )}

// //                                                 </div>



// //                                                 <div className="form-group mb-3 position-relative">

// //                                                     <label

// //                                                     htmlFor="password"

// //                                                     className="form-label fw-semibold"

// //                                                     style={{ color: '#064e03' }}

// //                                                     >

// //                                                         Password
// //                                                         </label>

// //                                                         <input

// //                                                         id="password"

// //                                                         name="password"

// //                                                         type={showPassword ? 'text' : 'password'}

// //                                                         placeholder="Enter your password"

// //                                                         value={form.password}

// //                                                         onChange={handleChange}

// //                                                         className={`form-control ${errors.password ? 'is-invalid' : ''}`}

// //                                                         style={{

// //                                                             backgroundColor: '#f9f9f9',

// //                                                             color: '#064e03',

// //                                                             borderColor: '#3ba55c',

// //                                                             paddingLeft: '40px',

// //                                                         }}

// //                                                         />

// //                                                         <i

// //                                                         className="bi bi-lock-fill"

// //                                                         style={{

// //                                                             position: 'absolute',

// //                                                             top: '38px',

// //                                                             left: '12px',

// //                                                             color: '#3ba55c',

// //                                                             fontSize: '18px',

// //                                                         }}

// //                                                         ></i>
// //                                                         <button

// //                                                         type="button"

// //                                                         onClick={() => setShowPassword((prev) => !prev)}

// //                                                         style={{

// //                                                             position: 'absolute',

// //                                                             top: '37px',

// //                                                             right: '10px',

// //                                                             background: 'none',

// //                                                             border: 'none',

// //                                                             color: '#3ba55c',

// //                                                             cursor: 'pointer',

// //                                                             fontSize: '18px',

// //                                                             padding: 0,

// //                                                             userSelect: 'none',

// //                                                         }}

// //                                                         aria-label={showPassword ? 'Hide password' : 'Show password'}

// //                                                         >

// //                                                             {showPassword ? '🙈' : '👁️'}

// //                                                             </button>
// //                                                             {errors.password && (

// //                                                                 <div className="invalid-feedback" style={{ color: '#d9534f' }}>

// //                                                                     {errors.password}

// //                                                                     </div>
// //                                                             )}

// //                                                             </div>


// //                                                             <div className="form-group mb-4">

// //                                                                 <label
// //                                                                 htmlFor="role"

// //                                                                 className="form-label fw-semibold"

// //                                                                 style={{ color: '#064e03' }}

// //                                                                 >

// //                                                                     Role
// //                                                                     </label>
// //                                                                     <select
// //                                                                     id="role"

// //                                                                     name="role"

// //                                                                     value={form.role}

// //                                                                     onChange={handleChange}

// //                                                                     className={`form-select ${errors.role ? 'is-invalid' : ''}`}

// //                                                                     style={{

// //                                                                         backgroundColor: '#f9f9f9',

// //                                                                         color: '#064e03',

// //                                                                         borderColor: '#3ba55c',

// //                                                                     }}

// //                                                                     >

// //                                                                         <option value="">-- Select Role --</option>
// //                                                                         <option value="ADMIN">ADMIN</option>
// //                                                                         <option value="CUSTOMER">CUSTOMER</option>
// //                                                                         <option value="DELIVERY_PARTNER">DELIVERY PARTNER</option>
// //                                                                         </select>
// //                                                                         {errors.role && (

// //                                                                             <div className="invalid-feedback" style={{ color: '#d9534f' }}>

// //                                                                                 {errors.role}

// //                                                                                 </div>
// //                                                                         )}

// //                                                                         </div>


// //                                                                         <button
// //                                                                         type="submit"

// //                                                                         className="btn w-100 fw-semibold"

// //                                                                         style={{

// //                                                                             backgroundColor: '#3ba55c',

// //                                                                             border: 'none',

// //                                                                             color: 'white',

// //                                                                             fontWeight: '700',

// //                                                                             padding: '10px',

// //                                                                             boxShadow: '0 0 10px #3ba55caa',

// //                                                                             transition: 'transform 0.2s ease',

// //                                                                         }}

// //                                                                         onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}

// //                                                                         onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}

// //                                                                         >

// //                                                                             Register
// //                                                                             </button>
// //                                                                             </form>
// //                                                                             </div>
// //                                                                             </div>
// //                                                                             </div>
// //     );

// //                                                                     };



// //                                                                     export default Register;
                                                                       
// import React, { useState } from 'react';
// import { registerUser } from '../utils/api';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ username: '', email: '', password: '', role: '' });
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState('');
//   const [apiError, setApiError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const validate = () => {
//     const errs = {};
//     if (!form.username.trim()) errs.username = "Username is required";
//     if (!form.email.trim()) errs.email = "Email is required";
//     else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(form.email)) errs.email = "Invalid email address";
//     if (!form.password) errs.password = "Password is required";
//     else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
//     if (!form.role) errs.role = "Role is required";
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setMessage('');
//   setApiError('');

//   if (!validate()) return;

//   try {
//     await registerUser(form); // call API
//     navigate('/home'); // ✅ go to Home page immediately on success
//   } catch (error) {
//     setApiError(error.message || 'Registration failed'); // show error if API fails
//   }
// };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setMessage('');
//   //   setApiError('');

//   //   if (!validate()) return;

//   //   try {
//   //     const result = await registerUser(form);
//   //     setMessage(result.message || 'Registration successful');
//   //     setForm({ username: '', email: '', password: '', role: '' });
//   //     setTimeout(() => navigate('/'), 1500);
//   //   } catch (error) {
//   //     setApiError(error.message || 'Registration failed');
//   //   }
//   // };

//  return (
//     <div style={{ minHeight: '100vh', position: 'relative', fontFamily: "'Poppins', sans-serif", color: '#064e03', overflow: 'hidden' }}>
//       {/* Background */}
//       <div style={{
//         backgroundImage: "url('https://i.pinimg.com/736x/02/07/b8/0207b8364568202d79165599ae5b0269.jpg')",
//         filter: 'blur(4px)',
//         position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
//         backgroundPosition: 'center', backgroundSize: 'cover', zIndex: -2, userSelect: 'none'
//       }} />
//       <div style={{ backgroundColor: 'rgba(0,50,0,0.65)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

//       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '1rem' }}>
//         <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '15px', backgroundColor: 'white', boxShadow: '0 0 20px #3ba55c99' }}>
//           <h3 className="text-center mb-3" style={{ color: '#3ba55c' }}>Create Account</h3>
//           <p className="text-center mb-4" style={{ color: '#2c6b2c' }}>Join us & start your grocery shopping journey!</p>

//           {message && <div className="alert alert-success" role="alert" style={{ fontWeight: '600' }}>{message}</div>}
//           {apiError && <div className="alert alert-danger" role="alert" style={{ fontWeight: '600' }}>{apiError}</div>}

//           <form onSubmit={handleSubmit} noValidate>
//             {/* Username */}
//             <div className="form-group mb-3 position-relative">
//               <label htmlFor="username" className="form-label fw-semibold" style={{ color: '#064e03' }}>Username</label>
//               <input id="username" name="username" type="text" placeholder="Enter your username"
//                 value={form.username} onChange={handleChange}
//                 className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//                 style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c', paddingLeft: '40px' }}
//               />
//               <i className="bi bi-person-fill" style={{ position: 'absolute', top: '38px', left: '12px', color: '#3ba55c', fontSize: '18px' }}></i>
//               {errors.username && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.username}</div>}
//             </div>

//            {/* Email */}
//             <div className="form-group mb-3 position-relative">
//               <label htmlFor="email" className="form-label fw-semibold" style={{ color: '#064e03' }}>Email address</label>
//               <input id="email" name="email" type="email" placeholder="Enter your email"
//                 value={form.email} onChange={handleChange}
//                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                 style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c', paddingLeft: '40px' }}
//               />
//               <i className="bi bi-envelope-fill" style={{ position: 'absolute', top: '38px', left: '12px', color: '#3ba55c', fontSize: '18px' }}></i>
//               {errors.email && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.email}</div>}
//             </div>

//             {/* Password */}
//             <div className="form-group mb-3 position-relative">
//               <label htmlFor="password" className="form-label fw-semibold" style={{ color: '#064e03' }}>Password</label>
//               <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password"
//                 value={form.password} onChange={handleChange}
//                 className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                 style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c', paddingLeft: '40px' }}
//               />
//               <i className="bi bi-lock-fill" style={{ position: 'absolute', top: '38px', left: '12px', color: '#3ba55c', fontSize: '18px' }}></i>
//               <button type="button" onClick={() => setShowPassword(prev => !prev)}
//                 style={{ position: 'absolute', top: '37px', right: '10px', background: 'none', border: 'none', color: '#3ba55c', cursor: 'pointer', fontSize: '18px', padding: 0 }}>
//                 {showPassword ? '🙈' : '👁️'}
//               </button>
//               {errors.password && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.password}</div>}
//             </div>
//  {/* Role */}
//             <div className="form-group mb-4">
//               <label htmlFor="role" className="form-label fw-semibold" style={{ color: '#064e03' }}>Role</label>
//               <select id="role" name="role" value={form.role} onChange={handleChange}
//                 className={`form-select ${errors.role ? 'is-invalid' : ''}`}
//                 style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c' }}>
//                 <option value="">-- Select Role --</option>
//                 <option value="ADMIN">ADMIN</option>
//                 <option value="CUSTOMER">CUSTOMER</option>
//                 <option value="DELIVERY_PARTNER">DELIVERY PARTNER</option>
//               </select>
//               {errors.role && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.role}</div>}
//             </div>

//             <button type="submit" className="btn w-100 fw-semibold"
//               style={{ backgroundColor: '#3ba55c', border: 'none', color: 'white', fontWeight: '700', padding: '10px', boxShadow: '0 0 10px #3ba55caa', transition: 'transform 0.2s ease' }}
//               onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
//               onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { registerUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import AddProduct from './AddProduct';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '', role: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation function
  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = 'Username is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (!form.role) errs.role = 'Role is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Handle form submission
  


const handleSubmit = async (e) => {
  e.preventDefault();
  setApiError('');
  if (!validate()) return;
  try {
    const result = await registerUser(form); // result contains the user object from backend
    console.log('Registration success:', result);

    // Navigate based on the role from backend
    if (result.role === 'ADMIN') {
      navigate('/add-product'); // Admin goes to Add Product page
    } else {
      navigate('/home'); // Other roles go to Home page
    }
  } catch (error) {
    console.error('Registration error:', error);
    setApiError(error.message || 'Registration failed');
  }
};
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setApiError('');
//     if (!validate()) return;

//     try {
//       // Call backend API
//       const result = await registerUser(form);
//       console.log('Registration success:', result);
//        // debug success
//       // go to Home page immediately
//       export const registerUser = async (user) => {
//   const response = await fetch(`${BASE_URL}/api/users/register`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(user),
//   });

//   let data;
//   try {
//     data = await response.json();
//   } catch {
//     data = { message: 'No response body from server' };
//   }

//   if (!response.ok) {
//     console.error('Registration failed:', data);
//     throw new Error(data.message || 'Registration failed');
//   }

//   console.log('Registration successful:', data);
//   return data;


// };

//     } catch (error) {
//       console.error('Registration error:', error); // debug error
//       setApiError(error.message || 'Registration failed');
//     }
//   };

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Poppins', sans-serif", color: '#064e03', position: 'relative' }}>
      {/* Background blur */}
      <div style={{
        backgroundImage: "url('https://i.pinimg.com/736x/02/07/b8/0207b8364568202d79165599ae5b0269.jpg')",
        filter: 'blur(4px)', position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%', backgroundPosition: 'center',
        backgroundSize: 'cover', zIndex: -2
      }} />
      <div style={{ backgroundColor: 'rgba(0,50,0,0.65)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '1rem' }}>
        <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '15px', backgroundColor: 'white', boxShadow: '0 0 20px #3ba55c99' }}>
          <h3 className="text-center mb-3" style={{ color: '#3ba55c' }}>Create Account</h3>
          <p className="text-center mb-4" style={{ color: '#2c6b2c' }}>Join us & start your grocery shopping journey!</p>

          {apiError && <div className="alert alert-danger" role="alert" style={{ fontWeight: '600' }}>{apiError}</div>}

          <form onSubmit={handleSubmit} noValidate>
            {/* Username */}
            <div className="form-group mb-3 position-relative">
              <label htmlFor="username" className="form-label fw-semibold" style={{ color: '#064e03' }}>Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c', paddingLeft: '40px' }}
              />
             
              {errors.username && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.username}</div>}
            </div>

            {/* Email */}
            <div className="form-group mb-3 position-relative">
              <label htmlFor="email" className="form-label fw-semibold" style={{ color: '#064e03' }}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c', paddingLeft: '40px' }}
              />
              {errors.email && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.email}</div>}
            </div>

            {/* Password */}
            <div className="form-group mb-3 position-relative">
              <label htmlFor="password" className="form-label fw-semibold" style={{ color: '#064e03' }}>Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c', paddingLeft: '40px' }}
              />
              <button type="button" onClick={() => setShowPassword(prev => !prev)}
                style={{ position: 'absolute', top: '37px', right: '10px', background: 'none', border: 'none', color: '#3ba55c', cursor: 'pointer', fontSize: '18px', padding: 0 }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
              {errors.password && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.password}</div>}
            </div>

            

            {/* Role */}
            <div className="form-group mb-4">
              <label htmlFor="role" className="form-label fw-semibold" style={{ color: '#064e03' }}>Role</label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                className={`form-select ${errors.role ? 'is-invalid' : ''}`}
                style={{ backgroundColor: '#f9f9f9', color: '#064e03', borderColor: '#3ba55c' }}
              >
                <option value="">-- Select Role --</option>
                <option value="ADMIN">ADMIN</option>
                <option value="CUSTOMER">CUSTOMER</option>
                <option value="VENDOR">VENDOR</option> 
              </select>
              {errors.role && <div className="invalid-feedback" style={{ color: '#d9534f' }}>{errors.role}</div>}
            </div>

            <button type="submit" className="btn w-100 fw-semibold"
              style={{ backgroundColor: '#3ba55c', border: 'none', color: 'white', fontWeight: '700', padding: '10px', boxShadow: '0 0 10px #3ba55caa', transition: 'transform 0.2s ease' }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;


