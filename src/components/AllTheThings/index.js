import React from 'react';

function AllTheThings(props) {
  const things = props.productsArr.map((ele, index) => {
    return (
      <li =onClick{() => props.addToCart(index)}>
      {ele.name} 
      - 
      ${ele.price}
      </li>
    )
  })

  return (
      <>
      <div className="AllTheThings">
        <h2>Put these in your cart!</h2>
      <ul>
        {things}
      </ul>
      </div>
    </>   

    );
  }

export default AllTheThings;
