import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { loginUser } from '../utils/api';

const Login = () => {

    const [form, setForm] = useState({ email: '', password: '' });

    const [errors, setErrors] = useState({});

    const [message, setMessage] = useState('');

    const [apiError, setApiError] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const validate = () => {

        const errs = {};

        if (!form.email.trim()) errs.email = 'Email is required';

        if (!form.password) errs.password = 'Password is required';

        setErrors(errs);

        return Object.keys(errs).length === 0;

    };

    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage('');

        setApiError('');

        if (!validate()) return;

        try {

            const user = await loginUser({ email: form.email, password: form.password });

            setMessage(`🥦 Welcome back, ${user.username || user.email}!`);

            setForm({ email: '', password: '' });

            setTimeout(() => navigate('/home'), 1500);

        } catch (error) {

            setApiError(error.message || 'Login failed');

        }

    };

    return (

        <div style={{

            display: 'flex',

            minHeight: '100vh',

            backgroundColor: '#000', // fallback

        }}>

            {/* Left side - Veggie Image + Fun Text */}

            <div style={{

                flex: 1,

                backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',

                justifyContent: 'center',

                padding: '2rem',

                color: '#fff',

            }}>

                <div style={{

                    position: 'absolute',

                    inset: 0,

                    backgroundColor: 'rgba(0, 0, 0, 0.4)',

                    backdropFilter: 'blur(3px)',

                }}></div>

                <div style={{

                    position: 'relative',

                    zIndex: 1,

                    textAlign: 'center',

                    maxWidth: '400px'

                }}>

                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>

                        Freshness at Your Fingertips 🥬

                        </h1>

                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>

                            Join our veggie club and keep your basket stocked with the freshest greens,

                            crisp veggies, and healthy goodness.

                            </p>

                            </div>
                            </div>
                            {/* Right side - Login Card */}

                            <div style={{

                                flex: 1,

                                display: 'flex',

                                justifyContent: 'center',

                                alignItems: 'center',

                                backgroundColor: '#111',

                                padding: '2rem'

                            }}>

                                <div style={{

                                    backgroundColor: '#fff',

                                    width: '380px',

                                    borderRadius: '16px',

                                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',

                                    padding: '2rem',

                                    color: '#333',

                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',

                                }}

                                onMouseEnter={(e) => {

                                    e.currentTarget.style.transform = 'scale(1.02)';

                                    e.currentTarget.style.boxShadow = '0 10px 35px rgba(0,0,0,0.4)';

                                }}

                                onMouseLeave={(e) => {

                                    e.currentTarget.style.transform = 'scale(1)';

                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';

                                }}

                                >

                                    <h2 style={{ textAlign: 'center', color: '#2e7d32', fontWeight: '700' }}>

                                        🥬 GroShop

                                        </h2>

                                        <p style={{ textAlign: 'center', color: '#555', marginBottom: '1.5rem' }}>

                                           Please Sign in to Continue!

                                            </p>

                                            {message && (

                                                <div style={{

                                                    backgroundColor: '#e8f5e9',

                                                    color: '#2e7d32',

                                                    padding: '10px',

                                                    borderRadius: '6px',

                                                    textAlign: 'center',

                                                    marginBottom: '1rem'

                                                }}>

                                                    {message}

                                                    </div>

                                            )}

                                            {apiError && (

                                                <div style={{

                                                    backgroundColor: '#ffebee',

                                                    color: '#c62828',

                                                    padding: '10px',

                                                    borderRadius: '6px',

                                                    textAlign: 'center',

                                                    marginBottom: '1rem'

                                                }}>

                                                    {apiError}

                                                    </div>

                                            )}

                                            <form onSubmit={handleSubmit} noValidate>

                                                {/* Email */}

                                                <div style={{ marginBottom: '1.2rem', position: 'relative' }}>

                                                    <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>

                                                        email
                                                        </label>

                                                        <input

                                                        type="email"

                                                        name="email"

                                                        value={form.email}

                                                        onChange={handleChange}

                                                        placeholder="you@example.com"

                                                        style={{

                                                            width: '100%',

                                                            padding: '0.7rem 0.7rem 0.7rem 2.5rem',

                                                            border: errors.email ? '1.5px solid #c62828' : '1.5px solid #ccc',

                                                            borderRadius: '8px',

                                                            outline: 'none',

                                                        }}

                                                        />

                                                        <span style={{

                                                            position: 'absolute',

                                                            top: '70%',

                                                            left: '5px',

                                                            transform: 'translateY(-50%)',

                                                            fontSize: '1.2rem',

                                                            color: '#666'

                                                        }}>📧</span>

                                                        {errors.email && (

                                                            <div style={{ color: '#c62828', fontSize: '0.85rem', marginTop: '0.3rem' }}>

                                                                {errors.email}

                                                                </div>

                                                        )}

                                                        </div>

                                                        {/* Password */}

                                                        <div style={{ marginBottom: '1.5rem', position: 'relative' }}>

                                                            <label style={{ fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>

                                                                Password
                                                                </label>

                                                                <input

                                                                type={showPassword ? 'text' : 'password'}

                                                                name="password"

                                                                value={form.password}

                                                                onChange={handleChange}

                                                                placeholder="Enter password"

                                                                style={{

                                                                    width: '100%',

                                                                    padding: '0.7rem 2.5rem 0.7rem 2.5rem',

                                                                    border: errors.password ? '1.5px solid #c62828' : '1.5px solid #ccc',

                                                                    borderRadius: '8px',

                                                                    outline: 'none',

                                                                }}

                                                                />

                                                                <span style={{

                                                                    position: 'absolute',

                                                                    top: '70%',

                                                                    left: '8px',

                                                                    transform: 'translateY(-50%)',

                                                                    fontSize: '1.2rem',

                                                                    color: '#666'

                                                                }}>🔒</span>
                                                                <button
                                                                type="button"

                                                                onClick={() => setShowPassword(!showPassword)}

                                                                style={{

                                                                    position: 'absolute',

                                                                    top: '70%',

                                                                    right: '8px',

                                                                    transform: 'translateY(-50%)',

                                                                    background: 'transparent',

                                                                    border: 'none',

                                                                    cursor: 'pointer',

                                                                    color: '#2e7d32'

                                                                }}

                                                                >

                                                                    {showPassword ? '🙈' : '👁️'}

                                                                    </button>
                                                                    {errors.password && (

                                                                        <div style={{ color: '#c62828', fontSize: '0.85rem', marginTop: '0.3rem' }}>

                                                                            {errors.password}

                                                                            </div>
                                                                    )}

                                                                    </div>

                                                                    <button
                                                                    type="submit"

                                                                    style={{

                                                                        width: '100%',

                                                                        backgroundColor: '#2e7d32',

                                                                        color: '#fff',

                                                                        padding: '0.8rem',

                                                                        fontSize: '1.1rem',

                                                                        border: 'none',

                                                                        borderRadius: '8px',

                                                                        cursor: 'pointer',

                                                                        fontWeight: '700',

                                                                        transition: 'background-color 0.2s ease'

                                                                    }}

                                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1b5e20'}

                                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2e7d32'}

                                                                    >

                                                                        Log In

                                                                        </button>
                                                                        </form>
                                                                        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#555' }}>

                                                                            Create an account?{' '}

                                                                            <Link to="/register" style={{ color: '#2e7d32', fontWeight: '600' }}>

                                                                                Join the club

                                                                                </Link>
                                                                                </p>

                                                                                </div>
                                                                                </div>

                                                                                </div>
    );

                                                                };

                                                                export default Login;