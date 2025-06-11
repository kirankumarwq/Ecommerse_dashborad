import React, { useState } from 'react';
import { customers as mockCustomers } from '../data/mockData';

const Customers = () => {
  const [customers] = useState(mockCustomers);

  return (
    <div className="customers">
      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers; 