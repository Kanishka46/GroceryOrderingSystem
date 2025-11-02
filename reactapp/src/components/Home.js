// import React, { useState } from 'react';

// import AddProduct from './AddProduct';
// import ProductList from './ProductList';

// function Home()

// {
//     const [searchQuery, setSearchQuery] = useState('');


//     return(

//         <div>

//             {/* <h1>Welcome to the world of Freshness</h1> */}
            
// {/* Search Bar */}
//       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{
//             padding: '10px 15px',
//             width: '300px',
//             borderRadius: '5px 0 0 5px',
//             border: '1px solid #3ba55c',
//             outline: 'none',
//           }}
//         />
//         <button
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#3ba55c',
//             color: 'white',
//             border: 'none',
//             borderRadius: '0 5px 5px 0',
//             cursor: 'pointer',
//           }}
//         >
//           Search
//         </button>
//       </div>
//             <ProductList/>
//             <AddProduct/>

//             </div>

//     );

// };

// export default Home;

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      {/* <Header /> */}

      {/* Search Bar */}
      <div className="container mt-4">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '10px 15px',
              width: '300px',
              borderRadius: '5px 0 0 5px',
              border: '1px solid #3ba55c',
              outline: 'none',
            }}
          />
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#3ba55c',
              color: 'white',
              border: 'none',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </div>

        {/* Product List */}
        <ProductList searchQuery={searchQuery} />
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;



   