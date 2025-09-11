import React from 'react';

function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default Product;