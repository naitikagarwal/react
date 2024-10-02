import React from 'react';
import Product from './product';


function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Product 
        name='Amazon Echo'
        description='You AI assistant' 
        price={799} 
      />
      <Product 
        name='iPhone 12 pro max'
        description='Mobile Phone' 
        price={59999} 
      />
      <Product 
        name='Macbook Pro'
        description='Your Favourite PC' 
        price={89999} 
      />

    </div>
  );
}

export default App;
