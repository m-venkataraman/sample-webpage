import React from 'react';
import Product from './Product';

const products = [
  { name: 'Filled Cushion', image: 'https://cdn11.bigcommerce.com/s-pnuk8o2l3q/products/8264/images/64219/HABLFRASC21_01__61473.1755281752.386.513.jpg?c=1' },
  { name: 'Kitchen Towel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWFsSYYCfD2e_hqiT2vWdJ-bv-RP4jgCKxQ&s' },
  { name: 'Runner', image: 'https://image.made-in-china.com/202f0j00NlAumrWnPjqc/Cotton-Home-Textile-Item-Cloth-Table-Runner-for-Home-Use.webp' },
  { name: 'Comforter', image: 'https://hausandkinder.com/cdn/shop/files/22_72b8da26-f349-4ea2-9c6a-c604675985b3.jpg?v=1756453473&width=533' },
];

function ProductList() {
  return (
    <section id="products" className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((prod, index) => (
          <Product key={index} {...prod} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;