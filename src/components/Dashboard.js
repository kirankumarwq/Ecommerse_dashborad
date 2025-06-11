import React from 'react';
import ChartCard from './ChartCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="dashboard-charts">
        <ChartCard title="Sales Overview" type="line" />
        <ChartCard title="Orders" type="bar" />
        <ChartCard title="Customers" type="doughnut" />
      </div>
    </div>
  );
};

export default Dashboard; 