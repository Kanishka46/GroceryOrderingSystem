// import React from 'react';

// const OrderSuccess=()=>{

//     return(

//         <div className='container mt-5'>

//             <h2>Order Placed Successfully</h2>

//             <p>Thank you for your purchase. Your order is being processed.</p>

//             </div>

//     );

// }

// export default OrderSuccess;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div 
        className="card shadow-lg border-0 p-5 text-center rounded-4"
        style={{ maxWidth: '600px', backgroundColor: '#f8fff8' }}
      >
        {/* ✅ Success Icon */}
        <div 
          className="mx-auto mb-4 rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#28a745',
          }}
        >
          <span style={{ fontSize: '2.5rem', color: 'white' }}>✔</span>
        </div>

        <h2 className="fw-bold text-success mb-3">Order Placed Successfully 🎉</h2>
        <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
          Thank you for your purchase! Your order is being processed.
        </p>

        {/* ✅ Button to go Home */}
        <button
          className="btn btn-success btn-lg px-4 shadow-sm rounded-pill"
          onClick={() => navigate('/home')}
        >
          🏠 Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
