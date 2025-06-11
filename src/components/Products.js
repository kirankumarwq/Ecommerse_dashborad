import React, { useState } from 'react';
import { products as mockProducts } from '../data/mockData';

const Products = () => {
  const [products, setProducts] = useState(mockProducts);

  // Add, edit, delete logic would go here

  return (
    <div className="products">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                {/* Edit/Delete buttons here */}
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products; 