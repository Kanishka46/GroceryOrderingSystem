// import React from 'react';

// import PropTypes from 'prop-types';

// import 'bootstrap/dist/css/bootstrap.min.css';



// const ShoppingCart = ({ cartItems, onRemoveItem, onUpdateQuantity, onCheckout }) => {

//     const calculateTotal = () => {

//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//     };



//     return (

//         <div className="container py-4">

//             <h2 className="mb-4">Shopping Cart</h2>


//             {cartItems.length === 0 ? (

//                 <div>

//                     <p data-testid='cart-empty'>Your cart is empty.</p>

//                     <button
//                     className="btn btn-success"

//                     onClick={onCheckout}

//                     data-testid="cart-checkout-btn"

//                     disabled={cartItems.length === 0}

//                     >

//                         Place Order

//                         </button>
//                         </div>
//             ) : (

//                 <>

//                 <ul className="list-group mb-4">

//                     {cartItems.map((item) => (

//                         <li

//                         key={item.id}

//                         className="list-group-item d-flex justify-content-between align-items-center"

//                         >

//                             <div className="d-flex align-items-center gap-3">

//                                 {item.imageUrl && (

//                                     <img

//                                     src={item.imageUrl}

//                                     alt={item.name}

//                                     className="rounded"

//                                     style={{ width: '60px', height: '60px', objectFit: 'cover' }}

//                                     />

//                                 )}

//                                 <div>

//                                     <strong className="fs-5" data-testid={`cart-item-${item.id}`}>

//                                         {item.name}

//                                         </strong>

//                                         {/* Added 'Price:' label so "$..." is unique for subtotal */}

//                                         <div className="text-muted" data-testid={`item-price-${item.id}`}>

//                                             Price: ${item.price.toFixed(2)}

//                                             </div>
//                                             <div className='text-muted'data-testid={`item-subtotal-${item.id}`}>

//                                                 ${(item.price*item.quantity).toFixed(2)}

//                                                 </div>
//                                                 </div>
//                                                 </div>


//                                                 <div className="d-flex align-items-center gap-2">

//                                                     <input

//                                                     type="number"

//                                                     min="1"

//                                                     value={item.quantity}

//                                                     onChange={(e) =>{

//                                                         const enterdValue=parseInt(e.target.value,10);

//                                                         const clampedValue=Math.max(1,Math.min(enterdValue,item.stockQuantity));

//                                                         onUpdateQuantity(item.id,clampedValue);}

//                                                     }

//                                                     className="form-control"

//                                                     style={{ width: '70px' }}

//                                                     data-testid={`cart-quantity-input-${item.id}`}

//                                                     />

//                                                     <button
//                                                     onClick={() => onRemoveItem(item.id)}

//                                                     className="btn btn-danger btn-sm"

//                                                     data-testid={`cart-remove-btn-${item.id}`}

//                                                     >

//                                                         remove
//                                                         </button>
//                                                         </div>
//                                                         </li>
//                     ))}

//                     </ul>


//                     <div className="d-flex justify-content-between align-items-center">

//                         <h4 data-testid="cart-total">

//                             ${calculateTotal().toFixed(2)}

//                             </h4>
//                             <button
//                             className="btn btn-success"

//                             onClick={onCheckout}

//                             data-testid="cart-checkout-btn"

//                             disabled={cartItems.length === 0}

//                             >

//                                 Place Order

//                                 </button>
//                                 </div>
//                                 </>

//             )}

//             </div>

//     );

//                                                 };



//                                                 ShoppingCart.propTypes = {

//                                                     cartItems: PropTypes.array.isRequired,

//                                                     onRemoveItem: PropTypes.func.isRequired,

//                                                     onUpdateQuantity: PropTypes.func.isRequired,

//                                                     onCheckout: PropTypes.func.isRequired,

//                                                 };



//                                                 export default ShoppingCart;
        
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';   // ✅ import navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const ShoppingCart = ({ cartItems, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const navigate = useNavigate();   // ✅ initialize navigate

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // ✅ Wrapper for handling checkout + navigation
  const handleCheckout = () => {
    onCheckout();       // existing checkout logic
    navigate('/orders');      // navigate to home page
  };
  const handlegohome=()=>
  {
    navigate('/home');
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div>
          <p data-testid='cart-empty'>Your cart is empty.</p>
          {/* <button
            className="btn btn-success"
            onClick={handleCheckout}   // ✅ changed here
            data-testid="cart-checkout-btn"
            disabled={!cartItems||cartItems.length === 0}
          >
            Place Order
          </button> */}
          <button
  className="btn btn-success"
  onClick={handlegohome}
 // disabled={!cartItems || cartItems.length === 0}
>
  Place Order
</button>


        </div>
      ) : (
        <>
        
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-3">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="rounded"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                  )}
                  <div>
                    <strong className="fs-5" data-testid={`cart-item-${item.id}`}>
                      {item.name}
                    </strong>
                    <div className="text-muted" data-testid={`item-price-${item.id}`}>
                      Price: ${item.price.toFixed(2)}
                    </div>
                    <div className="text-muted" data-testid={`item-subtotal-${item.id}`}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => {
                      const enterdValue = parseInt(e.target.value, 10);
                      const clampedValue = Math.max(1, Math.min(enterdValue, item.stockQuantity));
                      onUpdateQuantity(item.id, clampedValue);
                    }}
                    className="form-control"
                    style={{ width: '70px' }}
                    data-testid={`cart-quantity-input-${item.id}`}
                  />
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="btn btn-danger btn-sm"
                    data-testid={`cart-remove-btn-${item.id}`}
                  >
                    remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

       

          <div className="d-flex justify-content-between align-items-center">
            <h4 data-testid="cart-total">${calculateTotal().toFixed(2)}</h4>
            <button
              className="btn btn-success"
              onClick={handleCheckout}   // ✅ changed here
              data-testid="cart-checkout-btn"
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default ShoppingCart;


       