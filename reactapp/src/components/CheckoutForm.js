import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { createOrder } from '../utils/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



const CheckoutForm = ({ cartItems, onOrderPlaced }) => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({});

    const [apiError, setApiError] = useState('');

   const navigate = useNavigate(); 






    const validate = () => {

        const newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required";

        if (!email.trim()) {

            newErrors.email = "Email is required";

        } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {

            newErrors.email = 'Please enter a valid email address';

        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };



    const calculateTotal = () =>

    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setApiError('');

//   if (!validate()) return;

//   // ✅ Map cartItems to backend structure
//   const orderItems = cartItems.map(item => ({
//     product: { id: item.id },       // <— crucial
//     quantity: item.quantity
//   }));

//   const order = {
//     customerName: name,
//     customerEmail: email,
//     orderItems,
//     totalAmount: parseFloat(calculateTotal()),
//   };

//   try {
//     const createdOrder = await createOrder(order);
//     if (onOrderPlaced) onOrderPlaced(createdOrder);
//   } catch (err) {
//     setApiError(err.message || 'Failed to place order');
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  setApiError('');

  if (!validate()) return;

  // ✅ Map cartItems to backend structure
  const orderItems = cartItems.map(item => ({
    product: { id: item.id },
    quantity: item.quantity
  }));

  const order = {
    customerName: name,
    customerEmail: email,
    orderItems,
    totalAmount: parseFloat(calculateTotal()),
  };

  try {
    const createdOrder = await createOrder(order);
    if (onOrderPlaced) onOrderPlaced(createdOrder);

    // ✅ Navigate to OrderSuccess page
    navigate('/order-success');
  } catch (err) {
    setApiError(err.message || 'Failed to place order');
  }
};

    // const handleSubmit = async (e) => {

    //     e.preventDefault();

    //     setApiError('');



    //     if (!validate()) return;



    //     const order = {

    //         customerName: name,

    //         customerEmail: email,

    //         orderItems: cartItems,

    //         totalAmount: parseFloat(calculateTotal()),

    //     };

    //     try {

    //         const createdOrder = await createOrder(order);

    //         if (onOrderPlaced) onOrderPlaced(createdOrder);

    //     } catch (err) {

    //         setApiError(err.message || 'Failed to place order');

    //     }

    // };



    return (

        <div data-testid="checkout-form-container" className="container my-5" style={{ maxWidth: '600px' }}>

            <div className="card shadow-lg border-0 p-4 rounded-4" style={{ backgroundColor: '#fdfdfd' }}>

                <h2 className="mb-4 text-center text-primary fw-bold">🛒 Checkout</h2>



                <form onSubmit={handleSubmit}>

                    {/* Name Field */}

                    <div className="mb-3">

                        <label className="form-label fw-semibold">Name</label>

                        <input

                        data-testid="name-input"

                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}

                        value={name}

                        placeholder="Enter your full name"

                        onChange={(e) => setName(e.target.value)}

                        />

                        {errors.name && <div data-testid="name-error" className="invalid-feedback">{errors.name}</div>}

                        </div>


                        {/* Email Field */}

                        <div className="mb-3">

                            <label className="form-label fw-semibold">Email</label>
                            <input
                            data-testid="email-input"

                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}

                            value={email}

                            type="email"

                            placeholder="example@email.com"

                            onChange={(e) => setEmail(e.target.value)}

                            />

                            {errors.email && <div data-testid="email-error" className="invalid-feedback">{errors.email}</div>}

                            </div>



                            {/* Order Summary */}

                            <h4 className="mt-4 mb-3 fw-bold">📦 Order Summary</h4>

                            <ul className="list-group mb-3 shadow-sm rounded-3">

                                {cartItems.map(item => (

                                    <li

                                    key={item.id}

                                    className="list-group-item d-flex justify-content-between align-items-center"

                                    style={{ backgroundColor: '#fafafa' }}

                                    >

                                        <span>{item.name} x {item.quantity}</span>

                                        <span className="fw-semibold text-success">

                                            ₹{(item.price * item.quantity).toFixed(2)}

                                            </span>

                                            </li>

                                ))}

                                </ul>



                                {/* Total */}

                                <div

                                className="d-flex justify-content-between align-items-center p-3 mb-3 rounded-3"

                                style={{ backgroundColor: '#eaf8ea', fontSize: '1.2rem', fontWeight: 'bold' }}

                                >

                                    <span>Total:</span>

                                    <span className="text-success">₹{calculateTotal()}</span>

                                    </div>



                                    {/* Error */}

                                    {apiError && <div data-testid="checkout-error" className="alert alert-danger">{apiError}</div>}



                                    {/* Submit */}

                                    <div className="text-end">

                                        <button
                                        type="submit"

                                        data-testid="submit-order-btn"

                                        disabled={cartItems.length === 0}

                                        className="btn btn-success btn-lg px-4 shadow-sm rounded-pill"

                                        >

                                            ✅ Place Order

                                            </button>
                                            </div>
                                            </form>
                                            </div>
                                            </div>

    );

                                };



                                CheckoutForm.propTypes = {

                                    cartItems: PropTypes.array.isRequired,

                                    onOrderPlaced: PropTypes.func,

                                };



                                export default CheckoutForm;






                             