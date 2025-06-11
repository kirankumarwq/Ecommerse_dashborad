import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import Customers from './components/Customers';

function App() {
  const [section, setSection] = useState('dashboard');

  let Content;
  switch (section) {
    case 'products':
      Content = <Products />;
      break;
    case 'orders':
      Content = <Orders />;
      break;
    case 'customers':
      Content = <Customers />;
      break;
    default:
      Content = <Dashboard />;
  }

  return (
    <div className="app-layout">
      <Sidebar onNavigate={setSection} />
      <div className="main-content">
        <Header />
        {Content}
      </div>
    </div>
  );
}

export default App;
