export const products = [
  { id: 1, name: 'Laptop', price: 1200, stock: 10 },
  { id: 2, name: 'Phone', price: 800, stock: 25 },
  { id: 3, name: 'Headphones', price: 150, stock: 50 },
];

export const orders = [
  { id: 101, customer: 'Alice', status: 'Pending', total: 1200 },
  { id: 102, customer: 'Bob', status: 'Shipped', total: 800 },
  { id: 103, customer: 'Charlie', status: 'Delivered', total: 150 },
];

export const customers = [
  { id: 1, name: 'Alice', email: 'alice@example.com', orders: 2 },
  { id: 2, name: 'Bob', email: 'bob@example.com', orders: 1 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', orders: 3 },
]; 