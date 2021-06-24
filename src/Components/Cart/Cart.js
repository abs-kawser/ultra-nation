import React from 'react';

const Cart = (props) => {
  let cart=props.cart

  // let totalPopulation =0;
  // for (let i = 0; i < cart.length; i++) {
  //   let country= cart[i];
  //    totalPopulation = totalPopulation+ country.population;
    
  // }
  
  const totalPopulation =cart.reduce((sum,country) => sum+country.population,0)


  return (
    <div>
        <h1>This is cart:{props.cart.length} </h1>
        <p>total Population:{totalPopulation}</p>
    </div>
  );
};

export default Cart;