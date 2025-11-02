// const BASE_URL='https://8080-dfbcaefadaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io'

// export const getProductById=async(id)=>{

//     const response=await fetch(`${BASE_URL}/api/products/${id}`);

//     if(!response.ok) throw new Error('Product not found');

//     return response.json();

// };

// export const getAllProducts=async()=>{

//     const response=await fetch(`${BASE_URL}/api/products`);

//     if(!response.ok) throw new Error('Failed to fetch products');

//     return response.json();

// };

// export const getProductsByCategory=async(category)=>{

//     const response=await fetch(`${BASE_URL}/api/products/category/${category}`);

//     if(response.status===404)

//     {

//         return [];

//     }

//     if(!response.ok) throw new Error('Failed to fetch products by category');

//     return response.json();

// };

// export const createOrder=async(orderData)=>{

//     const response=await fetch(`${BASE_URL}/api/orders`,{

//         method:'POST',

//         body:JSON.stringify(orderData),

//         headers:{'Content-Type':'application/json'},

//     });

//     if(!response.ok)

//     {

//         const errorData=await response.json();

//         throw new Error(errorData.message||'Order creation failed');

//     }

//     return response.json();

// };

// export const createProduct = async (productData) => {

//     const response = await fetch(`${BASE_URL}/api/products`, {

//         method: 'POST',

//         body: JSON.stringify(productData),

//         headers: { 'Content-Type': 'application/json' },

//     });



//     if (!response.ok) {

//         const errorData = await response.json().catch(() => ({})); // avoid crash if no JSON body

//         throw new Error(errorData.message || 'Product creation failed');

//     }



//     return response.json();

// };



// //Register User

// export async function registerUser(user) {

//     try {

//         const response = await fetch(`${BASE_URL}/api/users/register`, {

//             method: 'POST',

//             headers: { 'Content-Type': 'application/json' },

//             body: JSON.stringify(user),

//         });



//         const data = await response.json(); // parse JSON body



//         if (!response.ok) {

//             // backend returned error status (400, 403, etc)

//             // data might be an error message string or an object with message

//             throw new Error(data.message || JSON.stringify(data));

//         }



//         return data; // success response data



//     } catch (error) {

//         throw new Error(error.message || 'Something went wrong');

//     }



// }



// // Login user

// export async function loginUser(credentials) {

//     try {

//         const response = await fetch(`${BASE_URL}/api/users/login`, {

//             method: 'POST',

//             headers: { 'Content-Type': 'application/json' },

//             body: JSON.stringify(credentials),

//         });



//         if (response.status === 401) {

//             throw new Error('Invalid email or password');

//         }



//         const data = await response.json();

//         return data; // user data without password

//     } catch (error) {

//         throw error;

//     }

// }



// // Get all users

// export async function getAllUsers() {

//     try {

//         const response = await fetch(BASE_URL);

//         if (!response.ok) {

//             throw new Error('Failed to fetch users');

//         }

//         return await response.json();

//     } catch (error) {

//         throw error;

//     }

// }
export const BASE_URL = 'https://8080-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io';


//'https://8080-dfbcaefadaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io';

// Products
export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/api/products/${id}`);
  if (!response.ok) throw new Error('Product not found');
  return response.json();
};

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/api/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/api/products/category/${category}`);
  if (response.status === 404) return [];
  if (!response.ok) throw new Error('Failed to fetch products by category');
  return response.json();
};

export const createProduct = async (productData) => {
  const response = await fetch(`${BASE_URL}/api/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Product creation failed');
  }
  return response.json();
};

// Orders
export const createOrder = async (orderData) => {
  const response = await fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Order creation failed');
  }
  return response.json();
};

// Users
// export const registerUser = async (user) => {
//   const response = await fetch(`${BASE_URL}/api/users/register`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(user),
//   });

//   const data = await response.json();
//   if (!response.ok) throw new Error(data.message || 'Registration failed');
//   return data;
// };
export const registerUser = async (user) => {
  const response = await fetch(`${BASE_URL}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = { message: 'No response body from server' };
  }

  if (!response.ok) {
    console.error('Registration failed:', data);
    throw new Error(data.message || 'Registration failed');
  }

  console.log('Registration successful:', data);
  return data;
};


export const loginUser = async (credentials) => {
  const response = await fetch(`${BASE_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (response.status === 401) throw new Error('Invalid email or password');
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Login failed');
  }
  return response.json();
};

// export const getAllUsers = async () => {
//   const response = await fetch(`${BASE_URL}/api/users`);
//   if (!response.ok) throw new Error('Failed to fetch users');
//   return response.json();
// };
export async function getAllUsers() {
  try {
    // ✅ Fixed URL
    const response = await fetch(`${BASE_URL}/api/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
