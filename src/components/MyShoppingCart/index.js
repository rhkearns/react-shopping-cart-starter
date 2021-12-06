import React from 'react';

function MyShoppingCart(props) {
  console.log(props);
  const things = props.cart.map((ele, index) => {
    return (
      <li onClick={() => props.removeFromCart(index)}>
      {ele.name} 
      - 
      ${ele.price}
      </li>
    )
  })

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
        {things}
      </ul>
    </div>
  );
}

export default MyShoppingCart;
