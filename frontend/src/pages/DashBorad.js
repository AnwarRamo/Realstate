import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [soldHouses, setSoldHouses] = useState([]);
  const [rentedHouses, setRentedHouses] = useState([]);
  const [requestTimeData, setRequestTimeData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchSoldHouses();
//       await fetchRentedHouses();
//       await fetchRequestTimeData();
//     };

//     fetchData();
//   }, []);

//   const fetchSoldHouses = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/houses/sold-houses');
//       setSoldHouses(response.data);
//     } catch (error) {
//       console.error('Error fetching sold houses:', error);
//     }
//   };

//   const fetchRentedHouses = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/houses/rented-houses');
//       setRentedHouses(response.data);
//     } catch (error) {
//       console.error('Error fetching rented houses:', error);
//     }
//   };

//   const fetchRequestTimeData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/request-time');
//       setRequestTimeData(response.data);
//     } catch (error) {
//       console.error('Error fetching request time data:', error);
//     }
//   };

  const barChartDataSold = soldHouses.map((house, index) => ({
    id: `Sold ${index + 1}`,
    value: house.count || 0,
  }));

  const barChartDataRented = rentedHouses.map((house, index) => ({
    id: `Rented ${index + 1}`,
    value: house.count || 0,
  }));

  const pieChartData = requestTimeData.map(item => ({
    id: item.name || 'Unknown',
    value: item.value || 0,
  }));

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-700">Total Sold Houses</h3>
            <p className="text-3xl font-bold text-green-500">
              {barChartDataSold.reduce((total, house) => total + house.value, 0)}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-700">Total Rented Houses</h3>
            <p className="text-3xl font-bold text-yellow-500">
              {barChartDataRented.reduce((total, house) => total + house.value, 0)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-medium mb-4 text-gray-800">Sold Houses</h2>
            <div style={{ height: '400px' }}>
              <ResponsiveBar
                data={barChartDataSold}
                keys={['value']}
                indexBy="id"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors="#34D399"
                enableLabel={false}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Sales',
                  legendPosition: 'middle',
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Count',
                  legendPosition: 'middle',
                  legendOffset: -40,
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-medium mb-4 text-gray-800">Rented Houses</h2>
            <div style={{ height: '400px' }}>
              <ResponsiveBar
                data={barChartDataRented}
                keys={['value']}
                indexBy="id"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors="#FBBF24"
                enableLabel={false}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Rentals',
                  legendPosition: 'middle',
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Count',
                  legendPosition: 'middle',
                  legendOffset: -40,
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 col-span-1 md:col-span-2">
            <h2 className="text-lg font-medium mb-4 text-gray-800">Request Time</h2>
            <div style={{ height: '400px' }}>
              <ResponsivePie
                data={pieChartData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={['#34D399', '#FBBF24', '#F472B6']}
                borderWidth={1}
                borderColor={{
                  from: 'color',
                  modifiers: [['darker', 0.2]],
                }}
                enableRadialLabels={true}
                radialLabel={(d) => `${d.id}: ${d.value}`}
                arcLabel={(d) => `${d.id}: ${d.value}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;