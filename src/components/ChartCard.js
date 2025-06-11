import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

const chartData = {
  line: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 500, 2000, 3000],
        fill: false,
        borderColor: '#36a2eb',
        tension: 0.1,
      },
    ],
  },
  bar: {
    labels: ['Pending', 'Shipped', 'Delivered', 'Returned'],
    datasets: [
      {
        label: 'Orders',
        data: [12, 19, 3, 5],
        backgroundColor: '#ff6384',
      },
    ],
  },
  doughnut: {
    labels: ['New', 'Returning'],
    datasets: [
      {
        label: 'Customers',
        data: [300, 50],
        backgroundColor: ['#ffce56', '#36a2eb'],
      },
    ],
  },
};

const ChartCard = ({ title, type }) => {
  return (
    <div className="chart-card">
      <h3>{title}</h3>
      {type === 'line' && <Line data={chartData.line} />}
      {type === 'bar' && <Bar data={chartData.bar} />}
      {type === 'doughnut' && <Doughnut data={chartData.doughnut} />}
    </div>
  );
};

export default ChartCard; 