import React from 'react';

const AdminOpeningScreen = ({ onEnter }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">Welcome, Admin</h1>
      <p className="text-lg text-gray-700 dark:text-gray-400 mt-4">
        Manage the Teacher Appraisal System efficiently.
      </p>
      <button
        onClick={onEnter}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Enter Dashboard
      </button>
    </div>
  );
}

export default AdminOpeningScreen;