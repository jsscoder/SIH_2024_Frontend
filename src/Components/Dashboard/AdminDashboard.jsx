// src/components/Dashboard.js
import React, { useState } from 'react';
import { Menu, X, Bell, User } from 'react-feather'; // Feather icons for menu, close, notifications, and user
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; // Chart library for data visualization

const drawerWidth = 240;

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const data = [
    { name: 'A+', value: 400 },
    { name: 'A', value: 300 },
    { name: 'B', value: 300 },
    { name: 'C', value: 200 },
  ];

  const COLORS = ['#4CAF50', '#FFC107', '#FF5722', '#F44336'];

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-blue-800 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          <h2 className="text-xl font-semibold">Principal Dashboard</h2>
          <button onClick={toggleSidebar} className="text-white lg:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link to="/" className="flex items-center px-4 py-2 text-white hover:bg-blue-700">
                <span className="mr-3">📈</span> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/appraisals" className="flex items-center px-4 py-2 text-white hover:bg-blue-700">
                <span className="mr-3">✍️</span> Teacher Appraisals
              </Link>
            </li>
            <li>
              <Link to="/students" className="flex items-center px-4 py-2 text-white hover:bg-blue-700">
                <span className="mr-3">🎓</span> Student Performance
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center px-4 py-2 text-white hover:bg-blue-700">
                <span className="mr-3">⚙️</span> Settings
              </Link>
            </li>
            <li>
              <Link to="/logout" className="flex items-center px-4 py-2 text-white hover:bg-blue-700">
                <span className="mr-3">🚪</span> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64 p-6">
        <header className="flex items-center justify-between mb-6">
          <button onClick={toggleSidebar} className="text-gray-700 lg:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-3xl font-semibold">WELOCOME TO THE ADMIN DASHBOARD</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700">
              <Bell size={24} />
            </button>
            <button className="text-gray-700">
              <User size={24} />
            </button>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Total Teachers</h2>
            <p className="text-3xl font-bold">45</p>
            <p className="text-sm text-gray-600">Total number of teachers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Pending Appraisals</h2>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-gray-600">Appraisals pending review</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Student Enrollments</h2>
            <p className="text-3xl font-bold">678</p>
            <p className="text-sm text-gray-600">Total student enrollments this year</p>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Teacher Ratings Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 col-span-2 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-gray-800">Teacher Sarah Smith completed their self-appraisal</span>
                <span className="text-gray-500 text-sm">1 hour ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-800">New student enrollment #2345</span>
                <span className="text-gray-500 text-sm">3 hours ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-800">Updated curriculum guidelines</span>
                <span className="text-gray-500 text-sm">1 day ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
