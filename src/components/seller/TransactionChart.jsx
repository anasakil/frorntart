import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TransactionChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');  // Retrieve the token from local storage

      if (!token) {
        console.error('Authentication error: No token found');
        setChartData([]);
        return;  // Early return if no token
      }

      try {
        const response = await fetch('http://localhost:3001/api/orders/seller/orders', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  // Set the Authorization header
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const result = await response.json();

        // Assuming result.orders contains orders with a createdAt field
        const salesData = result.orders.reduce((acc, order) => {
          const date = new Date(order.createdAt).toLocaleDateString();
          const orderTotal = order.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

          if (acc[date]) {
            acc[date] += orderTotal;
          } else {
            acc[date] = orderTotal;
          }

          return acc;
        }, {});

        const formattedData = Object.keys(salesData).map(date => ({
          date,
          Sales: salesData[date]
        }));

        setChartData(formattedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setChartData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transactions</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" fill="#97644e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
