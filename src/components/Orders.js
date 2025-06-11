import React, { useState } from 'react';
import { orders as mockOrders } from '../data/mockData';

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);

  return (
    <div className="orders">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>${order.total}</td>
              <td>
                {/* Update status button here */}
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders; 