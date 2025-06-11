import React from 'react';

const Sidebar = ({ onNavigate }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => onNavigate('dashboard')}>Dashboard</li>
        <li onClick={() => onNavigate('products')}>Products</li>
        <li onClick={() => onNavigate('orders')}>Orders</li>
        <li onClick={() => onNavigate('customers')}>Customers</li>
      </ul>
    </nav>
  );
};

export default Sidebar; 